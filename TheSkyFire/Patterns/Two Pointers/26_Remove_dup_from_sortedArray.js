// - Problem Description (Leetcode: 26. Remove Duplicates from Sorted Array)

// Link - https://leetcode.com/problems/remove-duplicates-from-sorted-array/

/*
Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once.
The relative order of the elements should be kept the same. Then return the number of unique elements in nums.
*/

// - Bruteforce Approach
// Time Complexity - O(N * N)
// Space Complexity - O(N)

function removeDuplicates(nums) {
    let nums2 = new Array(nums.length).fill(-1);
    let i = 0;
    for (let val of nums) {
        if (!nums2.includes(val)) {
            nums2[i] = val;
            i++;
        }
    }

    return nums2;
}

// - Optimal Approach (Two Pointers Approach)
// Time Complexity - O(N)
// Space Complexity - O(1)

function removeDuplicates2(nums) {
    if (nums.length === 1) {
        return nums;
    }

    let i = 0;
    for (let j = i; j < nums.length; j++) {
        if (nums[i] !== nums[j]) {
            i++;
            nums[i] = nums[j];
        }
    }

    return nums;
    // return i + 1;
}

// - Driver Code
console.log(removeDuplicates([1, 1, 2]));
console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));

console.log(removeDuplicates2([1, 1, 2]));
console.log(removeDuplicates2([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));