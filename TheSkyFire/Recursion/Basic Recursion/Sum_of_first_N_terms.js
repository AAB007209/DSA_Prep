// - Problem Description (GFG: Sum of first n terms)

// Link - https://www.geeksforgeeks.org/problems/sum-of-first-n-terms5843/1

/*
Given an integer n, calculate the sum of series 13 + 23 + 33 + 43 + … till n-th term.
*/

// - Recursion Approach
// Time Complexity - O(N)
// Space Complexity - O(N)

function sumOfSeries(N) {
    if (N === 0) {
        return 0;
    }

    return sumOfSeries(N - 1) + (N * N * N);
}