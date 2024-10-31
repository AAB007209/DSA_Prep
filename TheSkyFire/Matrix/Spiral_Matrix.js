// - Problem Description (Leetcode: 54. Sprial Matrix)
// Link - https://leetcode.com/problems/spiral-matrix/description

/*
Given an m x n matrix, return all elements of the matrix in spiral order.
*/

// - Normal Approach
// Time Complexity - O(N^2)
// Space Complexity - O(1)

function spiralMatrix(matrix) {
    let arr = []; // This is for Returing answer so not included in TC
    let m = matrix.length; // Number of rows
    if (m === 0) return arr;
    let n = matrix[0].length; // Number of columns

    let startRow = 0, startCol = 0;
    let endRow = m - 1, endCol = n - 1;

    while (startRow <= endRow && startCol <= endCol) {
        // Traverse from left to right
        for (let i = startCol; i <= endCol; i++) {
            arr.push(matrix[startRow][i]);
        }
        startRow++;

        // Traverse downwards
        for (let i = startRow; i <= endRow; i++) {
            arr.push(matrix[i][endCol]);
        }
        endCol--;

        // Traverse from right to left, if still within bounds
        if (startRow <= endRow) {
            for (let i = endCol; i >= startCol; i--) {
                arr.push(matrix[endRow][i]);
            }
            endRow--;
        }

        // Traverse upwards, if still within bounds
        if (startCol <= endCol) {
            for (let i = endRow; i >= startRow; i--) {
                arr.push(matrix[i][startCol]);
            }
            startCol++;
        }
    }
    return arr;
}

// - Driver Code

console.log(spiralMatrix([[1, 2, 3], [4, 5, 6], [7, 8, 9]]));
// Output -> [1, 2, 3, 6, 9, 8, 7, 4, 5]

console.log(spiralMatrix([[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12]]));
// Output -> [1, 2, 3, 4, 8, 12, 11, 10, 9, 5, 6, 7]