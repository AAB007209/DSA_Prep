// - Problem Description
// Suppose an array sorted in ascending order is rotated at some pivot unknown to you beforehand. (i.e., [0,1,2,4,5,6,7] might become [4,5,6,7,0,1,2]).
// You are given a target value to search. If found in the array return its index, otherwise return -1 and this search has to be done Q times.
// You may assume no duplicate exists in the array.


// - Bruteforce Approach (Linear Search)
// Time Complexity - O(N)
// Space Complexity - O(1)

function linearSearch(nums, target) {
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === target) return i;
    }
    return -1;
}

// - Optimal Approach (Binary Search)
// Time Complexity - O(log N)
// Space Complexity - O(1)

function binarySearch(nums, target) {
    let low = 0, high = nums.length - 1;
    while (low <= high) {
        let mid = (low + high) >> 1;

        if (nums[mid] === target) return mid;

        if (nums[low] <= nums[mid]) {
            if (nums[low] <= target && target <= nums[mid]) {
                high = mid - 1;
            } else {
                low = mid + 1;
            }
        } else {
            if (nums[mid] <= target && target <= nums[high]) {
                low = mid + 1;
            } else {
                high = mid - 1;
            }
        }
    }
    return -1;
}

// Driver Code
const nums = [4, 5, 6, 7, 0, 1, 2]; // Rotated Sorted array
const target = 2;

const result = linearSearch(nums, target); // O(N)
const result2 = binarySearch(nums, target); // O(log N)

if (result2) {
    console.log(`Target ${target} present at index : ${result2}`);
} else {
    console.log("Target not present in the array");
}

// Output - Target 2 present at index : 6