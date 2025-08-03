// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/security/ReentrancyGuard.sol";
import "@openzeppelin/contracts/security/Pausable.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol";

contract RewardManager is Ownable, ReentrancyGuard, Pausable {
    using SafeERC20 for IERC20;

    struct Task {
        uint256 id;
        string taskType;
        uint256 reward;
        bool isActive;
        mapping(address => bool) completed;
        mapping(address => bool) claimed;
    }

    struct UserStats {
        uint256 totalTasksCompleted;
        uint256 totalRewardsClaimed;
        uint256 currentStreak;
        uint256 lastActivityTimestamp;
    }

    IERC20 public rewardToken;
    uint256 public taskCounter;
    uint256 public totalRewardsDistributed;

    mapping(uint256 => Task) public tasks;
    mapping(address => UserStats) public userStats;
    mapping(address => bool) public authorizedManagers;

    event TaskCreated(uint256 indexed taskId, string taskType, uint256 reward);
    event TaskCompleted(uint256 indexed taskId, address indexed user);
    event RewardClaimed(uint256 indexed taskId, address indexed user, uint256 amount);
    event ManagerAdded(address indexed manager);
    event ManagerRemoved(address indexed manager);

    modifier onlyManager() {
        require(authorizedManagers[msg.sender] || msg.sender == owner(), "Not authorized");
        _;
    }

    constructor(address _rewardToken) {
        rewardToken = IERC20(_rewardToken);
        authorizedManagers[msg.sender] = true;
    }

    function createTask(
        string memory _taskType,
        uint256 _reward
    ) external onlyManager {
        taskCounter++;
        Task storage newTask = tasks[taskCounter];
        newTask.id = taskCounter;
        newTask.taskType = _taskType;
        newTask.reward = _reward;
        newTask.isActive = true;

        emit TaskCreated(taskCounter, _taskType, _reward);
    }

    function completeTask(uint256 _taskId, address _user) external onlyManager {
        Task storage task = tasks[_taskId];
        require(task.isActive, "Task not active");
        require(!task.completed[_user], "Task already completed");

        task.completed[_user] = true;
        
        UserStats storage stats = userStats[_user];
        stats.totalTasksCompleted++;
        
        // Update streak
        if (block.timestamp - stats.lastActivityTimestamp <= 86400) { // 24 hours
            stats.currentStreak++;
        } else {
            stats.currentStreak = 1;
        }
        stats.lastActivityTimestamp = block.timestamp;

        emit TaskCompleted(_taskId, _user);
    }

    function claimReward(uint256 _taskId) external nonReentrant whenNotPaused {
        Task storage task = tasks[_taskId];
        require(task.isActive, "Task not active");
        require(task.completed[msg.sender], "Task not completed");
        require(!task.claimed[msg.sender], "Reward already claimed");

        task.claimed[msg.sender] = true;
        
        uint256 rewardAmount = task.reward;
        
        // Apply streak bonus (up to 50% bonus for 7+ day streak)
        UserStats storage stats = userStats[msg.sender];
        if (stats.currentStreak >= 7) {
            rewardAmount = rewardAmount * 150 / 100; // 50% bonus
        } else if (stats.currentStreak >= 3) {
            rewardAmount = rewardAmount * 125 / 100; // 25% bonus
        }

        stats.totalRewardsClaimed += rewardAmount;
        totalRewardsDistributed += rewardAmount;

        rewardToken.safeTransfer(msg.sender, rewardAmount);

        emit RewardClaimed(_taskId, msg.sender, rewardAmount);
    }

    function isTaskCompleted(uint256 _taskId, address _user) external view returns (bool) {
        return tasks[_taskId].completed[_user];
    }

    function isRewardClaimed(uint256 _taskId, address _user) external view returns (bool) {
        return tasks[_taskId].claimed[_user];
    }

    function getTaskReward(uint256 _taskId) external view returns (uint256) {
        return tasks[_taskId].reward;
    }

    function addManager(address _manager) external onlyOwner {
        authorizedManagers[_manager] = true;
        emit ManagerAdded(_manager);
    }

    function removeManager(address _manager) external onlyOwner {
        authorizedManagers[_manager] = false;
        emit ManagerRemoved(_manager);
    }

    function withdrawTokens(address _token, uint256 _amount) external onlyOwner {
        IERC20(_token).safeTransfer(owner(), _amount);
    }

    function pause() external onlyOwner {
        _pause();
    }

    function unpause() external onlyOwner {
        _unpause();
    }
}