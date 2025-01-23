// - Problem Description (Leetcode: 509. Fibonacci Number)

// Link - https://leetcode.com/problems/fibonacci-number/description/

/*
The Fibonacci numbers, commonly denoted F(n) form a sequence, called the Fibonacci sequence, such that each number is the sum of the two preceding ones, starting from 0 and 1. That is,

-> F(0) = 0, F(1) = 1
-> F(n) = F(n - 1) + F(n - 2), for n > 1.

Given n, calculate F(n).
*/

// - Recursive Approach
// Time Complexity - O(2^N)
// Space Complexity - O(N)

function fibonacci(n) {
    if (n === 1 || n === 2) return 1;
    return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log(fibonacci(2)); // 1
console.log(fibonacci(4)); // 3
console.log(fibonacci(6)); // 8
console.log(fibonacci(8)); // 21
console.log(fibonacci(10)); // 55