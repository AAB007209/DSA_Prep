// - Problem Description (GFG: Reverse an Array)

// Link - https://www.geeksforgeeks.org/problems/reverse-an-array/0

/*
You are given an array of integers arr[]. Your task is to reverse the given array.

Note: Modify the array in place.
*/

// - Recursive Approach
// Time Complexity - O(N)
// Space Complexity - O(N)

function helper(arr, start, end) {
    if (start >= end) return;

    [arr[start], arr[end]] = [arr[end], arr[start]];
    helper(arr, start + 1, end - 1);
}

function reverseArray(arr) {
    helper(arr, 0, arr.length - 1);
    return arr;
}

// - Driver code

console.log(reverseArray([1, 4, 3, 2, 6, 5])); // Output: [5, 6, 2, 3, 4, 1]
console.log(reverseArray([4, 5, 2])); // Output: [2, 5, 4]
console.log(reverseArray([1])); // Output: [1]