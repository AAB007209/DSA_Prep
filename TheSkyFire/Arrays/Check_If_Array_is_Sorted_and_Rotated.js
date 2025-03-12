// - Problem Description (Leetcode: 1752. Check if Array is Sorted and Rotated)

// Link - https://leetcode.com/problems/check-if-array-is-sorted-and-rotated/

/*
Given an array nums, return true if the array was originally sorted in non-decreasing order, then rotated some number of positions (including zero). Otherwise, return false.
There may be duplicates in the original array.

Note: An array A rotated by x positions results in an array B of the same length such that B[i] == A[(i+x) % A.length] for every valid index i.
*/

// - Bruteforce Approach [Sorting and Checking]
// Time Complexity - O(N^2)
// Space Complexity - O(N)

function check1(nums) {
    const n = nums.length;
    let sorted = [...nums].sort((a, b) => a - b);
    let doubleNums = nums.concat(nums); // Duplicate array to simulate rotation

    for (let i = 0; i < n; i++) {
        if (doubleNums.slice(i, i + n).toString() === sorted.toString()) {
            return true;
        }
    }
    return false;
};

// - Optimal Approach
// Time Complexity - O(N)
// Space Complexity - O(1)

function check2(nums) {
    const n = nums.length;
    let count = 0;

    for (let i = 1; i < n; i++) {
        if (nums[i - 1] > nums[i]) {
            count++;
        }
    }
    if (nums[n - 1] > nums[0]) count++;
    return count <= 1;
}

// - Optimal Approach
// Time Complexity - O(N)
// Space Complexity - O(1)

function check3(nums) {
    const n = nums.length;
    let count = 0;

    for (let i = 0; i < n; i++) {
        if (nums[i] > nums[(i + 1) % n]) { // Circular check
            count++;
            if (count > 1) return false; // Early exit if more than 1 count
        }
    }
    return true;
}

// - Alternative Appraoch (Two-pointer Approach)
// Time Complexity - O(2N) ~ O(N)
// Space Complexity - O(1)

function check4(nums) {
    let i = 0;
    while (i < nums.length - 1 && nums[i] <= nums[i + 1]) i++;

    if (i === nums.length - 1) return true; // Already sorted

    let j = i + 1;
    while (j < nums.length - 1 && nums[j] <= nums[j + 1]) j++;

    return j === nums.length - 1 && nums[j] <= nums[0]; // Ensuring it can be rotated
};


// - Driver code

console.log(check1([3, 4, 5, 1, 2])); // Output - true

console.log(check2([2, 1, 3, 4])); // Output - false

console.log(check3([1, 2, 3, 4, 5])); // Output - true

console.log(check4([1, 2, 2, 2, 1])); // Output - true