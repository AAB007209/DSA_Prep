// - Problem Description (Leetcode: 1922. Count Good Numbers)

// Link - https://leetcode.com/problems/count-good-numbers/description/

/*
A digit string is good if the digits (0-indexed) at even indices are even and the digits at odd indices are prime (2, 3, 5, or 7).

For example, "2582" is good because the digits (2 and 8) at even positions are even and the digits (5 and 2) at odd positions are prime. However, "3245" is not good because 3 is at an even index but is not even.
Given an integer n, return the total number of good digit strings of length n. Since the answer may be large, return it modulo 109 + 7.

A digit string is a string consisting of digits 0 through 9 that may contain leading zeros.
*/

// - Recursive Approach
// Time Complexity - O(log N)
// Space Complexity - O(log N)

var countGoodNumbers = function (n) {
    // MOD is the modulo value to prevent large numbers from overflowing.
    let MOD = BigInt(10 ** 9 + 7);

    // Convert n to BigInt for handling large numbers during calculations.
    n = BigInt(n);

    // Calculate the number of even positions.
    // (n + 1) / 2 ensures rounding up when n is odd.
    let evenPos = (n + 1n) / 2n;

    // Calculate the number of odd positions.
    // n / 2 naturally rounds down when n is odd.
    let oddPos = n / 2n;

    /**
     * Function to calculate (base^exp) % MOD efficiently using recursion.
     * @param {BigInt} base - The base number.
     * @param {BigInt} exp - The exponent.
     * @param {BigInt} MOD - The modulo value.
     * @returns {BigInt} - Result of (base^exp) % MOD.
     */
    function modPow(base, exp, MOD) {
        // Base case: Any number to the power of 0 is 1.
        if (exp === 0n) return 1n;

        // If the exponent is even:
        if (exp % 2n === 0n) {
            // Calculate (base^(exp/2)) and store it in 'half'.
            const half = modPow(base, exp / 2n, MOD);

            // Multiply 'half' with itself and return the result modulo MOD.
            return (half * half) % MOD;
        } else {
            // If the exponent is odd, reduce the exponent by 1.
            // Multiply the base with (base^(exp - 1)) and return modulo MOD.
            return (base * modPow(base, exp - 1n, MOD)) % MOD;
        }
    }

    // Calculate the total combinations for even positions:
    // 5 choices (0, 2, 4, 6, 8) for each even position.
    let countEven = modPow(5n, evenPos, MOD);

    // Calculate the total combinations for odd positions:
    // 4 choices (1, 3, 5, 7, 9) for each odd position.
    let countOdd = modPow(4n, oddPos, MOD);

    // Multiply the results for even and odd positions.
    // Take modulo MOD to ensure the result stays within the limit.
    return Number((countEven * countOdd) % MOD);
};


// - Driver code
console.log(countGoodNumbers(4)); // Output: 400
console.log(countGoodNumbers(50)); // Output: 564908303
console.log(countGoodNumbers(1)); // Output: 5


/*
- Problem Intuition link - https://leetcode.com/problems/count-good-numbers/solutions/5450709/optimal-solution-in-javascript-fully-explained/
*/