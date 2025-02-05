// - Problem Description (Leetcode: 90. Subsets II)

// Link - https://leetcode.com/problems/subsets-ii/description/

/*
Given an integer array nums that may contain duplicates, return all possible 
subsets (the power set).

The solution set must not contain duplicate subsets. Return the solution in any order.
*/

// - Recursive Approach
// Time Complexity - O(2^N)
// Space Complexity - O(2^N)

var subsetsWithDup = function(nums) {
    function findSubsets(ind, nums, output, result) {
        if (ind === nums.length) {
            result.push([...output]);
            return;
        }

        // Exclude the current element & move to next unique element
        let nextIndex = ind + 1;

        // Skip all duplicates
        while (nextIndex < nums.length && nums[nextIndex] === nums[ind]) {
            nextIndex++;
        }

        findSubsets(nextIndex, nums, output, result);

        // Include the current element
        output.push(nums[ind]);
        findSubsets(ind + 1, nums, output, result);
        output.pop(); // Backtrack
    }

    nums.sort((a, b) => a - b); // Sort to handle duplicates
    let result = [];
    findSubsets(0, nums, [], result);
    return result;
};

// - Driver code
console.log(subsetsWithDup([1,2,2])); // [ [], [2], [2, 2], [1], [1, 2], [1, 2, 2] ]
console.log(subsetsWithDup([0])); // [ [], [0] ]
