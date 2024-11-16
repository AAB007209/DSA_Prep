// - Problem Description (GFG: Longest Subarray with Zero Sum)
// Link - https://www.geeksforgeeks.org/problems/largest-subarray-with-0-sum/1

/*
Given an array arr containing both positive and negative integers, the task is to compute the length of the largest subarray that has a sum of 0.
*/

// - Bruteforce Approach
// Time Complexity - O(N^2)
// Space Complexity - O(1)

function longestSubarrayZeroSum1(nums) {
    let n = nums.length;
    let maxLength = 0;

    // Iterate over all possible subarrays
    for (let i = 0; i < n; i++) {
        let sum = 0;

        for (let j = i; j < n; j++) {
            sum += nums[j];

            // Check if the sum is 0
            if (sum === 0) {
                maxLength = Math.max(maxLength, j - i + 1);
            }
        }
    }

    return maxLength;
}

// - Optimal Approach
// Time Complexity - O(N)
// Space Complexity - O(N)

function longestSubarrayZeroSum2(nums) {
    let maxlength = 0;
    let map = new Map();
    let sum = 0;

    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];

        if (sum === 0) {
            maxlength = i + 1;
        } else {
            if (map.has(sum)) {
                maxlength = Math.max(maxlength, i - map.get(sum));
            } else {
                map.set(sum, i);
            }
        }
    }
    return maxlength;
}

// - Driver code
console.log(longestSubarrayZeroSum1([15, -2, 2, -8, 1, 7, 10, 23])); // Output - 5
console.log(longestSubarrayZeroSum1([2, 10, 4])); // Output - 0

console.log(longestSubarrayZeroSum2([1, 0, -4, 3, 1, 0])); // Output - 5
console.log(longestSubarrayZeroSum2([1, 2, 3, 4, -2, -1, -3, -4])); // Output - 8
