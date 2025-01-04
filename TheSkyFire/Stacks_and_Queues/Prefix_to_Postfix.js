// - Problem Description (GFG: Prefix to Postfix Conversion)

// Link - https://www.geeksforgeeks.org/problems/prefix-to-postfix-conversion/1

/*
You are given a string that represents the prefix form of a valid mathematical expression. Convert it to its postfix form.
*/

// - Stack Approach
// Time Complexity - O(N)
// Space Complexity - O(N)

function prefixToPostfix(prefix) {
    const stack = [];
    const isOperator = (ch) => ['+', '-', '*', '/', '^'].includes(ch);

    // Traverse the prefix expression from right to left
    for (let i = prefix.length - 1; i >= 0; i--) {
        const ch = prefix[i];

        if (isOperator(ch)) {
            // Operator: Pop two operands from the stack
            const operand1 = stack.pop();
            const operand2 = stack.pop();

            // Form the infix expression and push back to the stack
            const newExpression = `${operand1}${operand2}${ch}`;
            stack.push(newExpression);
        } else {
            // If it is Operand: Push directly to the stack
            stack.push(ch);
        }
    }

    // The final expression in the stack is the infix expression
    return stack.pop();
}

// - Driver code
console.log(prefixToPostfix("+A*BC"));       // Output: "ABC*+"
console.log(prefixToPostfix("*-A/BC-/AKL")); // Output: "ABC/-AK/L-*"
console.log(prefixToPostfix("-+A*BCD"));     // Output: "ABC*+D-"
console.log(prefixToPostfix("/+AB^-CDE"));   // Output: "AB+CD-E^/"