// - Problem Description (Leetcode: 283. Move Zeroes)

// Link - https://leetcode.com/problems/move-zeroes/description/

/*
Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

Note that you must do this in-place without making a copy of the array.
*/

// - Bruteforce Approach (Using Extra space array)
// Time Complexity - O(N)
// Space Complexity - O(N)

function moveZeroes1(nums) {
    const n = nums.length;
    let newArray = new Array(n).fill(0);
    let index = 0;

    for (let i = 0; i < n; i++) {
        if (nums[i] !== 0) {
            newArray[index++] = nums[i];
        }
    }

    return newArray;
}

// - Optimal Approach (Two Pointers)
// Time Complexity - O(N)
// Space Complexity - O(1)

function moveZeroes2(nums) {
    let left = 0; // Pointer for placing non-zero elements

    for (let right = 0; right < nums.length; right++) {
        if (nums[right] !== 0) {
            [nums[left], nums[right]] = [nums[right], nums[left]];
            left++; // Move the left pointer forward
        }
    }

    return nums;
}

// - Driver Code
console.log(moveZeroes1([0, 1, 0, 2, 0, 3, 12]));
console.log(moveZeroes1([0]));
console.log(moveZeroes1([0, 0, 1, 2, 3, 0, 4, 0, 5]));
console.log(moveZeroes1([0, 1, 0, 0, 0, 2, 3, 0, 4, 5, 0]));

console.log(moveZeroes2([0, 1, 0, 2, 0, 3, 12]));
console.log(moveZeroes2([0]));
console.log(moveZeroes2([0, 0, 1, 2, 3, 0, 4, 0, 5]));
console.log(moveZeroes2([0, 1, 0, 0, 0, 2, 3, 0, 4, 5, 0]));