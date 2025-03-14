// - Problem Description (Leetcode: 26. Remove Duplicates from Sorted Array)

// Link - https://leetcode.com/problems/remove-duplicates-from-sorted-array/description/

/*
Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once. 
The relative order of the elements should be kept the same. Then return the number of unique elements in nums.

Consider the number of unique elements of nums to be k, to get accepted, you need to do the following things:

Change the array nums such that the first k elements of nums contain the unique elements in the order they were present in nums initially. 
The remaining elements of nums are not important as well as the size of nums.

Return k.
*/

// - Better Approaches (Not In-place)
// Time Complexity - O(N^2)
// Space Complexity - O(N)

function removeDuplicates2(nums) {
    const n = nums.length;
    let newArray = new Array(n).fill(-1);

    let ind = 0;
    for (let i = 0; i < n; i++) {
        if (!newArray.includes(nums[i])) {
            newArray[ind++] = nums[i];
        }
    }
    // return newArray;
    return ind;
}

// - Bruteforce Approaches (Not In-place)
// Time Complexity - O(N)
// Space Complexity - O(N)

function removeDuplicates(nums) {
    const n = nums.length;
    let set = new Set();
    let newArray = new Array(n).fill(-1);
    let ind = 0;

    for (let i = 0; i < n; i++) {
        if (!set.has(nums[i])) {
            set.add(nums[i]);
            newArray[ind++] = nums[i];
        }
    }
    return ind;// We can also just return Set Size
    // return newArray;
}

// - Optimal Approach (Two Pointers)
// Time Complexity - O(N)
// Space Complexity - O(1)

function removeDuplicates3(nums) {
    let index = 1; // Position to place unique elements

    for (let i = 1; i < nums.length; i++) {
        if (nums[i] !== nums[i - 1]) {
            nums[index] = nums[i];
            index++;
        }
    }

    return index;
}

// - Driver Code

// Bruteforce
console.log(removeDuplicates([1, 1, 2, 2, 3, 4, 4, 4, 4])); // Output: 4
console.log(removeDuplicates([1, 1, 2])); // Output: 2
console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4])); // Output: 5

// Better
console.log(removeDuplicates2([1, 1, 2, 2, 3, 4, 4, 4, 4])); // Output: 4
console.log(removeDuplicates2([1, 1, 2])); // Output: 2
console.log(removeDuplicates2([0, 0, 1, 1, 1, 2, 2, 3, 3, 4])); // Output: 5

// Optimal
console.log(removeDuplicates3([1, 1, 2, 2, 3, 4, 4, 4, 4])); // Output: 4
console.log(removeDuplicates3([1, 1, 2])); // Output: 2
console.log(removeDuplicates3([0, 0, 1, 1, 1, 2, 2, 3, 3, 4])); // Output: 5