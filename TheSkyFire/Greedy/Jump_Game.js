// - Problem Description (Leetcode: 55. Jump Game)

// Link - https://leetcode.com/problems/jump-game/

/*
You are given an integer array nums. You are initially positioned at the array's first index, and each element in the array represents your maximum jump length at that position.

Return true if you can reach the last index, or false otherwise.
*/

// - Greedy Approach
// Time Complexity - O(N)
// Space Complexity - O(1)

var canJump = function (nums) {
    let n = nums.length;
    if (n === 1 && nums[0] === 0) return true;

    let maxReach = 0;

    for (let i = 0; i < n; i++) {
        if (i > maxReach) return false;
        maxReach = Math.max(maxReach, i + nums[i]);
    }
    return true;
};

// - Driver code

console.log(canJump([2, 3, 1, 1, 4])); // Output: true
console.log(canJump([3, 2, 1, 0, 4])); // Output: false