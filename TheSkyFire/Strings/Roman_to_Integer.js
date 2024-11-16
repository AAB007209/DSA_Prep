// - Problem Description (Leetcode: 13. Roman to Integer)
// Link - https://leetcode.com/problems/roman-to-integer/description

/*
Given a roman numeral, convert it to an integer. (For more info take a look from the link provided)
*/

// - Bruteforce Approach
// Time Complexity - O(N)
// Space Complexity - O(1)

function romanToInt(s) {
    let res = 0;
    const roman = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    };

    for (let i = 0; i < s.length - 1; i++) {
        if (roman[s[i]] < roman[s[i + 1]]) {
            res -= roman[s[i]];
        } else {
            res += roman[s[i]];
        }
    }
    return res + roman[s[s.length - 1]];
}

// - Driver code
console.log(romanToInt("III")); // Output -> 3
console.log(romanToInt("LVIII")); // Output -> 58
console.log(romanToInt("MCMXCIV")); // Output -> 1994

