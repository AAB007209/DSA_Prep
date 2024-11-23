// - Problem Description (Leetcode: 152. Maximum Product Subarray)

// Link - https://leetcode.com/problems/maximum-product-subarray

/*
Given an integer array nums, find a subarray that has the largest product, and return the product.

The test cases are generated so that the answer will fit in a 32-bit integer.
*/

// - Bruteforce Approach
// Time Complexity - O(N^2)
// Space Complexity - O(1)

function maxProductSubarray1(nums) {
    let maxi = Number.MIN_SAFE_INTEGER;
    let n = nums.length;

    for (let i = 0; i < n; i++) {
        let product = 1;
        for (let j = i; j < n; j++) {
            product *= nums[j];
            maxi = Math.max(maxi, product);
        }
    }
    return maxi;
}

// - Optimal Approach 1 (Observation Based)
// Time Complexity - O(N)
// Space Complexity - O(1)

function maxProductSubarray2(nums) {
    let maxi = Number.MIN_SAFE_INTEGER;
    let n = nums.length;

    let prefixSum = 1, suffixSum = 1;
    for (let i = 0; i < n; i++) {

        // Handling Zero case
        if (prefixSum === 0) prefixSum = 1;
        if (suffixSum === 0) suffixSum = 1;

        prefixSum *= nums[i];
        suffixSum *= nums[n - i - 1];

        maxi = Math.max(maxi, Math.max(prefixSum, suffixSum));
    }
    return maxi;
}

// - Optimal Approach 2 (Kadane's Algo Based)
// Time Complexity - O(N)
// Space Complexity - O(1)

function maxProductSubarray3(nums) {
    let n = nums.length;
    if (n === 0) return 0;

    let maxProduct = nums[0]; // Tracks the maximum product
    let minProduct = nums[0]; // Tracks the minimum product (important for negative numbers)
    let result = nums[0];     // Stores the global maximum product

    for (let i = 1; i < n; i++) {
        let current = nums[i];

        if (current < 0) {
            // Swap max and min when the current number is negative
            [maxProduct, minProduct] = [minProduct, maxProduct];
        }

        // Update max and min products
        maxProduct = Math.max(current, maxProduct * current);
        minProduct = Math.min(current, minProduct * current);

        // Update the global maximum
        result = Math.max(result, maxProduct);
    }

    return result;
}

// - Driver code

console.log(maxProductSubarray1([2, 3, -2, 4])); // Output - 6
console.log(maxProductSubarray1([-2, 0, -1])); // Output - 0
console.log(maxProductSubarray2([2, 3, -1, 4, -6, 3, -2, 7])); // Output - 1008
console.log(maxProductSubarray2([1, 2, -1, 4, -5])); // Output - 40

// We can solve this problem using Kadane Algorithm (But Not recommeded for Interview by Striver)