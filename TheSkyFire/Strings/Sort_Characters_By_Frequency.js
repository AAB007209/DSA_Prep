// - Problem Description (Leetcode: 451. Sort Characters By Frequency)
// Link - https://leetcode.com/problems/sort-characters-by-frequency

/*
Given a string s, sort it in decreasing order based on the frequency of the characters. The frequency of a character is the number of times it appears in the string.

Return the sorted string. If there are multiple answers, return any of them.
*/

// - Using Map Approach
// Time Complexity - O(N Log N)
// Space Complexity - O(N)

function frequencySort(s) {
    const mpp = new Map();

    // Count the frequency of each character in the string
    for (let i = 0; i < s.length; i++) {
        mpp.set(s[i], (mpp.get(s[i]) || 0) + 1);
    }

    // Convert the map into an array of key-value pairs and sort by frequency (value)
    const mapArray = Array.from(mpp.entries());
    mapArray.sort((a, b) => b[1] - a[1]);

    let result = '';

    // Append characters to the result based on their frequency
    for (const [char, frequency] of mapArray) {
        result += char.repeat(frequency);
    }

    return result;
}

// Example Usage:
const str = "tree";
console.log(frequencySort(str));  // Output: "eert"
