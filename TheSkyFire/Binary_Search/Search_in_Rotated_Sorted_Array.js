// - Problem Description (Leetcode: 33. Search in Rotated Sorted Array)

// Link - https://leetcode.com/problems/search-in-rotated-sorted-array/description/

/*
Given the array nums after the possible rotation and an integer target, return the index of target if it is in nums, or -1 if it is not in nums.
You must write an algorithm with O(log n) runtime complexity.
*/

// - Bruteforce Approach (Linear Search)
// Time Complexity - O(N)
// Space Complexity - O(1)

function search1(nums, target) {
    let n = nums.length;
    for (let i = 0; i < n; i++) {
        if (nums[i] === target) {
            return i;
        }
    }
    return -1;
}

// - Optimal Approach (Binary Search)
// Time Complexity - O(Log N)
// Space Complexity - O(1)

function search2(nums, target) {
    let n = nums.length;
    let left = 0, right = n - 1;

    while (left <= right) {
        let mid = (left + right) >> 1;

        if (nums[mid] === target) return mid;
        else if (nums[mid] >= nums[left]) {
            if (nums[left] <= target && target < nums[mid]) {
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        } else {
            if (nums[mid] < target && target <= nums[right]) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
    }

    return -1;
}

// - Driver code
// Bruteforce
console.log(search1([4, 5, 6, 7, 0, 1, 2], 0)); // Output -> 4
console.log(search1([4, 5, 6, 7, 0, 1, 2], 3)); // Output -> -1
console.log(search1([1], 0)); // Output -> -1

// Optimal (Binary Search)
console.log(search2([2, 4, 5, 6, 7, 0, 1], 0)); // Output -> 4
console.log(search2([4, 5, 6, 7, 0, 1, 2], 3));  // Output -> -1
console.log(search2([1], 0)); // Output -> -1
console.log(search2([4, 5, 6, 7, 8, 1, 2, 3], 8)); // Output -> 4
console.log(search2([], 0)); // Output -> -1
console.log(search2([1, 2, 3, 4, 5, 6, 7], 7)); // Output -> 6