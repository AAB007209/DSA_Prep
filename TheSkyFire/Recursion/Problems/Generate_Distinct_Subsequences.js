// - Problem Description (GFG: Better String) [ DP Problem ]

// Link - https://www.geeksforgeeks.org/problems/better-string/1

/*
Given a pair of strings of equal lengths, Geek wants to find the better string. The better string is the string having more number of distinct subsequences.
If both the strings have equal count of distinct subsequence then return str1.
*/

// - This question requires DP as the efficient solution. Here I have just written Recursive solution for finding unique subsequences.

// - Recursive Approach
// Time Complexity - O(2^N)
// Space Complexity - O(N)
function generateUniqueSubsequences(input, output, uniqueSubsets) {
    // Base condition: when input is empty
    if (input.length === 0) {
        if (output.length > 0) {  // Avoid storing empty subsequence
            uniqueSubsets.add(output);
        }
        return;
    }

    // Take the first character in input
    let ch = input[0];

    // Two recursive calls:
    // 1. Exclude the character
    generateUniqueSubsequences(input.substring(1), output, uniqueSubsets);

    // 2. Include the character
    generateUniqueSubsequences(input.substring(1), output + ch, uniqueSubsets);
}

// Driver code
let str = "GFG";
let uniqueSubsets = new Set();  // Set to store unique subsequences

generateUniqueSubsequences(str, "", uniqueSubsets);

// Print all unique subsequences
console.log([...uniqueSubsets]);
console.log("Unique Subsequences: " + [...uniqueSubsets].length);

