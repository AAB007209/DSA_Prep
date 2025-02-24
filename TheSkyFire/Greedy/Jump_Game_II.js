// - Problem Description (Leetcode: 45. Jump Game II)

// Link - https://leetcode.com/problems/jump-game-ii/description/

/*

You are given a 0-indexed array of integers nums of length n. You are initially positioned at nums[0].

Each element nums[i] represents the maximum length of a forward jump from index i. In other words, if you are at nums[i], you can jump to any nums[i + j] where:

-> 0 <= j <= nums[i] and
-> i + j < n
Return the minimum number of jumps to reach nums[n - 1]. The test cases are generated such that you can reach nums[n - 1].

*/

// - Greedy Approach
// Time Complexity - O(N)
// Space Complexity - O(1)

var jump = function (arr) {
    let n = arr.length;
    if (n === 1) return 0;
    if (arr[0] === 0) return -1;

    let maxReach = arr[0], steps = arr[0], jumps = 1;

    for (let i = 1; i < n; i++) {
        if (i === n - 1) return jumps; // Reached the last index

        maxReach = Math.max(maxReach, i + arr[i]); // Update max reachable index
        steps--; // Use a step

        if (steps === 0) { // Need a new jump
            jumps++;
            if (i >= maxReach) return -1; // Can't move forward
            steps = maxReach - i; // Reset steps for the next jump
        }
    }
    return -1;
};

// - Driver code

console.log(jump([2, 3, 1, 1, 4])); // Output: 2
console.log(jump([2, 3, 0, 1, 4])); // Output: 2
console.log(jump([1, 2, 3, 1, 1, 0, 4, 5])); // Output: -1
console.log(jump([1, 2, 4, 1, 1, 0, 2, 5])); // Output: 4