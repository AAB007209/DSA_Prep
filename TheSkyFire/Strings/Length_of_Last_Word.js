// - Problem Description (Leetcode: 58. Length of Last Word)
// Link - https://leetcode.com/problems/length-of-last-word/description

/*
Given a string s consisting of words and spaces, return the length of the last word in the string.

A word is a maximal substring consisting of non-space characters only.
*/

// Time Complexity - O(K) > where K is the length of the last word.
// Space Complexity - O(1)

function lengthOfLastWord(s) {
    let result = s.trim();
    let count = 0;
    for (let i = result.length - 1; i >= 0; i--) {
        if (result[i] !== " ") {
            count++;
        } else {
            break;
        }
    }
    return count;
};

// Driver Code
console.log(lengthOfLastWord("Hello World")); // Output -> 5
console.log(lengthOfLastWord("   fly me   to   the moon  ")); // Output -> 4
console.log(lengthOfLastWord("luffy is still joyboy")); // Output -> 6