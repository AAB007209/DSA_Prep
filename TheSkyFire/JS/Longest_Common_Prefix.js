// - Problem Description (Leetcode: 14)

// Write a function to find the longest common prefix string amongst an array of strings.
// If there is no common prefix, return an empty string "".

// - Bruteforce Appraoch
// Time Complexity - O(N * M); // N = strs length, M = each str in strs length in worst case (Longest word)
// Space Complexity - O(M)

function longestCommonPrefix1(strs) {

    let prefix = strs[0];

    for (let str of strs) {
        let i = 0;
        for (; i < str.length; i++) {
            if (prefix[i] === str[i] && i < prefix.length) continue;
            else break;
        }
        prefix = str.substring(0, i); // ith letter is exclusive.
    }
    return prefix;
}

function longestCommonPrefix2(strs) {
    let refString = strs[0];

    for (let i = 1; i < strs.length; i++) {
        let currString = strs[i];
        let j = 0;
        while (j < refString.length && j < currString.length && refString[j] === currString[j]) {
            j++;
        }

        refString = refString.slice(0, j);
    }
    return refString;
}

const strs = ["flower", "flow", "flight"];
const answer = longestCommonPrefix1(strs);
console.log(answer); // Output - fl

const strs2 = ["Rocket", "Rock", "Rome"];
const answer2 = longestCommonPrefix2(strs2);
console.log(answer2); // Output - Ro