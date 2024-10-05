// - Problem Description

// Given a alphanumberic string function should return true if the string has alphanumeric characters that are palindrome irrespective of special characters and the letter case.

// Time Complexity - O(N)
// Space Complexity - O(N)

function alphaNumeric(str) {
    if (typeof str !== 'string') {
        throw new TypeError("Argument should be string");
    }

    // Remove all the special characters and make it lowercase
    const newStr = str.replace(/[^a-z0-9]+/gi, '').toLowerCase();
    const midIndex = newStr.length >> 1; // Dividing the length by 1 using bits

    for (let i = 0; i < midIndex; i++) {
        if (newStr.at(i) !== newStr.at(~i)) {
            return false;
        }
    }
    return true;
}

const str1 = "2A3*3a2";
const str2 = "2A3 3a2";
const str3 = "2_A3*3#2";

console.log(alphaNumeric(str1)); // true
console.log(alphaNumeric(str2)); // true
console.log(alphaNumeric(str3)); // true


// Learnings from this code
// 1. .replace(/[^a-z0-9]+/gi, '') -> what is this replace function doing

// -> This is a negated character set. It matches any character that is not a lowercase letter (a-z) or a digit (0-9).
// -> The ^ inside the square brackets negates the set, meaning it looks for characters outside of the specified range (e.g., spaces, punctuation, special characters).
// -> +: The plus sign means "one or more" of the previous characters (non-alphanumeric characters in this case).
// -> g: The global flag makes the regex search and replace all occurrences of non-alphanumeric characters in the string.
// -> i: The case-insensitive flag makes it match both uppercase and lowercase letters (A-Z as well as a-z).

// 2. How we can use .at(-i) to get the last letter of the string and so on.
// 3. .at() was introduced in ES2022