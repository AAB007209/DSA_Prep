// - Problem Description (Leetcode: 125. Valid Palindrome)
// Link - https://leetcode.com/problems/valid-palindrome/description

/*
A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

Given a string s, return true if it is a palindrome, or false otherwise.
*/

// - Using Two Pointers Approach
// Time Complexity - O(N)
// Space Complexity - O(N)

function validPalindrome1(s) {
    // Remove non-alphanumeric characters and convert to lowercase
    const result = s.replace(/[^0-9a-zA-Z]/g, '').toLowerCase();

    let i = 0, j = result.length - 1;

    while (i < j) {
        if (result[i] !== result[j]) {
            return false;
        }
        i++;
        j--;
    }

    return true;
}

// - Using Reversing Approach
// Time Complexity - O(N)
// Space Complexity - O(N)

function validPalindrome2(s) {
    // Remove non-alphanumeric characters and convert to lowercase
    const result = s.replace(/[^0-9a-zA-Z]/g, '').toLowerCase();

    // Reverse the above string for matching
    const revResult = result.split('').reverse().join('');

    return result === revResult;
}

// - Driver Code

console.log(validPalindrome1("A man, a plan, a canal: Panama")); // Output -> true
console.log(validPalindrome2("race a car")); // Output -> false
console.log(validPalindrome2("")); // Output -> true