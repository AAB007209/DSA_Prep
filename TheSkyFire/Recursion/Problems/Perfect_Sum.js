// - Problem Description (GFG: Perfect Sum Problem)

// Link - https://www.geeksforgeeks.org/problems/perfect-sum-problem5633/1

/*
Given an array arr of non-negative integers and an integer target, the task is to count all subsets of the array whose sum is equal to the given target.
*/

// - This problems optimal Approach is using Dynamic Programming (Yet to be learned and solve)

// - Recursive Approach
// Time Complexity - O(2^N)
// Space Complexity - O(2^N) [Result Storage] + O(N) [Auxiliary Space]

function perfectSum(arr, index, sum, subset, result) {
    // Base Condition: If we have reached the end of the array
    if (index === arr.length) {
        if (sum === 0) {
            result.push([...subset]);  // Store valid subset
        }
        return;
    }

    // Pick the current element (Include it in the subset)
    if (arr[index] <= sum) {
        subset.push(arr[index]);
        perfectSum(arr, index + 1, sum - arr[index], subset, result);
        subset.pop(); // Backtrack
    }

    // Not Pick the current element (Skip it)
    perfectSum(arr, index + 1, sum, subset, result);
}

function findSubsets(arr, targetSum) {
    let result = [];
    perfectSum(arr, 0, targetSum, [], result);
    return result.length;
}

// - Driver Code
console.log(findSubsets([2, 3, 5, 7], 7));
console.log(findSubsets([5, 2, 3, 10, 6, 8], 10));


/*

- Points to remember

1. Auxiliary Space - Only considers the extra space used by the algorithm.
2. Space Complexity - Includes both Auxiliary space and input storage.

*/
