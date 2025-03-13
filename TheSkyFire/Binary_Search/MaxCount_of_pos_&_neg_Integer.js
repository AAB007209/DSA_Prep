// - Problem Description (Leetcode: 2529. Maximum Count of Positive Integer and Negative Integer)

// Link - https://leetcode.com/problems/maximum-count-of-positive-integer-and-negative-integer/

/*
Given an array nums sorted in non-decreasing order, return the maximum between the number of positive integers and the number of negative integers.

In other words, if the number of positive integers in nums is pos and the number of negative integers is neg, then return the maximum of pos and neg.
Note that 0 is neither positive nor negative.
*/

// - Bruteforce Approach
// Time Complexity - O(N)
// Space Complexity - O(1)

function maxCount1(nums) {
    const n = nums.length;
    if (nums[0] > 0 || nums[n - 1] < 0) {
        return n;
    }

    let pos = 0, neg = 0;
    for (let i = 0; i < n; i++) {
        if (nums[i] > 0) {
            pos++;
        } else if (nums[i] < 0) neg++;
    }
    let maxi = Math.max(pos, neg);
    return maxi;
}

// - Better Approach (Binary Search - Lower Bound) [Opposite Polarity Concept]
// Time Complexity - O(N) [When there are more Zeroes]
// Time Complexity - O(log N) [When no Zeroes]
// Space Complexity - O(1)

function maxCount2(nums) {
    const n = nums.length;
    let positive = 0, negative = 0;
    let left = 0, right = n - 1;
    while (left <= right) {
        let mid = (left + right) >> 1;
        if (nums[mid] < 0) {
            left = mid + 1; //we will search for positive no.
        } else {
            right = mid - 1;
        }
    }
    //right points to last negative index
    negative = right + 1;
    while (left < n && nums[left] == 0) left++; // left with point to first Positive integer (ignoring Zeroes)
    positive = n - left;
    return Math.max(positive, negative);
}

// - Optimal Approach (Binary Search: Lower Bound and Upper Bound)
// Time Complexity - O(log N)
// Space Complexity - O(1)

function lowerBound(nums, e) {
    let left = 0, right = nums.length, ans = nums.length;

    while (left < right) {
        let mid = Math.floor((left + right) / 2);
        if (nums[mid] >= e) {
            ans = mid;
            right = mid;
        } else {
            left = mid + 1;
        }
    }
    return ans;
}

function upperBound(nums, e) {
    let left = 0, right = nums.length, ans = nums.length;

    while (left < right) {
        let mid = Math.floor((left + right) / 2);
        if (nums[mid] > e) {
            ans = mid;
            right = mid;
        } else {
            left = mid + 1;
        }
    }
    return ans;
}

function maxCount3(nums) {
    let n = nums.length;
    return Math.max(lowerBound(nums, 0), n - upperBound(nums, 0));
}

// - Driver code
console.log(maxCount3([-2, -1, -1, 0, 1, 2, 3])); // Output: 3
console.log(maxCount3([-2, -1, -1, 0, 1])); // Output: 3
console.log(maxCount3([5, 44, 65, 87])); // Output: 4
console.log(maxCount3([0, 0, 0, 0, 5, 44, 65, 87])); // Output: 4
console.log(maxCount3([-12, -10, -9, -7, -5, -1])); // Output: 6