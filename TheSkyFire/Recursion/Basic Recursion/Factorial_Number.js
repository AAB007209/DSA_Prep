// - Problem Description (GFG: Factorials less than or Equal to n)

// Link - https://www.geeksforgeeks.org/problems/find-all-factorial-numbers-less-than-or-equal-to-n3548/0

/*
A number n is called a factorial number if it is the factorial of a positive integer. For example, the first few factorial numbers are 1, 2, 6, 24, 120,
Given a number n, the task is to return the list/vector of the factorial numbers smaller than or equal to n.
*/

// - Recursion Approach
// Time Complexity - O(N^2)
// Space Complexity - O(N)

function factorialHelper(n, current, result) {
    let factorial = calculateFactorial(current); // Calculate factorial of 'current'

    // Base case: If the factorial exceeds n, stop recursion
    if (factorial > n) {
        return;
    }

    // Add the factorial to the result and proceed to the next number
    result.push(factorial);
    factorialHelper(n, current + 1, result); // Recursive call for the next number
}

// Function to calculate the factorial of a number
function calculateFactorial(num) {
    if (num === 1) {
        return 1; // Base case for factorial
    }
    return num * calculateFactorial(num - 1); // Recursive factorial computation
}

// Main function to find all factorial numbers less than or equal to n
function factorialNumbers(n) {
    let result = [];
    factorialHelper(n, 1, result); // Start from 1 and collect factorials
    return result;
}

console.log(factorialNumbers(6)); // Output: [1, 2, 6]
console.log(factorialNumbers(3)); // Output: [1, 2]
console.log(factorialNumbers(30)); // Output: [1, 2, 6, 24]