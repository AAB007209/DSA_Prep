/*
 * What is Pangram?
 * Pangram is a sentence that contains all the letters in the alphabet.
*/

// - Problem Description
// Given a string check if it is a Pangram or not.

// Time Complexity - O(N
// Space Complexity - (1)
function checkPangram1(str) {
    if (typeof str !== 'string') {
        throw new TypeError('The given value is not a string')
    }

    const letterSet = new Set();

    for (const letter of str.toLowerCase()) {
        if (/[a-z]/.test(letter)) {
            letterSet.add(letter);
        }
    }
    return letterSet.size === 26;
}

// The below function uses .includes() function instead of .test()

function checkPangram2(str) {
    if (typeof str !== 'string') {
        throw new TypeError('The given value is not a string');
    }

    const letterSet = new Set();
    const alphabet = 'abcdefghijklmnopqrstuvwxyz'; // String of all lowercase letters

    for (const letter of str.toLowerCase()) {
        if (alphabet.includes(letter)) { // Check if letter is in the alphabet string
            letterSet.add(letter);
        }
    }
    return letterSet.size === 26;
}

const str1 = "The five boxing wizards jump quickly";
const str2 = "Five or six big jet planes zoomed quickly by the tower";
const str3 = "This is just a normal sentence";

console.log(checkPangram1(str1)); // true
console.log(checkPangram2(str2)); // true
console.log(checkPangram1(str3)); // false


// Learnings:
// 1. We can also solve this using this regular expression - return string.match(/([a-z])(?!.*\1)/gi).length === 26
// 2. .test() and .includes() function use cases.