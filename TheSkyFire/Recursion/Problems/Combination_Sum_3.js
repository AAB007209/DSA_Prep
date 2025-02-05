// - Problem Description (Leetcode: 216. Combination Sum III)

// Link - https://leetcode.com/problems/combination-sum-iii/description/

/*
Find all valid combinations of k numbers that sum up to n such that the following conditions are true:

Only numbers 1 through 9 are used.
Each number is used at most once.

Return a list of all possible valid combinations. The list must not contain the same combination twice, and the combinations may be returned in any order.
*/

// - Recursive Approach
// Time Complexity - O(2^9)
// Space Complexity - O(K)

var combinationSum3 = function(k, n) {
    const res = [];
    
    function findSet(start, sum, subset) {
        // Prune conditions
        if (sum > n || subset.length > k) return;
        
        // Valid combination
        if (sum === n && subset.length === k) {
            res.push([...subset]);
            return;
        }

        if (start > 9) return; // No numbers left to pick

        // Include the current number
        subset.push(start);
        findSet(start + 1, sum + start, subset);
        subset.pop(); // Backtrack

        // Exclude the current number and move to the next
        findSet(start + 1, sum, subset);
    }

    findSet(1, 0, []);
    return res;
};

console.log(combinationSum3(3, 7)); // Output: [[1,2,4]]
console.log(combinationSum3(3, 9)); // Output: [[1,2,6], [1,3,5], [2,3,4]]
console.log(combinationSum3(9, 45)); // Output: [[1,2,3,4,5,6,7,8,9]]