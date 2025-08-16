// Problem Description (Leetcode: 1071. Greatest Common Divisor of Strings)

/*
    For two strings s and t, we say "t divides s" if and only if s = t + t + t + ... + t + t (i.e., t is concatenated with itself one or more times).
    Given two strings str1 and str2, return the largest string x such that x divides both str1 and str2.
*/

// Better Approach (Euclid's Algorithm)
// Time Complexity - O(M + N)
// Space Complexity - O(M + N)

function commonDivisor(str1, str2) {
    if (str1 + str2 !== str2 + str1) {
        return "";
    }

    const gcd = (len1, len2) => {
        while (len2 !== 0) {
            [len1, len2] = [len2, len1 % len2];
        }
        return len1;
    };

    return str1.slice(0, gcd(str1.length, str2.length));
}

// Driver code
console.log(commonDivisor("ABCABC", "ABC")); // Output: ABC
console.log(commonDivisor("ABABAB", "ABAB")); // Output: AB
console.log(commonDivisor("LEET", "CODE")); // Output: ""