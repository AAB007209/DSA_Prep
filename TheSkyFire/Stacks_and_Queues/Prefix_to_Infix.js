// - Problem Description (GFG: Prefix to Infix Conversion)

// Link - https://www.geeksforgeeks.org/problems/prefix-to-infix-conversion/1

/*
You are given a string S of size N that represents the prefix form of a valid mathematical expression. 
The string S contains only lowercase and uppercase alphabets as operands and the operators are +, -, *, /, %, and ^.
Convert it to its infix form.
*/

// - Stack Approach
// Time Complexity - O(N)
// Space Complexity - O(N)

function prefixToInfix(prefix) {
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
            const newExpression = `(${operand1}${ch}${operand2})`;
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
console.log(prefixToInfix("+A*BC")); // Output: "(A+(B*C))"
console.log(prefixToInfix("*-A/BC-/AKL")); // Output: "((A-(B/C))*((A/K)-L))"
console.log(prefixToInfix("-+A*BCD")); // Output: "(A+((B*C)-D))"
console.log(prefixToInfix("/+AB^-CDE")); // Output: "((A+B)/((C^D)-E))"
