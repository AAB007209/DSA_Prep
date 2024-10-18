// - Problem Description (Leetcode: 1614. Maximum Nesting Depth of the Parentheses)
// Link - https://leetcode.com/problems/maximum-nesting-depth-of-the-parentheses

/*
Given a valid parentheses string s, return the nesting depth of s. The nesting depth is the maximum number of nested parentheses.
*/

// - Using Counter Approach
// Time Complexity - O(N)
// Space Complexity - O(1)

function maxDepth(s) {
    let bracketCounter = 0;
    let maxi = -1;

    for (let i = 0; i < s.length; i++) {
        if (s[i] === "(") bracketCounter++;
        else if (s[i] === ")") bracketCounter--;
        maxi = Math.max(maxi, bracketCounter);
    }
    return maxi;
};

// - Driver Code
console.log(maxDepth("(1+(2*3)+((8)/4))+1")); // Output -> 3
console.log(maxDepth("(1)+((2))+((((3))))")); // Output -> 4
console.log(maxDepth("()(())")); // Output -> 2

// We can also use Stack for this problem. SC - O(N)