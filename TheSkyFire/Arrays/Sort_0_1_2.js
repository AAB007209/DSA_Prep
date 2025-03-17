// - Problem Description (Leetcode: 75. Sort Colors)

// Link - https://leetcode.com/problems/sort-colors/description/

/*
Given an array nums with n objects colored red, white, or blue, sort them in-place so that objects of the same color are adjacent, with the colors in the order red, white, and blue.

We will use the integers 0, 1, and 2 to represent the color red, white, and blue, respectively.

You must solve this problem without using the library's sort function.

*/

// - Bruteforce Approach [Using In-built .sort() function]
// Time Complexity - O(N Log N)
// Space Complexity - O(N)

function sortColors1(nums) {
    return nums.sort((a, b) => a - b);
}

// - Better Approach [Using Counting Sort - Two pass approach]
// Time Complexity - O(N)
// Space Complexity - O(1)
function sortColors2(nums) {
    const n = nums.length;
    let freq = new Array(3).fill(0);

    // Count frequencies
    for (let i = 0; i < n; i++) {
        freq[nums[i]]++;
    }

    // Overwrite nums array with sorted values
    let index = 0;
    for (let i = 0; i < freq[0]; i++) {
        nums[index++] = 0;
    }
    for (let i = 0; i < freq[1]; i++) { 
        nums[index++] = 1;
    }
    for (let i = 0; i < freq[2]; i++) {
        nums[index++] = 2;
    }

    return nums;
}

// - Better Approach [Using Two pass approach - Two Pointers]
// Time Complexity - O(N)
// Space Complexity - O(1)
function sortColors3(nums){
    let n = nums.length;
    let left = 0, right = n - 1;

    // First pass: Move all 0s to the left
    for (let i = 0; i < n; i++) {
        if (nums[i] === 0) {
            [nums[i], nums[left]] = [nums[left], nums[i]];
            left++;
        }
    }

    // Second pass: Move all 1s after 0s
    right = left; // Now, right starts where 0s end
    for (let i = right; i < n; i++) {
        if (nums[i] === 1) {
            [nums[i], nums[right]] = [nums[right], nums[i]];
            right++;
        }
    }

    return nums;
}

// - Optimal Approach [Using Dutch National Flag Algo - One pass approach]
// Time Complexity - O(N)
// Space Complexity - O(1)
function sortColors4(nums){
    let low = 0, mid = 0, high = nums.length - 1;

    while (mid <= high) {
        if (nums[mid] === 0) {
            [nums[low], nums[mid]] = [nums[mid], nums[low]];
            low++;
            mid++;
        } else if (nums[mid] === 1) {
            mid++;
        } else {
            [nums[mid], nums[high]] = [nums[high], nums[mid]];
            high--;
        }
    }

    return nums;
}

// - Driver code
console.log(sortColors1([2,0,2,1,1,0])); // Output - [ 0, 0, 1, 1, 2, 2 ]
console.log(sortColors2([2,0,1])); // Output - [0, 1, 2]
console.log(sortColors3([1,1,2,0,2,1,0])); // Output - [0, 0, 1, 1, 1, 2, 2]
console.log(sortColors4([0,1,0,1,2,0,2,1,1,0])); // Output - [0, 0, 0, 0, 1, 1, 1, 1, 2, 2]