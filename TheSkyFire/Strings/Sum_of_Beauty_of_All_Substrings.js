// - Problem Description (Leetcode: 1781. Sum of Beauty of all Substrings)
// Link - https://leetcode.com/problems/sum-of-beauty-of-all-substrings

/*
The beauty of a string is the difference in frequencies between the most frequent and least frequent characters.

For example, the beauty of "abaacc" is 3 - 1 = 2.
Given a string s, return the sum of beauty of all of its substrings.
*/

// - Bruteforce Approach (only works for small string testcases)
// Time Complexity - O(N^3)
// Space Complexity - O(1)

function isBeauty1(s) {
    const mpp = new Map();

    // Count the frequency of each character in the string
    for (let i = 0; i < s.length; i++) {
        mpp.set(s[i], (mpp.get(s[i]) || 0) + 1);
    }

    // Convert the map into an array of key-value pairs and sort by frequency (value)
    const mapArray = Array.from(mpp.entries());
    mapArray.sort((a, b) => b[1] - a[1]);

    // Do the Beauty Calculation
    const answer = mapArray[0][1] - mapArray[mapArray.length - 1][1];
    return answer;
}

// - Little Optimal Approach (Using Frequency Array instead of Map)
// Time Complexity - O(N^3)
// Space Complexity - O(1)

function isBeauty2(s) {
    const freq = Array(26).fill(0);

    // Updating the Frequency Array
    for (let i = 0; i < s.length; i++) {
        const index = s.charCodeAt(i) - 97; // 'a' is at ASCII 97
        freq[index]++;
    }

    // Find max and min frequency
    let maxFreq = 0, minFreq = Infinity;

    for (let i = 0; i < 26; i++) {
        if (freq[i] > 0) {
            maxFreq = Math.max(maxFreq, freq[i]);
            minFreq = Math.min(minFreq, freq[i]);
        }
    }
    return maxFreq - minFreq;
}

function beautySum(s) {
    let sum = 0;
    for (let i = 0; i < s.length; i++) {
        for (let j = i + 1; j <= s.length; j++) {
            let substr = s.slice(i, j);
            let value = isBeauty2(substr);
            if (value) {
                sum += value;
            }
        }
    }
    return sum;
};

// - Driver code
console.log(beautySum("aabcbaa")); // Output -> 17
console.log(beautySum("aabcb")); // Output -> 5