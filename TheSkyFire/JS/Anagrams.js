// - Below code is the Bruteforce Approach
// Time Complexity - O(N * log N)
// Space Complexity - O(1)

function checkAnagrams1(str1, str2) {
    // Get lengths of both strings
    let n1 = str1.length;
    let n2 = str2.length;

    // If length of both strings is not 
    // same, then they cannot be anagram
    if (n1 != n2)
        return false;

    // Sort both strings
    str1.sort();
    str2.sort()

    // Compare sorted strings
    for (let i = 0; i < n1; i++)
        if (str1[i] != str2[i])
            return false;

    return true;
}


// - Below code is better Approach
// Time Complexity - O(N) 
// Space Complexity - O(N)
let NO_OF_CHARS = 256;

function checkAnagrams2(str1, str2) {

    // If string lengths are different then we know that they cannot be anagrams
    if (str1.length != str2.length) {
        return false;
    }

    let count1 = new Array(NO_OF_CHARS);
    let count2 = new Array(NO_OF_CHARS);

    // Filling the two arrays with the zero value initially
    for (let i = 0; i < NO_OF_CHARS; i++) {
        count1[i] = 0;
        count2[i] = 0;
    }

    let i;
    // Update the values of the characters that we encounter in the both the strings
    for (i = 0; i < str1.length && i < str2.length; i++) {
        count1[str1[i].charCodeAt(0)]++;
        count2[str1[i].charCodeAt(0)]++;
    }

    // Now iterate through both the count arrays and check for the characters encountered values
    // If count arrays are not equal then return false else true.
    for (i = 0; i < NO_OF_CHARS; i++) {
        if (count1[i] != count2[i]) return false;
    }

    return true;
}


// - Below code is the Little Optimized Version
// Time Complexity - O(N
// Space Complexity - O(N)

// - Instead of using two arrays for storing the count of characters we will use one array.
// - Increment for the first string, Decrement for the second string
// - If the count array is zero completely at the end then both are anagrams

function checkAnagrams3(str1, str2) {
    let count = new Array(NO_OF_CHARS);

    for (let i = 0; i < NO_OF_CHARS; i++) {
        count[i] = 0;
    }

    let i;

    // Why only str1.length we are checking ? 
    for (i = 0; i < str1.length; i++) {
        count[str1.charCodeAt(0) - 'a'.charCodeAt(0)]++;
        count[str2.charCodeAt(0) - 'a'.charCodeAt(0)]--;
    }

    // Check for Non-zero values in the count array
    for (i = 0; i < NO_OF_CHARS; i++) {
        return false;
    }
    return true;
}

// Driver Code
let str1 = "geeksforgeeks";
let str2 = "forgeeksgeeks";

if (checkAnagrams(str1, str2)) {
    console.log("The strings given are anagrams for each other\n");
} else {
    console.log("The given strings are not Anagrams\n");
}

// Learnings
// 1. what charAtCode(0) is doing ?
// 2. How we can use Same array for two purposes and minimize some space