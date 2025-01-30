// - Problem Description (GFG: Generate All Binary Strings without Consecutive 1's)

// Link - https://www.geeksforgeeks.org/generate-binary-strings-without-consecutive-1s

/*
Given an integer, K. Generate all binary strings of size k without consecutive 1’s.
*/

// - Recursive Approach
// Time Complexity - O(2^K)
// Space Complexity - O(K)

function generateAllStringsUtil(K, str, n) {

    // Print binary string without consecutive 1's
    if (n == K) {

        // Terminate binary string
        str[n] = "\0";
        console.log(str.join("") + " ");
        return;
    }

    // If previous character is '1' then we put
    // only 0 at end of string
    // example str = "01" then new string be "010"
    if (str[n - 1] == "1") {
        str[n] = "0";
        generateAllStringsUtil(K, str, n + 1);
    }

    // If previous character is '0' than we put
    // both '1' and '0' at end of string
    // example str = "00" then
    // new string "001" and "000"
    if (str[n - 1] == "0") {
        str[n] = "0";
        generateAllStringsUtil(K, str, n + 1);
        str[n] = "1";
        generateAllStringsUtil(K, str, n + 1);
    }
}

// Function generate all binary string without
// consecutive 1's
function generateAllStrings(K) {
    // Base case
    if (K <= 0)
        return;

    // One by one stores every
    // binary string of length K
    var str = new Array(K);

    // Generate all Binary string
    // starts with '0'
    str[0] = "0";
    generateAllStringsUtil(K, str, 1);

    // Generate all Binary string
    // starts with '1'
    str[0] = "1";
    generateAllStringsUtil(K, str, 1);
}

// - Driver code

generateAllStrings(3);
// generateAllStrings(4);
// generateAllStrings(5);