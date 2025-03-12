// - Problem Description (Leetcode: 2460. Apply Operations to an Array)

// Link - https://leetcode.com/problems/apply-operations-to-an-array

/*
You are given a 0-indexed array nums of size n consisting of non-negative integers.

You need to apply n - 1 operations to this array where, in the ith operation (0-indexed), you will apply the following on the ith element of nums:

If nums[i] == nums[i + 1], then multiply nums[i] by 2 and set nums[i + 1] to 0. Otherwise, you skip this operation.
After performing all the operations, shift all the 0's to the end of the array.

For example, the array [1,0,2,0,0,1] after shifting all its 0's to the end, is [1,2,1,0,0,0].
Return the resulting array.

Note that the operations are applied sequentially, not all at once.
*/

// - Bruteforce Approach
// Using an Extra array and then storing non-zero elements first and then all zero elements.
// Time Complexity - O(N)
// Space Complexity - O(N)

function applyOperations1(nums) {
    let n = nums.length;
    let tempArr = new Array(n).fill(0); // Extra array to store results
    let index = 0;

    // Step 1: Merge adjacent equal elements
    for (let i = 0; i < n - 1; i++) {
        if (nums[i] === nums[i + 1]) {
            nums[i] *= 2;
            nums[i + 1] = 0;
        }
    }

    // Step 2: Move non-zero elements to tempArr
    for (let i = 0; i < n; i++) {
        if (nums[i] !== 0) {
            tempArr[index++] = nums[i];
        }
    }

    return tempArr;
}

// - Optimal Approach (In Place - Two Pointer Approach)
// Time Complexity - O(N)
// Space Complexity - O(1)

function applyOperations2(nums) {
    const n = nums.length;

    for (let i = 0; i < n - 1; i++) {
        if (nums[i] === nums[i + 1]) {
            let temp = nums[i] * 2;
            nums[i] = temp;
            nums[i + 1] = 0;
        }
    }
    let left = 0; // Pointer for placing non-zero elements

    for (let right = 0; right < nums.length; right++) {
        if (nums[right] !== 0) {
            [nums[left], nums[right]] = [nums[right], nums[left]];
            left++; // Move the left pointer forward
        }
    }

    return nums;
}

// - Driver code
console.log(applyOperations1([1, 2, 2, 1, 1, 0]));
console.log(applyOperations1([0, 1]));
console.log(applyOperations1([1, 2, 1, 1, 0, 1, 0, 2]));

console.log(applyOperations2([1, 2, 2, 1, 1, 0]));
console.log(applyOperations2([0, 1]));
console.log(applyOperations2([1, 2, 1, 1, 0, 1, 0, 2]));
