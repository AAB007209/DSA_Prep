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

// - Optimal Solution
// Time Complexity - O(D) -> D is the No.of Digits in N String
// Space Complexity - O(1)

function countDigits2(N) {
    let numCount = 0
    let numLoop = N
    while (numLoop !== 0) {
        let newNum = Math.floor(numLoop % 10)
        numLoop = Math.floor(numLoop / 10)
        if (newNum !== 0 && N % newNum === 0) {
            numCount++
        }
    }
    return numCount;
}

// - Driver code
console.log(countDigits(12)); // Output -> 2
console.log(countDigits(2446)); // Output -> 1
console.log(countDigits(23)); // Output -> 0

console.log(countDigits2(12)); // Output -> 2
console.log(countDigits2(2446)); // Output -> 1
console.log(countDigits2(23)); // Output -> 0

// Explanation of the outputs
/*
1. For 12: Output is 2 because the digits are 1 and 2. Both divide the 12 number evenly.
2. For 2446: Output is 1 because the among digits 2, 4 and 6 only 2 divides it evenly.
3. For 23: Output is 0 because digits 2 and 3 doesn't divide 23 evenly.
*/

/* 
-> Some points for learning

let digits = Array.from(String(N), Number);

Breakdown :
-> String(N);             // "1234"
-> Array.from("1234");    // ["1", "2", "3", "4"]
-> Array.from("1234", Number); // [1, 2, 3, 4]

Array.from(String(N), Number) – Creates an array of Numbers from the string representation of N:

Array.from() takes two arguments: the first is an iterable (like a string), and the second is a mapping function that operates on each element of the iterable.
Here, Number is used as the mapping function, which converts each character (digit) back to a number.

*/

