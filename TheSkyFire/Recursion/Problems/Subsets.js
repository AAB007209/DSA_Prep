// - Problem Description (Leetcode: 78. Subsets)

// Link - https://leetcode.com/problems/subsets/

/*
Given an integer array nums of unique elements, return all possible 
subsets (the power set).

The solution set must not contain duplicate subsets. Return the solution in any order
*/

// - Recursive Approach
// Time Complexity - O(2^N)
// Space Complexity - O(N)

function helper(index, output, nums, subs){
    if(index === nums.length){
        subs.push([...output]);
        return;
    }

    helper(index + 1, output, nums, subs);
    
    output.push(nums[index]);
    helper(index + 1, output, nums, subs);
    
    output.pop();
}

function subsetsResult(nums) {
    let subs = [];
    helper(0, [], nums, subs);
    return subs;
}

// - Driver code
console.log(subsetsResult([1,2,3]));