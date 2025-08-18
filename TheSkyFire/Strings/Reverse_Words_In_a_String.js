// - Problem Description - (Leetcode - 151 Problem)
// Link - https://leetcode.com/problems/reverse-words-in-a-string/description

// Given a string s, reverse the words of the string (Extra spaces in between and at the front and back to be removed.).

// - Using Inbuilt function of JS
// Time complexity - O(N)
// Space Complexity - O(N), where N is the length of the input string.

// trim(), split(), reverse(), join() all these functions will take linear time in worst case so O(N)
function reverseWords1(str) {
    const result = str.trim().split(/\s+/).reverse().join(" ");
    return result;
};

function reverseWords2(str) {
    const result = str
        .split(/\s+/) // create an array with each word in string
        .reduceRight((reverseStr, word) => `${reverseStr} ${word}`, '') // traverse the array from last & create an string
        .trim() // to remove the first useless space added initially.

    return result;
}

// - Using Normal Approach
// Time Complexity - O(N)
// Space Complexity - O(N), where N is the length of the input string.

function reverseWords3(str) {
    let answerString = ""; // To store reversed String as answer

    let i = 0, j = str.length - 1;

    // While loops for trimming the leading dnd trailing spaces in the string.
    while (i <= j && str[i] === " ") i++;
    while (j >= i && str[j] === " ") j--;

    // Extract this substring now without leading and trailing spaces in the string.
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

// - Using Stack (First in Last out Principle (FILO))
// Time Complexity - O(N)
// Space Complexity - O(N)

function reverseWords4(str) {
    let st = []; // Using array as stack

    let arr = str.split(" "); // Array of strings without spaces.

    for (let i = 0; i < arr.length; i++) {
        // Checking for spaces which were extra in between words in the string
        if (arr[i].length) {
            st.push(arr[i]);
        }
    }
    // Reverse the arr and join with spaces in between words
    return st.reverse().join(" ");
}

// Driver code
const str1 = reverseWords1("  hello    world  ");
const str2 = reverseWords2("The Sky is Blue");
const str3 = reverseWords3(" This  is a         good    example");
const str4 = reverseWords4(" JavaScript    is   the     most loved and hated    language");

console.log(str1); // Output - "world hello"
console.log(str2); // Output - "Blue is Sky The"
console.log(str3); // Output - "example good a is This"
console.log(str4); // Output - "language hated and loved most the is JavaScript"