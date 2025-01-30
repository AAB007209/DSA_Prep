// - Problem Description (Leetcode: 22. Generate Parenthesis)

// Link - https://leetcode.com/problems/generate-parentheses/

/*
Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.
*/

// - Recursive Approach
// Time Complexity - O(4^N / squareRoot(N)​)
// Space Complexity - O(4^N / squareRoot(N) * N​)

function helper(str, open, close, valid) {
    if (open === 0 && close === 0) {
        valid.push(str); // Store valid combination
        return;
    }

    if (open > 0) {
        helper(str + '(', open - 1, close, valid); // Add '(' and recurse
    }

    if (close > open) { // Ensure we have more closing brackets available
        helper(str + ')', open, close - 1, valid); // Add ')' and recurse
    }
}

function generateParenthesis(n) {
    let valid = [];
    helper("", n, n, valid);
    return valid;
}

// - Driver code

// console.log(generateParenthesis(2));
console.log(generateParenthesis(3));
// console.log(generateParenthesis(4));