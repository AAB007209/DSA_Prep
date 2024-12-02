// - Problem Description (Leetcode: 35. Search Insert Position)

// Link - https://leetcode.com/problems/search-insert-position/description

/*
Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

You must write an algorithm with O(log n) runtime complexity.
*/

// - Bruteforce Approach (Linear Search)
// Time Complexity - O(N)
// Space Complexity - O(1)

function searchInsert1(nums, target) {
    let n = nums.length;
    if (target > nums[n - 1]) {
        return n;
    } else if (target === nums[n - 1]) {
        return n - 1;
    }

    for (let i = 0; i < n; i++) {
        if (i === 0 && nums[i] > target) {
            return 0;
        } else if ((nums[i] > target) || nums[i] === target) {
            return i;
        }
    }
    return -1;
}

// - Optimal Approach (Binary Search)
// Time Complexity - O(Log N)
// Space Complexity - O(1)

function searchInsert2(nums, target) {
    let n = nums.length;
    if (target > nums[n - 1]) return n;
    if (target === nums[n - 1]) return n - 1;

    let left = 0, right = n - 1;
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);

        if (nums[mid] === target) return mid;
        else if (nums[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return left;
}

// - Driver Code
// Bruteforce 
console.log(searchInsert1([1, 3, 5, 6], 5));
console.log(searchInsert1([1, 3, 5, 6], 2));
console.log(searchInsert1([1, 3, 5, 6], 7));

// Optimal (Binary Search)
console.log(searchInsert2([1, 3, 5, 6], 5));
console.log(searchInsert2([1, 3, 5, 6], 2));
console.log(searchInsert2([1, 3, 5, 6], 7));