// - Problem Description (Leetcode: 704. Binary Search)

// Link - https://leetcode.com/problems/binary-search/description

/*
Given an array of integers nums which is sorted in ascending order, and an integer target, write a function to search target in nums. If target exists, then return its index. Otherwise, return -1.

You must write an algorithm with O(log n) runtime complexity.
*/

// - Bruteforce Approach (Linear Search)
// Time Complexity - O(N)
// Space Complexity - O(1)

function linearSearch(nums, target) {
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === target) return i;
    }
    return -1;
}

// - Optimal Approach (Binary Search)
// Time Complexity - O(Log N)
// Space Complexity - O(1)

function binarySearch(nums, target) {
    let n = nums.length;
    let left = 0, right = n - 1;

    while (left <= right) {
        let mid = (left + right) >> 1;

        if (nums[mid] === target) {
            return mid;
        } else if (nums[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return -1;
}

// - Recursive
// TC - O(log N)
// SC - O(log N)

function binarySearchRecursive(arr, low, high, x) {
    if (low > high) return -1;

    let mid = Math.floor((low + high) / 2);

    if (arr[mid] === x) return mid;

    if (arr[mid] > x) {
        return binarySearch(arr, low, mid - 1, x); // Search in left half
    } else {
        return binarySearch(arr, mid + 1, high, x); // Search in right half
    }
}

// - Driver Code
console.log(linearSearch([-1, 0, 3, 5, 9, 12], 9)); // 4
console.log(linearSearch([-1, 0, 3, 5, 9, 12], 2)); // 0

console.log(binarySearch([-1, 0, 3, 5, 9, 12], 5)); // 3
console.log(binarySearch([-1, 0, 3, 5, 9, 12], 12)); // 5

let arr = [1, 3, 5, 7, 9, 11, 15];
console.log(binarySearch(arr, 0, arr.length - 1, 7));
