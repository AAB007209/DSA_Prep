// - Problem Statement (Leetcode: 20. Valid Parenthesis)
// Link - https://leetcode.com/problems/valid-parentheses/description

/*

Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:
* Open brackets must be closed by the same type of brackets.
* Open brackets must be closed in the correct order.
* Every close bracket has a corresponding open bracket of the same type.

*/

// - Bruteforce Approach
// Time Complexity - O(N)
// Space Complexity - O(N)

function isValid1(s) {
    let stack = [];
    for (let c of s) { 
        if (c === '(' || c === '{' || c === '[') { 
            stack.push(c);
        } else {
            if (!stack.length || 
                (c === ')' && stack[stack.length - 1] !== '(') || 
                (c === '}' && stack[stack.length - 1] !== '{') ||
                (c === ']' && stack[stack.length - 1] !== '[')) {
                return false; // the string is not valid, so return false
            }
            stack.pop(); // String is valid remove the top element of the stack
        }
    }
    return !stack.length;
};

// - Using Stack + Hashmap Approach
// Time Complexity - O(N)
// Space Complexity - O(N)

function isValid2(s) {
    const stack = [];
    const bracketsMap = {
        '(': ')',
        '{': '}',
        '[': ']'
    };

    for (let char of s) {
        if (bracketsMap[char]) {
            stack.push(char);
        } else {
            if (stack.length === 0 || bracketsMap[stack.pop()] !== char) {
                return false;
            }
        }
    }
    return stack.length === 0;
};  


function isPair(last, cur) {
    return (
        (last === '(' && cur === ')') ||
        (last === '{' && cur === '}') ||
        (last === '[' && cur === ']')
    );
}; // This function return true if we have valid parentheses match

// - Using Stack Approach
// Time Complexity - O(N)
// Space Complexity - O(N)

function isValid3(s) {
    const stack = [];

    for (let i = 0; i < s.length; i++) {
        const cur = s[i];
        if (stack.length) {
            const last = stack[stack.length - 1];
            if (isPair(last, cur)) {
                stack.pop();
                continue;
            }
        }
        stack.push(cur);
    }
    return stack.length === 0;  
};

// - Driver code

console.log(isValid1("()")); // Output -> true
console.log(isValid2("()[]{}")); // Output -> true
console.log(isValid3("([)]")); // Output -> false

console.log(isValid3("(((((")); // Output -> false
console.log(isValid2("(]")); // Output -> false
console.log(isValid1("")); // Output -> true

