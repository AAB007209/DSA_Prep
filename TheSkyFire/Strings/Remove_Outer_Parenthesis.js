// - Problem Description (1021. Remove Outermost Parentheses)
// Link - https://leetcode.com/problems/remove-outermost-parentheses

// Time Complexity - O(N)
// Space Complexity - O(1)
function removeOuterParenthesis(str) {
    let answerString = "";
    let counter = 0; // Which we help to keep track of Outer parenthesis

    for (let i = 0; i < str.length; i++) {
        if (str[i] === "(") {
            if (counter > 0) { // Meaning its not the Outermost Parenthesis
                answerString += str[i];
            }
            counter++; // Incrementing the counter
        } else if (str[i] === ")") {
            counter--; // Decrementing the counter
            if (counter > 0) { // Meaning its not the Outermost Parenthesis
                answerString += str[i];
            }
        }
    }
    return answerString;
}

const str1 = "(())(())";
const str2 = "()()";
const str3 = "((()()()))(()())";

console.log(removeOuterParenthesis(str1)); // Output: ()()
console.log(removeOuterParenthesis(str2)); // Output : Empty String (No Output)
console.log(removeOuterParenthesis(str3)); // Output: (()()())()()

// We can solve this using Stack Approach as well.