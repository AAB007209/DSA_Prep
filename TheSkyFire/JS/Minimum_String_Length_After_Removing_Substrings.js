// - Problem Description - (Leetcode- 2696. Minimum String Length After Removing Substrings)
// Link - https://leetcode.com/problems/minimum-string-length-after-removing-substrings/description

/*
You are given a string s consisting only of uppercase English letters.
You can apply some operations to this string where, in one operation, you can remove any occurrence of one of the substrings "AB" or "CD" from s.
Return the minimum possible length of the resulting string that you can obtain.

Note that the string concatenates after removing the substring and could produce new "AB" or "CD" substrings.
*/

// - Stack Approach
// Time Complexity - O(N)
// Space Complexity - O(N)

function minimumSubstring(str) {
    let stack = [];
    for (let char of str) {
        if (stack.length === 0) {
            stack.push(char);
        } else {
            if (stack[stack.length - 1] === 'A' && char === 'B') {
                stack.pop();
            } else if (stack[stack.length - 1] === 'C' && char === 'D') {
                stack.pop();
            } else {
                stack.push(char)
            }
        }
    }
    return stack.length;
}

// Driver Code
const str1 = "ABFCACDB";
const str2 = "ACBBD";
const str3 = "ABFCACDBZYAFBCDAAB";

console.log(`Minimum Possible Length for string "${str1}":`, minimumSubstring(str1));
console.log(`Minimum Possible Length for string "${str2}":`, minimumSubstring(str2));
console.log(`Minimum Possible Length for string "${str3}":`, minimumSubstring(str3));