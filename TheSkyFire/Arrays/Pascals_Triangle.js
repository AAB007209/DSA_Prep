// - Problem Description (Leetcode: 118. Pascal's Triangle)
// Link - https://leetcode.com/problems/pascals-triangle/description

/*
Given an integer numRows, return the first numRows of Pascal's triangle.

In Pascal's triangle, each number is the sum of the two numbers directly above it as shown:
for N = 5

        1
       1 1
      1 2 1
     1 3 3 1
    1 4 6 4 1

*/

// - Simple Approach
// Time Complexity - O(N^2)
// Space Complexity - O(N^2)

function generate(numRows) {
    let arr = [];

    for (let i = 0; i < numRows; i++) {

        arr[i] = new Array(i + 1).fill(0);
        arr[i][0] = arr[i][i] = 1;

        for (let j = 1; j < i; j++) {
            arr[i][j] = arr[i - 1][j - 1] + arr[i - 1][j];
        }
    }
    return arr;
}

// - Driver Code
console.log(generate(5));

// We can do this using Recursion and Dynamic Programming (SC: O(N)) as well (I will implement it later)
