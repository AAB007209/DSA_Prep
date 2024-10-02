// - Problem description (Leetcode 242. Valid Anagram)
// Link - https://leetcode.com/problems/valid-anagram/description

// Given two strings s and t, return true if t is an anagram of s, and false otherwise.

// Time Complexity - O(N)
// Space Complexity - O(1)
var isAnagram1 = function (s, t) {
    const n = s.length, m = t.length;

    if (n !== m) return false;

    const countP = Array(256).fill(0), countT = Array(256).fill(0);

    for (let i = 0; i < n; i++) {
        countP[s.charCodeAt(i)]++;
        countT[t.charCodeAt(i)]++;
    }

    if (JSON.stringify(countP) === JSON.stringify(countT)) return true;
    return false;
};

// - Below code is more Memory efficient

var isAnagram2 = function (s, t) {
    const n = s.length, m = t.length;

    if (n !== m) return false;

    const countP = Array(256).fill(0);

    for (let i = 0; i < n; i++) {
        countP[s.charCodeAt(i)]++;
        countP[t.charCodeAt(i)]--;
    }

    for (let i = 0; i < 256; i++) {
        if (countP[i] !== 0) {
            return false;
        }
    }

    return true;
};

// Driver Code
const s = "anagram", t = "nagaram";
let result = isAnagram2(s, t);
if (result) {
    console.log("The given strings are Anagrams");
} else {
    console.log("The given strings are not Anagrams");
}