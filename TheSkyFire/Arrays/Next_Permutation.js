// - Problem Description (Leetcode: 31. Next Permutation)

// Link - https://leetcode.com/problems/next-permutation/description/

/*
Given an array of integers nums, find the next permutation of nums.
*/

// - Bruteforce Approach [Unable to code]
// Time Complexity - 
// Space Complexity - 

// Optimal Approach
// Time Complexity - O(N)
// Space Complexity - O(1)

function nextPermutation(nums){
    let i = nums.length - 1;
    while (i > 0 && nums[i-1] >= nums[i]) {
        i--;
    }
    if (i === 0) {
        nums.reverse();
        return nums;
    }

    let j = nums.length - 1;
    while (j >= i && nums[j] <= nums[i-1]) {
        j--;
    }
    [nums[i-1], nums[j]] = [nums[j], nums[i-1]];
    // reverse(nums, i, nums.length-1);

    let start = i, end = nums.length-1;
    while (i < end) {
        [nums[start], nums[end]] = [nums[end], nums[start]];
        start++;
        end--;
    }

    return nums;
}

// Example usage
console.log(nextPermutation([3, 2, 1])); // Output: [1, 2, 3]
console.log(nextPermutation([1, 2, 3])); // Output: [1, 3, 2]
console.log(nextPermutation([1, 1, 5])); // Output: [1, 5, 1]
console.log(nextPermutation([1, 1])); // Output: [1, 1]
