// - Problem Description (Leetcode: 392. Is Subsequence)

// Link - https://leetcode.com/problems/is-subsequence

/*
Given two strings s and t, return true if s is a subsequence of t, or false otherwise.

A subsequence of a string is a new string that is formed from the original string by deleting some (can be none) 
of the characters without disturbing the relative positions of the remaining characters. 
(i.e., "ace" is a subsequence of "abcde" while "aec" is not)
*/

// - Bruteforce Approach (Recursive Approach)
// Time Complexity - O(2^N)
// Space Complexity - O(2^N)

function isSubsequence1(s, t) {
    function generateSubsequences(str, index, subseqArr, resultArr) {
        if (index === str.length) {
            resultArr.push(subseqArr.join(""));
            return;
        }
        // Include current character
        subseqArr.push(str[index]);
        generateSubsequences(str, index + 1, subseqArr, resultArr);
        subseqArr.pop();
        // Exclude current character
        generateSubsequences(str, index + 1, subseqArr, resultArr);
    }
    // Generate all subsequences of t
    const subsequences = [];
    generateSubsequences(t, 0, [], subsequences);
    // Check if s is in subsequences
    return subsequences.includes(s);
}

// - Optimal Approach (Two Pointers Approach)
// Time Complexity - O(M + N)
// Space Complexity - O(1)

function isSubsequence2(s, t) {
    let pointerS = 0, pointerT = 0;
    while (pointerS < s.length && pointerT < t.length) {
        if (s[pointerS] === t[pointerT]) {
            pointerS++;
            pointerT++;
        } else {
            pointerT++;
        }
    }

    if (pointerS === s.length) return true;
    else return false;
}

// - Driver code
console.log(isSubsequence1("abc", "ahbgdc"));
console.log(isSubsequence1("axc", "ahbgdc"));

console.log(isSubsequence2("ace", "abcde"));      // true
console.log(isSubsequence2("aec", "abcde"));      // false
console.log(isSubsequence2("", "anything"));      // true
console.log(isSubsequence2("a", ""));             // false
console.log(isSubsequence2("gdc", "ahbgdc"));     // true
console.log(isSubsequence2("hdc", "ahbgdc"));     // true
console.log(isSubsequence2("abcd", "abcd"));      // true
console.log(isSubsequence2("abc", "acb"));        // false
console.log(isSubsequence2("bcd", "abcde"));      // true
console.log(isSubsequence2("abd", "abdc"));       // true
