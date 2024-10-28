// - Problem Description (Leetcode: 9. Palindrome Number)
// Link - https://leetcode.com/problems/palindrome-number/description

/*
Given an integer x, return true if x is a palindrome and false otherwise.
*/

// - Simple Approach
// Time Complexity - O(log x)
// Space Complexity - O(1)

function isPalindrome(x) {
    if (x < 0) {
        return false;
    }

    let reverse = 0;
    let xcopy = x;

    while (x > 0) {
        reverse = (reverse * 10) + (x % 10);
        x = Math.floor(x / 10);
    }

    return reverse === xcopy;
};

// - Driver code
console.log(isPalindrome(121)); // Output -> true
console.log(isPalindrome(-121)); // Output -> false
console.log(isPalindrome(10)); // Output -> false
