// - Problem Description (Leetcode: 2873. Maximum Value of an Ordered Triplet I)

// Link - https://leetcode.com/problems/maximum-value-of-an-ordered-triplet-i

/*
You are given a 0-indexed integer array nums.

Return the maximum value over all triplets of indices (i, j, k) such that i < j < k. If all such triplets have a negative value, return 0.

The value of a triplet of indices (i, j, k) is equal to (nums[i] - nums[j]) * nums[k].
*/

// - Bruteforce Approach
// Time Complexity - O(N^3)
// Space Complexity - O(1)

function maximumTripletValue1(nums) {
    let maxi = 0;
    const n = nums.length;
    for (let i = 0; i < n - 2; i++) {
        for (let j = i + 1; j < n - 1; j++) {
            for (let k = j + 1; k < n; k++) {
                let result = (nums[i] - nums[j]) * nums[k];
                // console.log(result);
                maxi = Math.max(maxi, result);
            }
        }
    }
    return maxi;
}

// - Better Approach
// Time Complexity - O(2N) ~ O(N)
// Space Complexity - O(1)
function maximumTripletValue2(nums) {
    const n = nums.length;
    const max_right = new Array(n).fill(0);
    let max_val = 0;

    // Precomputing the max-right - Traversing from the right to left of array
    max_right[n - 1] = nums[n - 1];
    for (let j = n - 2; j >= 0; j--) {
        max_right[j] = Math.max(nums[j + 1], max_right[j + 1]);
    }

    // Track max_left dynamically while traversing array.
    let max_left = nums[0];
    for (let j = 1; j < n - 1; j++) {
        const current = (max_left - nums[j]) * max_right[j];
        max_val = Math.max(max_val, current);
        max_left = Math.max(max_left, nums[j]);
    }

    return max_val > 0 ? max_val : 0;
}

// - Optimal Approach
// Time Complexity - O(N)
// Space Complexity - O(1)
function maximumTripletValue3(nums) {
    let result = 0; // Stores the maximum triplet value
    let maxLeft = 0; // Tracks the maximum value seen so far (nums[i])
    let maxDifference = 0; // Tracks the maximum difference (nums[i] - nums[j])

    for (let k = 1; k < nums.length; k++) {
        // Update the result using the current element as nums[k]
        result = Math.max(result, maxDifference * nums[k]);

        // Update maxLeft with the current element
        maxLeft = Math.max(maxLeft, nums[k - 1]);

        // Update maxDifference using maxLeft and nums[k]
        maxDifference = Math.max(maxDifference, maxLeft - nums[k]);
    }

    return result;
}

// - Driver code
console.log(maximumTripletValue1([12, 6, 1, 2, 7])); // 77
console.log(maximumTripletValue1([1, 10, 3, 4, 19])); // 133
console.log(maximumTripletValue1([1, 2, 3])); // 0

console.log(maximumTripletValue2([12, 6, 1, 2, 7])); // 77
console.log(maximumTripletValue2([1, 10, 3, 4, 19])); // 133 
console.log(maximumTripletValue2([1, 2, 3])); // 0

console.log(maximumTripletValue3([12, 6, 1, 2, 7])); // 77
console.log(maximumTripletValue3([1, 10, 3, 4, 19])); // 133
console.log(maximumTripletValue3([1, 2, 3])); // 0