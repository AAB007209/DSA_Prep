// - Problem Description (GFG: Infix to Postfix)

// Link - https://www.geeksforgeeks.org/problems/infix-to-postfix-1587115620/1

/*
Given an infix expression in the form of string s. Convert this infix expression to a postfix expression.

Note: The order of precedence is: ^ greater than * equals to / greater than + equals to -. Ignore the right associativity of ^.
*/

// - Stack Approach (N is the given expression length)
// Time Complexity - O(N)
// Space Complexity - O(N)

function infixToPostfix(expression) {
    const precedence = {
        '+': 1,
        '-': 1,
        '*': 2,
        '/': 2,
        '^': 3,
    };

    const isOperator = (ch) => ['+', '-', '*', '/', '^'].includes(ch);
    const isOperand = (ch) => /[a-zA-Z0-9]/.test(ch);

    let stack = [];
    let postfix = "";

    for (let ch of expression) {
        if (isOperand(ch)) {
            // Append operands directly to postfix
            postfix += ch;
        } else if (ch === '(') {
            // Push left parenthesis to stack
            stack.push(ch);
        } else if (ch === ')') {
            // Pop until left parenthesis
            while (stack.length > 0 && stack[stack.length - 1] !== '(') {
                postfix += stack.pop();
            }
            stack.pop(); // Discard the left parenthesis
        } else if (isOperator(ch)) {
            // Handle operators
            while (
                stack.length > 0 &&
                precedence[stack[stack.length - 1]] >= precedence[ch]
            ) {
                postfix += stack.pop();
            }
            stack.push(ch);
        }
    }

    // Pop any remaining operators
    while (stack.length > 0) {
        postfix += stack.pop();
    }

    return postfix;
}

// - Driver code
console.log(infixToPostfix("A+B*C")); // Output: "ABC*+"
console.log(infixToPostfix("a+b*(c^d-e)^(f+g*h)-i")); // Output: "abcd^e-fgh*+^*+i-"
console.log(infixToPostfix("A*(B+C)/D")); // Output: "ABC+*D/"
console.log(infixToPostfix("(a+b)*(c+d)")); // Output: "ab+cd+*"
