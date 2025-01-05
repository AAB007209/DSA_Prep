// - Problem Description (GFG: Postfix to Prefix Conversion)

// Link - https://www.geeksforgeeks.org/problems/postfix-to-prefix-conversion/1

/*
You are given a string that represents the postfix form of a valid mathematical expression. Convert it to its prefix form.
*/

// - Stack Approach
// Time Complexity - O(N)
// Space Complexity - O(N)

function postfixToPrefix(expression) {
    const stack = [];
    const isOperator = (ch) => ['+', '-', '*', '/', '^'].includes(ch);

    // Traverse the expression from left to right
    for (let i = 0; i < expression.length; i++) {
        const ch = expression[i];

        if (isOperator(ch)) {
            const operand2 = stack.pop(); // Popping operand 2 first
            const operand1 = stack.pop(); // Popping operand 1 second

            const newExpression = `${ch}${operand1}${operand2}`;
            stack.push(newExpression);
        } else {
            stack.push(ch);
        }
    }
    return stack.pop();
}

// - Driver code
console.log(postfixToPrefix("ABC*+")); // Output: "+A*BC"
console.log(postfixToPrefix("AB+C*D-")); // Output: "-*+ABCD"
console.log(postfixToPrefix("ABCD^E-/+")); // Output: "+A/B^CDE-"
console.log(postfixToPrefix("AB+CD-*")); // Output: "*+AB-CD"