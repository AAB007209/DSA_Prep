// - Problem Description (GFG: Infix to Prefix Conversion)

// Link - https://www.geeksforgeeks.org/convert-infix-prefix-notation

/*
Given an infix expression, the task is to convert it to a prefix expression.
*/

// - Stack Approach
// Time Complexity - O(N)
// Space Complexity - O(N)

function infixToPostfix(expression){
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
                precedence[stack[stack.length - 1]] > precedence[ch]
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

function infixToPrefix(expression) {
    // Step 1 : Reverse the given expression
    const revInfix = expression.split("").reverse().join("");

    // Step 2 : Convert the revInfix to Postfix
    const infToPost = infixToPostfix(revInfix);

    // Step 3 : Reverse the converted expression
    return infToPost.split("").reverse().join("");
}

// - Driver Code
console.log(infixToPrefix("x+y*z/w+u")); // Output: ++x/*yzwu
console.log(infixToPrefix("a+b*c-d/e")); // Output: -+a*bc/de
console.log(infixToPrefix("p*q+r/s-t")); // Output: -+*pq/rst