// - Problem Description (Leetcode: 485. Max Consecutive Ones)

// Link - https://leetcode.com/problems/max-consecutive-ones/

/*
Given a binary array nums, return the maximum number of consecutive 1's in the array.
*/

// - Direct Approach
// Time Complexity - O(N)
// Space Complexity - O(1)

function maxConsecutiveOnes1(nums) {
    let currLen = 0, maxLen = 0;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 1) {
            currLen++; // Increment count of consecutive 1s
            maxLen = Math.max(maxLen, currLen);
        } else {
            currLen = 0; // Reset count when a 0 is encountered
        }
    }

    return maxLen;
}

// - Driver code
console.log(maxConsecutiveOnes1([1, 1, 0, 1, 1, 1]));
console.log(maxConsecutiveOnes1([1, 0, 1, 1, 0, 1]));
console.log(maxConsecutiveOnes1([1, 0]));
console.log(maxConsecutiveOnes1([1]));
console.log(maxConsecutiveOnes1([0]));
console.log(maxConsecutiveOnes1([0, 0]));