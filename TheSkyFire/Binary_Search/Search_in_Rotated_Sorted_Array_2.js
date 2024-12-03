// - Problem Description (Leetcode: 81. Search in Rotated Sorted Array II)

// Link - https://leetcode.com/problems/search-in-rotated-sorted-array-ii/

/*
Given the array nums (sorted and rotated but duplicates exist) after the rotation and an integer target, return true if target is in nums, or false if it is not in nums.

You must decrease the overall operation steps as much as possible.
*/

// - Bruteforce Approach (Linear Search)
// Time Complexity - O(N)
// Space Complexity - O(1)

function search1(nums, target) {
    let n = nums.length;
    for (let i = 0; i < n; i++) {
        if (nums[i] === target) {
            return true;
        }
    }
    return false;
}

// - Optimal Approach (Binary Search)
// Time Complexity - O(Log N)
// Space Complexity - O(1)

function search2(nums, target) {
    let n = nums.length;
    let left = 0, right = n - 1;

    while (left <= right) {
        let mid = (left + right) >> 1;

        while (nums[left] == nums[mid] && nums[mid] == nums[right]) {
            left = left + 1;
            right = right - 1;
        }

        if (nums[mid] === target) return true;

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

    return false;
}

// - Driver code
// Bruteforce
console.log(search1([2, 5, 6, 0, 0, 1, 2], 0)); // Output -> true
console.log(search1([2, 5, 6, 0, 0, 1, 2], 3)); // Output -> false
console.log(search1([1], 0)); // Output -> false

// Optimal (Binary Search)
console.log(search1([2, 5, 6, 0, 0, 1, 2], 0)); // Output -> true
console.log(search1([2, 5, 6, 0, 0, 1, 2], 3)); // Output -> false
console.log(search1([1], 0)); // Output -> false
console.log(search2([4, 5, 6, 7, 8, 1, 2, 3], 8)); // Output -> true
console.log(search2([], 0)); // Output -> false
console.log(search2([1, 2, 3, 4, 5, 6, 7], 7)); // Output -> true