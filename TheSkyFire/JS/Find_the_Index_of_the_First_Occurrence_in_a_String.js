// - Problem Description (Leetcode: 28. Find the Index of the First Occurrence in a String) (Easy)
// Link - Given two strings needle and haystack, return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.

// - Using Built in function .indexOf()
// Time Complexity - O(N * M), N = Length of haystack, M = Length of needle
// Space Complexity - O(1)

function firstOccurrenceIndex1(haystack, needle) {
    return haystack.indexOf(needle);
}

// - Using .substring() Approach
// Time Complexity - O(N * M)
// Space Complexity - O(1)
function firstOccurrenceIndex2(haystack, needle) {
    let n = haystack.length, m = needle.length;
    if (n < m) return -1;
    for (let i = 0; i <= n - m; i++) {
        if (haystack.substring(i, i + m) === needle) {
            return i;
        }
    }
    return -1;
}

// - Bruteforce Appraoch
// Time Complexity - O(N * M)
// Space Complexity - O(1)

function firstOccurrenceIndex3(haystack, needle) {
    if (!needle) return 0;
    for (let i = 0; i < haystack.length; i++) {
        let isMatch = true;
        for (let j = 0; j < needle.length; j++) {
            if (haystack[i + j] !== needle[j]) {
                isMatch = false;
                break;
            }
        }
        if (isMatch) return i;
    }
    return -1;
};

// - Using Regex Expression (RegExp())
// Time Complexity - O(N * M)
// Space Complexity - O(M), M = Length of Needle

function firstOccurrenceIndex4(haystack, needle) {
    const regex = new RegExp(needle);
    return haystack.search(regex);
};


// Driver Code

console.log(firstOccurrenceIndex1("sadbutsad", "sad")); // Output -> 0

console.log(firstOccurrenceIndex2("leetcode", "leeto")); // Output -> -1

console.log(firstOccurrenceIndex3("helloworld", "world")); // Output -> 5

console.log(firstOccurrenceIndex1("cdcdababab", "ab")); // Output -> 4

console.log(firstOccurrenceIndex2("abraabrcada", "cad")); // Output -> 7

console.log(firstOccurrenceIndex3("mississippi", "issi")); // Output -> 1

console.log(firstOccurrenceIndex4("JavaScript", "cript")); // Output -> 5
