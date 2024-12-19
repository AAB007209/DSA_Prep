// - Problem Description (Leetcode: 410. Split Array Largest Sum)

// Link - https://leetcode.com/problems/split-array-largest-sum

/*
Given an integer array nums and an integer k, split nums into k non-empty subarrays such that the largest sum of any subarray is minimized.
Return the minimized largest sum of the split.

A subarray is a contiguous part of the array.
*/

// - Bruteforce Approach (Linear Search)
// Time Complexity - O(N * (sum(nums[])-max(nums[])+1))
// Space Complexity - O(1)

// - Optimaal Approach (Binary Search)
// Time Complexity - O(N * log(sum(nums[])-max(nums[])+1))
// Space Complexity - O(1)

var splitArray = function (nums, k) {
    function helper(arr, k) {
        let n = arr.length;
        let subCount = 1, subSum = 0;
        for (let i = 0; i < n; i++) {
            if (subSum + arr[i] <= k) {
                subSum += arr[i];
            } else {
                subCount++;
                subSum = arr[i];
            }
        }
        return subCount;
    }

    let m = nums.length;
    if (k > m) return -1;
    let low = Math.max(...nums);
    let high = nums.reduce((a, b) => a + b, 0);

    // - Linear Approach
    // for(let i=low; i<=high; i++){
    //     if(helper(nums, i) === k){
    //         return i;
    //     }
    // }

    // - Binary Approach
    while (low <= high) {
        let mid = (low + high) >> 1;

        if (helper(nums, mid) <= k) {
            high = mid - 1;
        } else {
            low = mid + 1;
        }
    }

    return low;
};

// - Driver code
console.log(splitArray([7, 2, 5, 10, 8], 2)); // 18
console.log(splitArray([1, 2, 3, 4, 5], 2)); // 9