// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/security/ReentrancyGuard.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

contract Governance is Ownable, ReentrancyGuard {
    struct Proposal {
        uint256 id;
        address proposer;
        string title;
        string description;
        uint256 votesFor;
        uint256 votesAgainst;
        uint256 startTime;
        uint256 endTime;
        bool executed;
        ProposalState state;
        mapping(address => bool) hasVoted;
        mapping(address => uint256) votePower;
    }

    enum ProposalState {
        Pending,
        Active,
        Succeeded,
        Defeated,
        Executed
    }

    IERC20 public governanceToken;
    uint256 public proposalCounter;
    uint256 public votingPeriod = 7 days;
    uint256 public proposalThreshold = 10000 * 10**18; // 10,000 tokens to create proposal
    uint256 public quorumPercentage = 10; // 10% of total supply needed for quorum

    mapping(uint256 => Proposal) public proposals;
    mapping(address => uint256) public lockedTokens;
    mapping(address => uint256) public lockEndTime;

    event ProposalCreated(
        uint256 indexed proposalId,
        address indexed proposer,
        string title,
        uint256 startTime,
        uint256 endTime
    );
    
    event VoteCast(
        uint256 indexed proposalId,
        address indexed voter,
        bool support,
        uint256 votePower
    );
    
    event ProposalExecuted(uint256 indexed proposalId);
    event TokensLocked(address indexed user, uint256 amount, uint256 lockEndTime);
    event TokensUnlocked(address indexed user, uint256 amount);

    constructor(address _governanceToken) {
        governanceToken = IERC20(_governanceToken);
    }

    function createProposal(
        string memory _title,
        string memory _description
    ) external returns (uint256) {
        require(
            governanceToken.balanceOf(msg.sender) >= proposalThreshold,
            "Insufficient tokens to create proposal"
        );

        proposalCounter++;
        Proposal storage newProposal = proposals[proposalCounter];
        
        newProposal.id = proposalCounter;
        newProposal.proposer = msg.sender;
        newProposal.title = _title;
        newProposal.description = _description;
        newProposal.startTime = block.timestamp;
        newProposal.endTime = block.timestamp + votingPeriod;
        newProposal.state = ProposalState.Active;

        emit ProposalCreated(
            proposalCounter,
            msg.sender,
            _title,
            newProposal.startTime,
            newProposal.endTime
        );

        return proposalCounter;
    }

    function vote(uint256 _proposalId, bool _support) external nonReentrant {
        Proposal storage proposal = proposals[_proposalId];
        require(proposal.state == ProposalState.Active, "Proposal not active");
        require(block.timestamp <= proposal.endTime, "Voting period ended");
        require(!proposal.hasVoted[msg.sender], "Already voted");

        uint256 votePower = governanceToken.balanceOf(msg.sender);
        require(votePower > 0, "No voting power");

        proposal.hasVoted[msg.sender] = true;
        proposal.votePower[msg.sender] = votePower;

        if (_support) {
            proposal.votesFor += votePower;
        } else {
            proposal.votesAgainst += votePower;
        }

        // Lock tokens for the duration of the proposal
        if (lockedTokens[msg.sender] == 0) {
            lockedTokens[msg.sender] = votePower;
            lockEndTime[msg.sender] = proposal.endTime;
            emit TokensLocked(msg.sender, votePower, proposal.endTime);
        }

        emit VoteCast(_proposalId, msg.sender, _support, votePower);
    }

    function executeProposal(uint256 _proposalId) external {
        Proposal storage proposal = proposals[_proposalId];
        require(proposal.state == ProposalState.Active, "Proposal not active");
        require(block.timestamp > proposal.endTime, "Voting period not ended");
        require(!proposal.executed, "Proposal already executed");

        _updateProposalState(_proposalId);
        
        if (proposal.state == ProposalState.Succeeded) {
            proposal.executed = true;
            proposal.state = ProposalState.Executed;
            emit ProposalExecuted(_proposalId);
        }
    }

    function _updateProposalState(uint256 _proposalId) internal {
        Proposal storage proposal = proposals[_proposalId];
        
        if (block.timestamp <= proposal.endTime) {
            return; // Still active
        }

        uint256 totalVotes = proposal.votesFor + proposal.votesAgainst;
        uint256 requiredQuorum = (governanceToken.totalSupply() * quorumPercentage) / 100;

        if (totalVotes >= requiredQuorum && proposal.votesFor > proposal.votesAgainst) {
            proposal.state = ProposalState.Succeeded;
        } else {
            proposal.state = ProposalState.Defeated;
        }
    }

    function unlockTokens() external {
        require(lockedTokens[msg.sender] > 0, "No tokens to unlock");
        require(block.timestamp >= lockEndTime[msg.sender], "Tokens still locked");

        uint256 amount = lockedTokens[msg.sender];
        lockedTokens[msg.sender] = 0;
        lockEndTime[msg.sender] = 0;

        emit TokensUnlocked(msg.sender, amount);
    }

    function getProposalState(uint256 _proposalId) external view returns (ProposalState) {
        Proposal storage proposal = proposals[_proposalId];
        
        if (block.timestamp <= proposal.endTime && proposal.state == ProposalState.Active) {
            return ProposalState.Active;
        }
        
        if (proposal.executed) {
            return ProposalState.Executed;
        }

        uint256 totalVotes = proposal.votesFor + proposal.votesAgainst;
        uint256 requiredQuorum = (governanceToken.totalSupply() * quorumPercentage) / 100;

        if (totalVotes >= requiredQuorum && proposal.votesFor > proposal.votesAgainst) {
            return ProposalState.Succeeded;
        } else {
            return ProposalState.Defeated;
        }
    }

    function hasVoted(uint256 _proposalId, address _voter) external view returns (bool) {
        return proposals[_proposalId].hasVoted[_voter];
    }

    function getVotePower(uint256 _proposalId, address _voter) external view returns (uint256) {
        return proposals[_proposalId].votePower[_voter];
    }

    function setVotingPeriod(uint256 _votingPeriod) external onlyOwner {
        votingPeriod = _votingPeriod;
    }

    function setProposalThreshold(uint256 _proposalThreshold) external onlyOwner {
        proposalThreshold = _proposalThreshold;
    }

    function setQuorumPercentage(uint256 _quorumPercentage) external onlyOwner {
        require(_quorumPercentage <= 100, "Invalid percentage");
        quorumPercentage = _quorumPercentage;
    }
}