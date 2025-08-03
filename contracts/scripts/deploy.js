const { ethers, upgrades } = require("hardhat");

async function main() {
  console.log("Starting deployment to Monad network...");

  // Get the ContractFactory and Signers here
  const [deployer] = await ethers.getSigners();
  console.log("Deploying contracts with the account:", deployer.address);
  console.log("Account balance:", (await deployer.getBalance()).toString());

  // Deploy MonadToken
  console.log("\n1. Deploying MonadToken...");
  const MonadToken = await ethers.getContractFactory("MonadToken");
  const monadToken = await MonadToken.deploy();
  await monadToken.deployed();
  console.log("MonadToken deployed to:", monadToken.address);

  // Deploy RewardManager
  console.log("\n2. Deploying RewardManager...");
  const RewardManager = await ethers.getContractFactory("RewardManager");
  const rewardManager = await RewardManager.deploy(monadToken.address);
  await rewardManager.deployed();
  console.log("RewardManager deployed to:", rewardManager.address);

  // Deploy Governance
  console.log("\n3. Deploying Governance...");
  const Governance = await ethers.getContractFactory("Governance");
  const governance = await Governance.deploy(monadToken.address);
  await governance.deployed();
  console.log("Governance deployed to:", governance.address);

  // Add RewardManager as minter
  console.log("\n4. Setting up permissions...");
  await monadToken.addMinter(rewardManager.address);
  console.log("RewardManager added as minter");

  // Transfer some tokens to RewardManager for rewards
  const rewardAmount = ethers.utils.parseEther("10000000"); // 10M tokens
  await monadToken.transfer(rewardManager.address, rewardAmount);
  console.log("Transferred tokens to RewardManager for rewards");

  // Create initial tasks
  console.log("\n5. Creating initial tasks...");
  
  const tasks = [
    {
      taskType: "CONNECT_WALLET",
      reward: ethers.utils.parseEther("100")
    },
    {
      taskType: "FIRST_TRANSACTION",
      reward: ethers.utils.parseEther("250")
    },
    {
      taskType: "GOVERNANCE_VOTE",
      reward: ethers.utils.parseEther("500")
    },
    {
      taskType: "SOCIAL_SHARE",
      reward: ethers.utils.parseEther("150")
    },
    {
      taskType: "LIQUIDITY_PROVIDE",
      reward: ethers.utils.parseEther("1000")
    }
  ];

  for (const task of tasks) {
    await rewardManager.createTask(task.taskType, task.reward);
    console.log(`Created task: ${task.taskType} with reward: ${ethers.utils.formatEther(task.reward)} MON`);
  }

  // Create initial governance proposal
  console.log("\n6. Creating initial governance proposal...");
  await governance.createProposal(
    "Increase Staking Rewards",
    "Proposal to increase staking rewards by 20% to incentivize more participation in the network"
  );
  console.log("Initial governance proposal created");

  console.log("\n=== Deployment Summary ===");
  console.log("MonadToken:", monadToken.address);
  console.log("RewardManager:", rewardManager.address);
  console.log("Governance:", governance.address);
  console.log("Deployer:", deployer.address);
  
  console.log("\n=== Verification Commands ===");
  console.log(`npx hardhat verify --network monad ${monadToken.address}`);
  console.log(`npx hardhat verify --network monad ${rewardManager.address} "${monadToken.address}"`);
  console.log(`npx hardhat verify --network monad ${governance.address} "${monadToken.address}"`);

  // Save deployment info
  const deploymentInfo = {
    network: "monad",
    timestamp: new Date().toISOString(),
    contracts: {
      MonadToken: monadToken.address,
      RewardManager: rewardManager.address,
      Governance: governance.address
    },
    deployer: deployer.address
  };

  const fs = require('fs');
  fs.writeFileSync(
    './deployment.json',
    JSON.stringify(deploymentInfo, null, 2)
  );
  
  console.log("\nDeployment completed! Contract addresses saved to deployment.json");
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });