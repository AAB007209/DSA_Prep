// - Problem Description (GFG: Count Digits)
// Link - https://www.geeksforgeeks.org/problems/count-digits5716/1

/*
Given a number n. Count the number of digits in n which evenly divide n. Return an integer, total number of digits of n which divides n evenly.

Note :- Evenly divides means whether n is divisible by a digit i.e. leaves a remainder 0 when divided.
*/

// - Bruteforce Approach (My Initial Solution)
// Time Complexity - O(D) -> D is the Number of Digits
// Space Complexity - O(D) 

function countDigits(N) {
    let counter = 0;
    let digits = Array.from(String(N), Number);

    for (let i = 0; i < digits.length; i++) {
        // Check if the digit is not zero and divides N evenly
        if (digits[i] !== 0 && N % digits[i] === 0) {
            counter++;
        }
    }

    return counter;
}

// - Driver code
console.log(countDigits(12)); // Output -> 2
console.log(countDigits(2446)); // Output -> 1
console.log(countDigits(23)); // Output -> 0

// Explanation of the outputs
/*
1. For 12: Output is 2 because the digits are 1 and 2. Both divide the 12 number evenly.
2. For 2446: Output is 1 because the among digits 2, 4 and 6 only 2 divides it evenly.
3. For 23: Output is 0 because digits 2 and 3 doesn't divide 23 evenly.
*/