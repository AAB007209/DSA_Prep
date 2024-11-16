// - Problem Description (Leetcode: 5. Longest Palindromic Substring)
// Link - https://leetcode.com/problems/longest-palindromic-substring/description

/*
Given a string s, return the longest palindromic substring in s.
*/

// - Bruteforce Approach
// Time Complexity - O(N^3)
// Space Complexity - O(1)

function longestPalindromicSubstring1(str) {

    let isPalindromic = function (i, j) {
        while (i < j) {
            if (str[i] !== str[j]) {
                return false;
            }
            i++;
            j--;
        }
        return true;
    }

    for (let length = str.length; length > 0; length--) {
        for (let start = 0; start <= str.length - length; start++) {
            if (isPalindromic(start, start + length)) {
                return str.substring(start, start + length + 1);
            }
        }
    }
    return "";
}

// - Optimal Solution requires Knowledge of Dynamic Programming. TC: O(N^2) and SC: O(1) (Will do this using DP in future)

// - Driver Code 
console.log(longestPalindromicSubstring1("cbbd"));
