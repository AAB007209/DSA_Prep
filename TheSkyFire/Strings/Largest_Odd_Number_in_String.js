// - Problem Description - (Leetcode: 1903 Problem)
// Link - https://leetcode.com/problems/largest-odd-number-in-string/description

// You are given a string num, representing a large integer. Return the largest-valued odd integer (as a string) that is a non-empty substring of num, or an empty string "" if no odd integer exists.
// A substring is a contiguous sequence of characters within a string.

// * Concept here is if the last digit is odd then the whole number is Largest odd number in string.
// * If last digit is even then we start traversing from the last digit until we encounter a odd digit.
// * Once the odd digit is encountered it is the Largest odd number in a string so return it else return empty string "". 

// - Approach using .substring() inbuilt method
// Time Complexity - O(N) (In worst Cases)
// Space Complexity - (1)

function largestOddNumber1(num) {
    for (let i = num.length - 1; i >= 0; i--) {
        if (num[i] % 2 !== 0) {
            return num.substring(0, i + 1);
        }
    }
    return "";
};

// - Approach using .slice() inbuilt method
// Time Complexity - O(N) (In worst Cases)
// Space Complexity - (1)

function largestOddNumber2(num) {
    for (let i = num.length - 1; i >= 0; i--) {
        if (num[i] % 2 !== 0) {
            return num.slice(0, i + 1);
        }
    }
    return "";
};

// Driver Code
const num1 = "52";
const num2 = "4602";
const num3 = "35427";
const num4 = " ";

const answer1 = largestOddNumber2(num1);
const answer2 = largestOddNumber1(num2);
const answer3 = largestOddNumber1(num3);
const answer4 = largestOddNumber2(num4);

if (answer1) {
    console.log(`The Largest Odd number String is: ${answer1}`); // The Largest Odd number String is: 5
} else {
    console.log("No Largest Odd number string");
}

if (answer2) {
    console.log(`The Largest Odd number String is: ${answer2}`); // No Largest Odd number string
} else {
    console.log("No Largest Odd number string");
}

if (answer3) {
    console.log(`The Largest Odd number String is: ${answer3}`); // The Largest Odd number String is: 35427
} else {
    console.log("No Largest Odd number string");
}

if (answer4) {
    console.log(`The Largest Odd number String is: ${answer4}`); // No Largest Odd number string
} else {
    console.log("No Largest Odd number string");
}