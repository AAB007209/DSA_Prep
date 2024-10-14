// - Bruteforce Approach for Longest Substring without Repeating Characters
// Time Complexity - O(N^3)
// Space Complexity - O(N) 

function longestUniqueSubstring(str) {
    let longestSubstr = "";

    // Helper function to check if a substring has all unique characters
    const hasUniqueChars = (s) => {
        let charSet = new Set();
        for (let char of s) {
            if (charSet.has(char)) {
                return false; // Found a repeated character
            }
            charSet.add(char);
        }
        return true; // true if all characters are unique
    };

    // Generate all substrings and check for uniqueness
    for (let i = 0; i < str.length; i++) {
        for (let j = i + 1; j <= str.length; j++) {
            let substr = str.slice(i, j);
            if (hasUniqueChars(substr) && substr.length > longestSubstr.length) {
                longestSubstr = substr;
            }
        }
    }

    return longestSubstr;
}

const result = longestUniqueSubstring("abcabcbb");
console.log("Longest substring without repeating characters:", result, result.length);

// - Below code is to generate all the Substrings of a given string
// function generateAllSubstrings(str) {
//     let substrings = [];
//     for (let i = 0; i < str.length; i++) {
//         for (let j = i + 1; j <= str.length; j++) {
//             substrings.push(str.slice(i, j));
//         }
//     }
//     return substrings;
// }

// const result = generateAllSubstrings("abcabc");
// console.log(result);