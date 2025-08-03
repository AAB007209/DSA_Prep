// - Problem Description: 1768. Merge Strings Alternately
// Link - https://leetcode.com/problems/merge-strings-alternately

/*
You are given two strings word1 and word2. Merge the strings by adding letters in alternating order, starting with word1. 
If a string is longer than the other, append the additional letters onto the end of the merged string.

Return the merged string.
*/

// - Better Solution
// Time Complexity: O(N + M)
// Space Complexity: O(N + M)

var mergeAlternately1 = function (word1, word2) {
    let resultString = "";
    let n = word1.length, m = word2.length;
    let i = 0;
    while (n !== 0 && m !== 0) {
        resultString += word1[i];
        resultString += word2[i];
        i++;
        n--;
        m--;
    }

    while (n !== 0) {
        resultString += word1[i];
        i++;
        n--;
    }

    while (m !== 0) {
        resultString += word2[i];
        i++;
        m--;
    }

    return resultString;
};

// - Another Solution (little Clean and Optimal)
// TC: O(N + M)
// SC: O(N + M)

var mergeAlternately2 = function (word1, word2) {
    let resultString = "";

    const maxlength = Math.max(word1.length, word2.length);

    for (let i = 0; i < maxlength; i++) {
        if (i < word1.length) resultString += word1[i];
        if (i < word2.length) resultString += word2[i];
    }

    return resultString;
}

// Driver code
console.log(mergeAlternately1("abc", "pqr"));
console.log(mergeAlternately1("ab", "pqrtsve"));
console.log(mergeAlternately1("abcdefg", "pqrtsve"));

console.log(mergeAlternately2("ab", "pqrtsve"));
console.log(mergeAlternately2("abc", "pqr"));
console.log(mergeAlternately2("abcdefg", "pqrtsve"));