// Problem Description (Leetcode: 151. Reverse Words in a String)
// Link - https://leetcode.com/problems/reverse-words-in-a-string

/*
Given an input string s, reverse the order of the words.

A word is defined as a sequence of non-space characters. The words in s will be separated by at least one space.

Return a string of the words in reverse order concatenated by a single space.

Note that s may contain leading or trailing spaces or multiple spaces between two words. The returned string should only have a single space separating the words. Do not include any extra spaces.
*/

// - Bruteforce Approach (Using In-built functions)
// Time Complexity - O(N)
// Space Complexity - O(N)

function reverseWords(s) {
    // let a = s.trim().replace(/\s+/g, ' ').split(" ");
    // let b = a.reverse();
    // return b.join(" ");

    // return s.trim().replace(/\s+/g, ' ').split(" ").reverse().join(" ");
    return s.trim().split(/\s+/).reverse().join(" ");
}

// - Using Normal Approach
// Time Complexity - O(N)
// Space Complexity - O(N), where N is the length of the input string.

function reverseWords2(str) {
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

function reverseWords3(str) {
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
console.log(reverseWords("the sky is blue"));
console.log(reverseWords("     hello world   "));
console.log(reverseWords("a good   example"));

console.log(reverseWords2("the sky is blue"));
console.log(reverseWords2("     hello world   "));
console.log(reverseWords2("a good   example"));

console.log(reverseWords3("the sky is blue"));
console.log(reverseWords3("     hello world   "));
console.log(reverseWords3("a good   example"));
