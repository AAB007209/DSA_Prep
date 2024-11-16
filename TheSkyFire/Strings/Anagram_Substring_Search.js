// - Problem Description

// You are given two strings, a main string S, and a pattern P. You have to find the starting indices of the anagrams of P in S.
// Anagrams are permutations of a string. For P="abc”, its anagrams are abc,acb,bca,bac,cba,cab.

// Note that indexing starts at 0.

// GFG Link - https://www.geeksforgeeks.org/anagram-substring-search-search-permutations

// - Bruteforce Approach
// Time Complexity - O(M * log M) + O(N - M + 1) * O(M + M log M + M)
// Auxiliary Space - O(M)

function anagramSearch1(txt, pat) {
    const n = txt.length, m = pat.length;

    const sortedPat = pat.split('').sort().join('');

    const res = [];

    for (let i = 0; i <= n - m; i++) {
        // substring of the text
        let curr = txt.slice(i, i + m).split('').sort().join('');

        // Checking if sorted versions are equal
        if (sortedPat === curr) {
            res.push(i);
        }
    }
    return res;
}

// - Optimal Approach
// Time Complexity - O(256 * (N - M) + M) ~ O(N)
// Space Complexity - O(M + 256) ~ O(M)

function anagramSearch2(txt, pat) {
    const n = txt.length, m = pat.length;
    const res = [];

    const countP = Array(256).fill(0), countT = Array(256).fill(0);

    // Storing the occurences of characters of pat and txt inside count arrays.
    for (let i = 0; i < m; i++) {
        countP[pat.charCodeAt(i)]++;
        countT[txt.charCodeAt(i)]++;
    }

    for (let i = m; i < n; i++) {

        // This is checking for the patterns that match. If matched push the first index of current pattern in text.
        if (JSON.stringify(countP) === JSON.stringify(countT)) {
            res.push(i - m);
        }

        // Adding current character to current window
        countT[txt.charCodeAt(i)]++;

        // Removing the first character of the previous window
        countT[txt.charCodeAt(i - m)]--;
    }

    // This is for checking last windom in the text
    if (JSON.stringify(countP) === JSON.stringify(countT)) {
        res.push(n - m);
    }

    return res;
}


// Using JSON.stringify() can be inefficient, especially when comparing arrays in every iteration of the loop because:

// 1. It converts the entire array into a string each time.
// 2. This increases time complexity.

// A more efficient approach:
// Instead of stringifying, you can manually compare the elements of the arrays by iterating through them. This would avoid the overhead of converting to a string

function areArraysEqual(arr1, arr2) {
    for (let i = 0; i < 256; i++) {
        if (arr1[i] !== arr2[i]) {
            return false;
        }
    }
    return true;
}

function anagramSearch3(txt, pat) {
    const n = txt.length, m = pat.length;
    const res = [];

    const countP = Array(256).fill(0), countT = Array(256).fill(0);

    // Storing the occurences of characters of pat and txt inside count arrays.
    for (let i = 0; i < m; i++) {
        countP[pat.charCodeAt(i)]++;
        countT[txt.charCodeAt(i)]++;
    }

    for (let i = m; i < n; i++) {

        // This is checking whether Count arrays are equal if yes push the first index of current matching substring
        if (areArraysEqual(countP, countT)) {
            res.push(i - m);
        }

        // Adding current character to current window
        countT[txt.charCodeAt(i)]++;

        // Removing the first character of the previous window
        countT[txt.charCodeAt(i - m)]--;
    }

    // This is for checking last windom in the text
    if (areArraysEqual(countP, countT)) {
        res.push(n - m);
    }

    return res;
}


// Driver Code
const txt = "AABAACAADAABAABA";
const pat = "AABA";
let answer = anagramSearch3(txt, pat);
console.log(answer);
