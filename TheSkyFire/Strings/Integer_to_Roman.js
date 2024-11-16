// - Problem Description (Leetcode: 12. Integer to Roman)
// Link - https://leetcode.com/problems/integer-to-roman

/*
Given an integer, convert it to a Roman numeral. (For more info refer the link given for the problem)
*/

// - Bruteforce Approach
// Time Complexity - O(N)
// Space Complexity - O(1)

function intToRoman(num) {
    let result = "";
    const symbol = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];
    const val = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];

    for (let i = 0; num != 0; i++) {
        while (num >= val[i]) {
            num -= val[i];
            result += symbol[i];
        }
    }
    return result;
}

// - Driver Code
console.log(intToRoman(3749)); // Output -> MMMDCCXLIX
console.log(intToRoman(58)); // Output -> LVIII
console.log(intToRoman(1994)); // Output -> MCMXCIV
