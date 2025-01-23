// - Problem Description (Leetcode: 125. Valid Palindrome)

// Link - https://leetcode.com/problems/valid-palindrome/description/

/*
A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. 
Alphanumeric characters include letters and numbers.

Given a string s, return true if it is a palindrome, or false otherwise.
*/

// - Recursive Approach
// Time Complexity - O(N)
// Space Complexity - O(N)

function helper(s, start, end) {
    if (start >= end) {
        return true;
    }

    if (s[start] === s[end]) {
        return helper(s, start + 1, end - 1);
    } else {
        return false;
    }
}

function isPalindrome(s) {
    const result = s.replace(/[^0-9a-zA-Z]/g, '').toLowerCase();
    return helper(result, 0, result.length - 1);
}

// - Driver code
console.log(isPalindrome("A man, a plan, a canal: Panama")); // Output: true
console.log(isPalindrome("race a car")); // Output: false
console.log(isPalindrome(" ")); // Output: true
