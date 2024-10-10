// - Problem Description (Leetcode: 921. Minimum Add to Make Parentheses Valid)
// Link - https://leetcode.com/problems/minimum-add-to-make-parentheses-valid/description

/*
A parentheses string is valid if and only if:

-> It is the empty string,
-> It can be written as AB (A concatenated with B), where A and B are valid strings, or
-> It can be written as (A), where A is a valid string.

You are given a parentheses string s. In one move, you can insert a parenthesis at any position of the string.

For example, if s = "()))", you can insert an opening parenthesis to be "(()))" or a closing parenthesis to be "())))".
Return the minimum number of moves required to make s valid.
*/

// - Stack Approach
// Time Complexity - O(N)
// Space Complexity - O(N)

function minAddToMakeValid1(s) {
    let stack = [];

    for (let i = 0; i < s.length; i++) {
        if (stack.length === 0) {
            stack.push(s[i]);
        } else if (s[i] === ')' && stack[stack.length - 1] === '(') {
            stack.pop();
        } else {
            stack.push(s[i]);
        }
    }
    return stack.length;
};

// - Optimal Appraoch
// Time Complexity - O(N)
// Space Complexity - O(1)

function minAddToMakeValid2(s) {
    let openBrackets = 0, closeBrackets = 0;

    for (let i = 0; i < s.length; i++) {
        if (s[i] === '(') {
            openBrackets++;
        } else {
            if (openBrackets > 0) {
                openBrackets--;
            } else {
                closeBrackets++;
            }
        }
    }
    return openBrackets + closeBrackets;
};

// Driver Code

console.log(minAddToMakeValid1("()))((")); // Output - 4
console.log(minAddToMakeValid2("()")); // Output - 0
console.log(minAddToMakeValid1("()()()))(())((")); // Output - 4
console.log(minAddToMakeValid2("(((")); // Output - 3

// Remember one thing in this question:
// -> They have asked to make the parenthesis valid by adding brackets.
// -> So If the Brackets are equal we dont have to check for valid thing by rearranging instead we need to add more brackets to make them valid.