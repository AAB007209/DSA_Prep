// - Problem Description (Leetcode: 1446. Consecutive Characters)
// Link - https://leetcode.com/problems/consecutive-characters/description

/*
The power of the string is the maximum length of a non-empty substring that contains only one unique character.

Given a string s, return the power of s.
*/

// - Bruteforce Approach
// Time Complexity - O(N)
// Space Complexity - O(1)

function consecutiveChars(str) {
    let maxi = 1, counter = 1;

    for (let i = 0; i < str.length; i++) {
        // Used Ternary Operation instead of Normal if-else statement
        str[i] === str[i + 1] ? counter++ : counter = 1;
        maxi = Math.max(maxi, counter);
    }
    return maxi;
}


// - Driver Code
console.log(consecutiveChars("leetcode"));
console.log(consecutiveChars("aabbbcccccddddddeeeeeeee"));