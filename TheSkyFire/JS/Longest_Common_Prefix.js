// - Problem Description (Leetcode: 14)

// Write a function to find the longest common prefix string amongst an array of strings.
// If there is no common prefix, return an empty string "".

// - Bruteforce Appraoch
// Time Complexity - O(N * M); // N = strs length, M = each str in strs length in worst case (Longest word)
// Space Complexity - O(M)

function longestCommonPrefix(strs) {

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

const strs = ["flower", "flow", "flight"];
const answer = longestCommonPrefix(strs);
console.log(answer); // Output - fl