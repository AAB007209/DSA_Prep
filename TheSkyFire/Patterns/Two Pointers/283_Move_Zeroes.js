// - Problem Description (Leetcode: 283. Move Zeroes)

// Link - https://leetcode.com/problems/move-zeroes

/*
Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

Note that you must do this in-place without making a copy of the array.
*/

// - Bruteforce Approach
// Time Complexity - O(N * N)
// Space Complexity - O(N)

function moveZeroes1(nums) {
    let nums2 = new Array(nums.length).fill(0);
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

function moveZeroes2(nums) {
    let i = 0;
    for (let j = 0; j < nums.length; j++) {
        if (nums[j] !== 0) {
            [nums[i], nums[j]] = [nums[j], nums[i]];
            i++;
        }
    }

    return nums;
}


// - Driver code
console.log(moveZeroes1([0, 1, 0, 3, 12]));
console.log(moveZeroes1([0]));

console.log(moveZeroes2([0, 1, 0, 3, 12]));
console.log(moveZeroes2([0]));