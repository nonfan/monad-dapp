const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Monad DApp Contracts", function () {
  let monadToken, rewardManager, governance;
  let owner, user1, user2;

  beforeEach(async function () {
    [owner, user1, user2] = await ethers.getSigners();

    // Deploy MonadToken
    const MonadToken = await ethers.getContractFactory("MonadToken");
    monadToken = await MonadToken.deploy();
    await monadToken.deployed();

    // Deploy RewardManager
    const RewardManager = await ethers.getContractFactory("RewardManager");
    rewardManager = await RewardManager.deploy(monadToken.address);
    await rewardManager.deployed();

    // Deploy Governance
    const Governance = await ethers.getContractFactory("Governance");
    governance = await Governance.deploy(monadToken.address);
    await governance.deployed();

    // Setup permissions
    await monadToken.addMinter(rewardManager.address);
    
    // Transfer tokens to reward manager
    const rewardAmount = ethers.utils.parseEther("1000000");
    await monadToken.transfer(rewardManager.address, rewardAmount);
  });

  describe("MonadToken", function () {
    it("Should have correct initial supply", async function () {
      const initialSupply = await monadToken.totalSupply();
      expect(initialSupply).to.equal(ethers.utils.parseEther("100000000"));
    });

    it("Should mint tokens correctly", async function () {
      const mintAmount = ethers.utils.parseEther("1000");
      await monadToken.mint(user1.address, mintAmount);
      
      const balance = await monadToken.balanceOf(user1.address);
      expect(balance).to.equal(mintAmount);
    });

    it("Should not allow non-minters to mint", async function () {
      const mintAmount = ethers.utils.parseEther("1000");
      await expect(
        monadToken.connect(user1).mint(user1.address, mintAmount)
      ).to.be.revertedWith("Not authorized to mint");
    });
  });

  describe("RewardManager", function () {
    beforeEach(async function () {
      // Create a test task
      await rewardManager.createTask("TEST_TASK", ethers.utils.parseEther("100"));
    });

    it("Should create tasks correctly", async function () {
      const reward = await rewardManager.getTaskReward(1);
      expect(reward).to.equal(ethers.utils.parseEther("100"));
    });

    it("Should complete and claim rewards", async function () {
      // Complete task for user1
      await rewardManager.completeTask(1, user1.address);
      
      // Check task completion
      const isCompleted = await rewardManager.isTaskCompleted(1, user1.address);
      expect(isCompleted).to.be.true;

      // Claim reward
      await rewardManager.connect(user1).claimReward(1);
      
      // Check balance
      const balance = await monadToken.balanceOf(user1.address);
      expect(balance).to.equal(ethers.utils.parseEther("100"));
    });

    it("Should apply streak bonuses", async function () {
      // Create multiple tasks
      for (let i = 2; i <= 8; i++) {
        await rewardManager.createTask(`TASK_${i}`, ethers.utils.parseEther("100"));
      }

      // Complete tasks to build streak
      for (let i = 1; i <= 7; i++) {
        await rewardManager.completeTask(i, user1.address);
        await rewardManager.connect(user1).claimReward(i);
      }

      // Check final balance (should include bonuses)
      const balance = await monadToken.balanceOf(user1.address);
      expect(balance).to.be.gt(ethers.utils.parseEther("700")); // Should be more than base rewards
    });
  });

  describe("Governance", function () {
    beforeEach(async function () {
      // Give users voting power
      const votingPower = ethers.utils.parseEther("15000");
      await monadToken.transfer(user1.address, votingPower);
      await monadToken.transfer(user2.address, votingPower);
    });

    it("Should create proposals", async function () {
      await governance.connect(user1).createProposal(
        "Test Proposal",
        "This is a test proposal"
      );

      const proposalState = await governance.getProposalState(1);
      expect(proposalState).to.equal(1); // Active state
    });

    it("Should allow voting", async function () {
      await governance.connect(user1).createProposal(
        "Test Proposal",
        "This is a test proposal"
      );

      await governance.connect(user1).vote(1, true);
      await governance.connect(user2).vote(1, false);

      const hasVoted1 = await governance.hasVoted(1, user1.address);
      const hasVoted2 = await governance.hasVoted(1, user2.address);
      
      expect(hasVoted1).to.be.true;
      expect(hasVoted2).to.be.true;
    });

    it("Should not allow double voting", async function () {
      await governance.connect(user1).createProposal(
        "Test Proposal",
        "This is a test proposal"
      );

      await governance.connect(user1).vote(1, true);
      
      await expect(
        governance.connect(user1).vote(1, false)
      ).to.be.revertedWith("Already voted");
    });
  });
});