// - Problem Description (Leetcode: 560. Subarray Sum Equals K)
// Link - https://leetcode.com/problems/subarray-sum-equals-k/description

/*
Given an array of integers nums and an integer k, return the total number of subarrays whose sum equals to k.

A subarray is a contiguous non-empty sequence of elements within an array.
*/

// - Bruteforce Approach
// Time Complexity - O(N^3)
// Space Complexity - O(1)

function countSubarraysWithSum1(nums, k) {
    let n = nums.length;
    let counter = 0;

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            let sum = 0;
            for (let k = i; k <= j; k++) {
                sum += nums[k];
            }
            if (sum === k) counter++
        }
    }
    return counter;
}

// - Better Approach
// Time Complexity - O(N^2)
// Space Complexity - O(1)

function countSubarraysWithSum2(nums, k) {
    let count = 0;
    let n = nums.length;

    for (let start = 0; start < n; start++) {
        let sum = 0;

        for (let end = start; end < n; end++) {
            sum += nums[end];
            if (sum === k) {
                count++;
            }
        }
    }
    return count;
}

// - Optimal Appraoch
// Time Complexity - O(N)
// Space Complexity - O(N)

function countSubarraysWithSum3(nums, k) {
    let prefixSum = 0;
    let count = 0;
    const prefixSumsMap = new Map();
    prefixSumsMap.set(0, 1); // Initialize to handle subarrays that sum to k from the start

    for (let i = 0; i < nums.length; i++) {
        prefixSum += nums[i];

        if (prefixSumsMap.has(prefixSum - k)) {
            count += prefixSumsMap.get(prefixSum - k);
        }

        // Update the prefixSumsMap with the current prefix sum
        prefixSumsMap.set(prefixSum, (prefixSumsMap.get(prefixSum) || 0) + 1);
    }
    return count;
}

// - Driver Code

console.log(countSubarraysWithSum1([1, 1, 1], 2)); // Output -> 2
console.log(countSubarraysWithSum2([1, 1, 1], 2)); // Output -> 2
console.log(countSubarraysWithSum3([1, 1, 1], 2)); // Output -> 2
