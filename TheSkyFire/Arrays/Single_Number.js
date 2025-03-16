// - Problem Description (Leetcode: 136. Single Number)

// Link - https://leetcode.com/problems/single-number/

/*
Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.

You must implement a solution with a linear runtime complexity and use only constant extra space.
*/

// - Bruteforce Approach
// Time Complexity - O(N log N)
// Space Complexity - O(1) [O(N) - Auxiliary Space]

function singleNumber1(nums) {
    if (nums.length === 1) return nums[0];

    nums.sort((a, b) => a - b);
    for (let i = 0; i < nums.length; i += 2) {
        if (nums[i] !== nums[i + 1]) {
            return nums[i];
        }
    }
}

// - Better Approach
// Time Complexity - O(N)
// Space Complexity - O(N)

function singleNumber2(nums) {
    let n = nums.length;
    let hash = new Map()

    for (let i = 0; i < n; i++) {
        hash.set(nums[i], (hash.get(nums[i]) || 0) + 1);
    }

    for (let [key, value] of hash) {
        if (value === 1) return key;
    }
}

// - Optimal Approach
// Time Complexity - O(N)
// Space Complexity - O(1)

function singleNumber3(nums) {
    const n = nums.length;
    if (n === 1) return nums[0];

    let result = nums[0];
    for (let i = 1; i < n; i++) {
        result ^= nums[i];
    }

    return result;
}

// - Driver code
console.log(singleNumber1([2, 2, 1])); // Output - 1
console.log(singleNumber1([4, 2, 1, 2, 1])); // Output - 4
console.log(singleNumber1([1])); // Output - 1

console.log(singleNumber2([2, 2, 1])); // Output - 1
console.log(singleNumber2([4, 2, 1, 2, 1])); // Output - 4
console.log(singleNumber2([1])); // Output - 1

console.log(singleNumber3([2, 2, 1])); // Output - 1
console.log(singleNumber3([4, 2, 1, 2, 1])); // Output - 4
console.log(singleNumber3([1])); // Output - 1