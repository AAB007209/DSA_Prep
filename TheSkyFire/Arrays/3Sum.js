// - Problem Description (Leetcode: 15. 3 Sum)
// Link - https://leetcode.com/problems/3sum/description

/*
Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

Notice that the solution set must not contain duplicate triplets.
*/

// - Bruteforce Approach
// Time Complexity - O(N^3)
// Space Complexity - O(1)

function threeSum1(nums) {
    let n = nums.length;
    nums.sort((a, b) => a - b);
    let ans = [];

    for (let i = 0; i < n - 2; i++) {
        if (i > 0 && nums[i] === nums[i - 1]) continue;

        for (let j = i + 1; j < n - 1; j++) {
            if (j > i + 1 && nums[j] === nums[j - 1]) continue;

            for (let k = j + 1; k < n; k++) {
                if (k > j + 1 && nums[k] === nums[k - 1]) continue;
                if (nums[i] + nums[j] + nums[k] === 0) {
                    ans.push([nums[i], nums[j], nums[k]]);
                }
            }
        }
    }
    return ans;
}

// - Optimal Approach (Two Pointers)
// Time Complexity - O(N^2)
// Space Complexity - O(1)

function threeSum2(nums) {
    let n = nums.length;
    nums.sort((a, b) => a - b);
    let ans = [];

    for (let i = 0; i < n - 2; i++) {
        // Because its sorted if the first element is itself positive then ahead elements cannot make sum zero.
        if (nums[i] > 0) break;

        // To avoid duplicates
        if (i > 0 && nums[i] === nums[i - 1]) continue;

        let target = -nums[i];
        let left = i + 1;
        let right = n - 1;

        while (left < right) {
            let sum = nums[left] + nums[right];

            if (sum === target) {
                ans.push([nums[i], nums[left], nums[right]]);

                // To skip duplicates move pointers
                while (left < right && nums[left] === nums[left + 1]) left++;
                while (left < right && nums[right] === nums[right - 1]) right--;

                // No Duplicates then Move to next elements
                left++;
                right--;
            }
            else if (sum < target) {
                left++;
            }
            else {
                right--;
            }
        }
    }
    return ans;
}

// - Driver code

console.log(threeSum2([-1, 0, 1, 2, -1, -4])); // [ [ -1, -1, 2 ], [ -1, 0, 1 ] ]
console.log(threeSum1([0, 1, 1])); // [ ]
console.log(threeSum2([0, 0, 0])); // [ [ 0, 0, 0 ] ]
