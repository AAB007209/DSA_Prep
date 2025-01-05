// - Problem Description (GFG: Postfix to Infix Conversion)

// Link - https://www.geeksforgeeks.org/problems/postfix-to-infix-conversion/1

/*
You are given a string that represents the postfix form of a valid mathematical expression. Convert it to its infix form.
*/

// - Stack Approach
// Time Complexity - O(N)
// Space Complexity - O(N)

function postfixToInfix(expression) {
    const stack = [];
    const isOperator = (ch) => ['+', '-', '*', '/', '^'].includes(ch);

    for (let i = 0; i < expression.length; i++) {
        let ch = expression[i];

        if (isOperator(ch)) {
            const operand2 = stack.pop();
            const operand1 = stack.pop();

            const newExpression = `(${operand1}${ch}${operand2})`;
            stack.push(newExpression);
        } else {
            stack.push(ch);
        }
    }
    return stack.pop();
}

// - Driver code
console.log(postfixToInfix("ABC*+"));       // Output: "(A+(B*C))"
console.log(postfixToInfix("AB+C*D-"));     // Output: "(((A+B)*C)-D)"
console.log(postfixToInfix("ABCD^E-/+"));   // Output: "((A+((B/(C^D))-E)))"
console.log(postfixToInfix("AB+CD-*"));     // Output: "(((A+B)*(C-D)))"
console.log(postfixToInfix("ABC*+D/"));     // Output: "(((A+(B*C))/D))"