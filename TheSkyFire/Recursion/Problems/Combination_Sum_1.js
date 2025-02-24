// - Problem Description (Leetcode: 39. Combination Sum)

// Link - https://leetcode.com/problems/combination-sum/description/

/*
Given an array of distinct integers candidates and a target integer target, return a list of all unique combinations of candidates where the chosen numbers sum to target. You may return the combinations in any order.

The same number may be chosen from candidates an unlimited number of times. Two combinations are unique if the 
frequency of at least one of the chosen numbers is different.
*/

// - Recursive Approach
// Time Complexity - O(2^T) (T is the target)
// Space Complexity - O(2^T)

function findCombination(ind, target, arr, result, ds){
    if(ind === arr.length){
        if(target === 0){
            result.push([...ds]);
        }
        return;
    }

    // Pick an element
    if(arr[ind] <= target){
        ds.push(arr[ind]);
        findCombination(ind, target-arr[ind], arr, result, ds);
        ds.pop();
    }

    // Non-pick 
    findCombination(ind+1, target, arr, result, ds);
}

function combinationSum(candidates, target) {
    let result = [];
    let ds = [];
    findCombination(0, target, candidates, result, ds);
    return result;
}

// - Driver code
console.log(combinationSum([2,3,6,7], 7));