// - Problem Description
// Given a sorted matrix, come up with an efficient way to search for a value in the matrix. Each row in the matrix is sorted in ascending order from left to right. Each column in the matrix is sorted in ascending order from top to bottom.

// - Bruteforce Approach
// Time Complexity - O(N * M)
// Space Complexity - O(1)

function searchA2DMatrix1(matrix, target) {
    // Check if the matrix is empty or has no rows
    if (!matrix || matrix.length === 0 || matrix[0].length === 0) {
        return false;
    }

    let n = matrix.length;
    let m = matrix[0].length;

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            if (matrix[i][j] === target) {
                return true;
            }
        }
    }
    return false;
}

// - Optimal Approach
// Time Complexity - O(N + M)
// Space Complexity - O(1)

function searchA2DMatrix2(matrix, target) {
    // Check if the matrix is empty or has no rows
    if (!matrix || matrix.length === 0 || matrix[0].length === 0) {
        return false;
    }

    let n = matrix.length;
    let m = matrix[0].length;

    let col = m - 1;
    let row = 0;

    while (col >= 0 && row < n) {
        if (matrix[row][col] === target) {
            return true;
        } else if (matrix[row][col] < target) {
            row++;
        } else {
            col--;
        }
    }

    return false;
}

// Driver code
const matrix = [
    [1, 5, 7],
    [6, 10, 12],
    [14, 19, 21]
]

const target = 19;

let answer = searchA2DMatrix2(matrix, target);
if (answer) {
    console.log("Target is present in the Matrix");
} else {
    console.log("Target is not present in the Matrix")
}