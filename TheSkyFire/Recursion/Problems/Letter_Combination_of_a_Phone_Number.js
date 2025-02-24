// - Problem Description (Leetcode: 17. Letter Combinations of a Phone Number)

// Link - https://leetcode.com/problems/letter-combinations-of-a-phone-number/description/

/*
Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could represent. Return the answer in any order.

A mapping of digits to letters (just like on the telephone buttons) is given below. Note that 1 does not map to any letters.
*/

// - Recursive Approach
// Time Complexity - O(4^N)
// Space Complexity - O(4^N)

var letterCombinations = function(digits) {
    if (digits.length === 0) return []; // Edge case

    const digitToLetters = {
        '2': "abc", 
        '3': "def", 
        '4': "ghi", 
        '5': "jkl",
        '6': "mno", 
        '7': "pqrs", 
        '8': "tuv", 
        '9': "wxyz"
    };

    let result = [];

    function findCombinations(index, path) {
        // Base case: if we've processed all digits
        if (index === digits.length) {
            result.push(path);
            return;
        }

        // Get corresponding letters for the current digit
        let letters = digitToLetters[digits[index]];

        // Recursively process each letter
        function recurse(idx) {
            if (idx === letters.length) return;
            findCombinations(index + 1, path + letters[idx]);
            recurse(idx + 1); // Move to the next letter
        }

        recurse(0);
    }

    findCombinations(0, "");
    return result;
};

console.log(letterCombinations("")); // Output: []

// console.log(letterCombinations("2")); // Output: [a, b, c]

// console.log(letterCombinations("23")); 
// Output: ["ad","ae","af","bd","be","bf","cd","ce","cf"]

