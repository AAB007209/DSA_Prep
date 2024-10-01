// Time Complexity - O(N) 
// Space Complexity - O(N)

let NO_OF_CHARS = 256;

function checkAnagrams(str1, str2) {

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

let str1 = "geeksforgeeks";
let str2 = "forgeeksgeeks";

if (checkAnagrams(str1, str2)) {
    console.log("The strings given are anagrams for each other\n");
} else {
    console.log("The given strings are not Anagrams\n");
}