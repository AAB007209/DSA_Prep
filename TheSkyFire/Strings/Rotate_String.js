// - Problem Description (Leetcode: 796. Rotate String)
// Link - https://leetcode.com/problems/rotate-string/description

/*
Given two strings s and goal, return true if and only if s can become goal after some number of shifts on s.

A shift on s consists of moving the leftmost character of s to the rightmost position.

For example, if s = "abcde", then it will be "bcdea" after one shift
*/

// - Using Inbuilt function and Good Logic (s + s)
// Time Complexity - O(N)
// Space Complexity - O(1)

function rotateString1(s, goal) {
    if (s.length !== goal.length) return false;
    return (s + s).includes(goal);
};

// - Using .slice() function
// Time Complexity - O(N)
// Space Complexity - O(N) -> Where N is the new String length created everytime using .slice()

function rotateString2(s, goal) {
    if (s.length !== goal.length) {
        return false;
    }

    for (let i = 0; i < s.length; i++) {
        if (s === goal) {
            return true;
        }
        // Everytime we are creating a rotated string of the given string by shifting 1 char at at time to the left.
        s = s.slice(1) + s[0];
    }
    return false;
}


// Driver Code
console.log(rotateString1("abcde", "bcdea")); // Output -> true
console.log(rotateString2("abcde", "abced")); // Output -> false
console.log(rotateString1("leetcode", "codeleet")); // Output -> true
console.log(rotateString2("GeeksforGeeks", "forGeeksGeesk")); // Output -> true


// Learnings
// 1. .slice() function.
// 2. .includes() function with (s + s) great logic