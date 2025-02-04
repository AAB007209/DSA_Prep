// - Problem Description (Leetcode: 40. Combinaation Sum II)

// Link - https://leetcode.com/problems/combination-sum-ii/

/*
Given a collection of candidate numbers (candidates) and a target number (target), find all unique combinations in candidates where the candidate numbers sum to target.

Each number in candidates may only be used once in the combination.

Note: The solution set must not contain duplicate combinations.
*/

// - Recursive Approach
// Time Complexity - O(2^N)
// Space Complexity - O(2^N * N)

function findCombination(ind, target, arr, result, ds) {
    if (target === 0) {
        result.push([...ds]); 
        return;
    }
    
    if (ind >= arr.length || target < 0) return; // Base case

    // Pick the current element
    ds.push(arr[ind]);
    findCombination(ind + 1, target - arr[ind], arr, result, ds);
    ds.pop();

    // Move to the next distinct element to avoid duplicates
    let nextInd = ind + 1;
    while (nextInd < arr.length && arr[nextInd] === arr[ind]) {
        nextInd++;
    }
    
    // Skip duplicates and move to the next unique number
    findCombination(nextInd, target, arr, result, ds);
}

function combinationSum2(candidates, target) {
    candidates.sort((a, b) => a - b);
    let result = [];
    findCombination(0, target, candidates, result, []);
    return result;
}

// - Driver code
console.log(combinationSum2([2,3,6,7], 7)); // Output: [ [ 7 ] ]
console.log(combinationSum2([10,1,2,7,6,1,5], 8)); // Output: [ [ 1, 1, 6 ], [ 1, 2, 5 ], [ 1, 7 ], [ 2, 6 ] ]
console.log(combinationSum2([2,5,2,1,2], 5)); // Output: [ [ 1, 2, 2 ], [ 5 ] ]
