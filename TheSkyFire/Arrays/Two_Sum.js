// - Problem Description (Leetcode: 1. Two Sum)
// Link - https://leetcode.com/problems/two-sum/description

/*
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.
*/

// - Bruteforce Approach
// Time Complexity - O(N^2)
// Space Complexity - O(1)

function twoSum1(nums, target) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[j] === target - nums[i]) {
                return [i, j];
            }
        }
    }
    // Return an empty array if no solution is found
    return [];
};

// - Better Approach (Two pass Hash Table)
// Time Complexity - O(N)
// Space Complexity - O(N)

function twoSum2(nums, target) {
    const map = new Map();

    for (let i = 0; i < nums.length; i++) {
        map.set(nums[i], i);
    }

    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];

        if (map.has(complement) && map.get(complement) !== i) {
            return [i, map.get(complement)];
        }
    }
    return [];
}

// - Little Optimal Approach (One-pass Hash Table)
// Time Complexity - O(N)
// Space Complexity - O(N)

function twoSum3(nums, target) {
    const map = new Map();

    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        if (map.has(complement)) {
            return [map.get(complement), i];
        }
        map.set(nums[i], i);
    }
    return [];
}

// - Driver Code
const nums = [2, 7, 11, 15];
const target = 9;

const result = twoSum3(nums, target); // Using Optimal twoSum3 function
if (result.length > 0) {
    console.log(`Indices: ${result[0]} and ${result[1]}`); // Output: Indices: 0 and 1
} else {
    console.log("No solution found.");
}

const nums2 = [3, 2, 4, 8];
const target2 = 6;

const result2 = twoSum1(nums2, target2); // Using bruteforce twoSum1 Approach
if (result2.length > 0) {
    console.log(`Indices: ${result2[0]} and ${result2[1]}`); // Output: Indices: 1 and 2
} else {
    console.log("No solution found.");
}