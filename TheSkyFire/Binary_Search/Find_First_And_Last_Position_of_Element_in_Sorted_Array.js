// - Problem Description (Leetcode: 34. Find First and Last position of element in sorted Array)

// Link - https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/description/

/*
Given an array of integers nums sorted in non-decreasing order, find the starting and ending position of a given target value.
If target is not found in the array, return [-1, -1].

You must write an algorithm with O(log n) runtime complexity.
*/

// - Bruteforce Approach (Linear Search)
// Time Complexity - O(N)
// Space Complexity - O(1)

function findFirstAndLast1(nums, target) {
    let n = nums.length;
    if (n === 0) return [-1, -1];

    let first = last = -1;

    for (let i = 0; i < n; i++) {
        if (nums[i] === target) {
            if (first === -1 && last === -1) {
                first = last = i;
            }
            else {
                last = Math.max(last, i);
            }
        }
    }
    return [first, last];
}

// - Optimal Approach (Binary Search)
// Time Complexity - O(Log N)
// Space Complexity - O(1)

function findFirstAndLast2(nums, target) {
    let n = nums.length;
    if (n === 0) return [-1, -1];
    if (n === 1 && nums[0] === target) return [0, 0];

    let startIndex = -1, endIndex = -1;
    let left = 0, right = n - 1;
    while (left <= right) {
        let mid = (left + right) >> 1;
        if (nums[mid] === target) {
            startIndex = mid;
            right = mid - 1;
        } else if (nums[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    left = 0, right = n - 1;
    while (left <= right) {
        let mid = (left + right) >> 1;
        if (nums[mid] === target) {
            endIndex = mid;
            left = mid + 1;
        } else if (nums[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return [startIndex, endIndex];
}

// - Optimal Approach (More Optimized Binary Search)
// Time Complexity - O(Log N)
// Space Complexity - O(1)

var findFirstAndLast3 = function (nums, target) {
    function binarySearch(findFirst) {
        let result = -1;
        let left = 0, right = nums.length - 1;

        while (left <= right) {
            let mid = (left + right) >> 1;

            if (nums[mid] === target) {
                result = mid;
                if (findFirst) {
                    right = mid - 1;
                } else {
                    left = mid + 1;
                }
            } else if (nums[mid] < target) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
        return result;
    }

    return [binarySearch(true), binarySearch(false)];
}

// - Driver code
// Bruteforce
console.log(findFirstAndLast1([5, 7, 7, 8, 8, 10], 8));
console.log(findFirstAndLast1([5, 7, 7, 8, 8, 10], 6));
console.log(findFirstAndLast1([], 0));

// Optimal (Binary Search)
console.log(findFirstAndLast2([5, 7, 7, 8, 8, 10], 8));
console.log(findFirstAndLast2([5, 7, 7, 8, 8, 10], 6));
console.log(findFirstAndLast2([], 0));

// More Optimized Binary Search
console.log(findFirstAndLast3([5, 7, 7, 8, 8, 10], 8));
console.log(findFirstAndLast3([5, 7, 7, 8, 8, 10], 6));
console.log(findFirstAndLast3([], 0));