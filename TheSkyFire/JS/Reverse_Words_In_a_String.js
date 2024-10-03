// - Problem Description

// Given a string s, reverse the words of the string (Extra spaces in between and at the front and back to be removed.).

// - Using Inbuilt function of JS
// Time complexity - O(N)
// Space Complexity - O(N), where N is the length of the input string.

// trim(), split(), reverse(), join() all these functions will take linear time in worst case so O(N)
function reverseWords1(str) {
    const result = str.trim().split(/\s+/).reverse().join(" ");
    return result;
};

// - Using Normal Approach
// Time Complexity - O(N)
// Space Complexity - O(N), where N is the length of the input string.

function reverseWords2(str) {
    let answerString = ""; // To store reversed String as answer

    let i = 0, j = str.length - 1;

    // While loops for trimming the leading dnd trailing spaces in the string.
    while (i <= j && str[i] === " ") i++;
    while (j >= i && str[j] === " ") j--;

    // Extract this substring now without leading dnd trailing spaces in the string.
    str = str.substring(i, j + 1);

    // Split the trimmed string into words based on spaces
    let words = str.split(/\s+/);

    // Iterate through the words of the str in reverse order
    for (let k = words.length - 1; k > 0; k--) {

        // Append the current word and a space to the output
        answerString += words[k] + " ";
    }

    // Appending the first word to the output (No Trailing space here)
    answerString += words[0];

    return answerString;
}

// Driver code
const str1 = reverseWords1("  hello    world  ");
const str2 = reverseWords2("The Sky is Blue");

console.log(str1); // Output - "world hello"
console.log(str2); // Output - "Blue is Sky The"