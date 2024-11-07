// - Problem Description (Leetcode: 73: Set Matrix Zeroes)
// Link - https://leetcode.com/problems/set-matrix-zeroes

/*
Given an m x n integer matrix matrix, if an element is 0, set its entire row and column to 0's.
You must do it in place.
*/

// - Bruteforce Approach
// Time Complexity - O((N*M)*(N + M)) + O(N*M)
// Space Complexity - O(1)

function markRow(matrix, n, m, i) {
    // set all non-zero elements as -1 in the row i:
    for (let j = 0; j < m; j++) {
        if (matrix[i][j] !== 0) {
            matrix[i][j] = -1;
        }
    }
}

function markCol(matrix, n, m, j) {
    // set all non-zero elements as -1 in the col j:
    for (let i = 0; i < n; i++) {
        if (matrix[i][j] !== 0) {
            matrix[i][j] = -1;
        }
    }
}

function zeroMatrix1(matrix, n, m) {
    // Set -1 for rows and cols that contains 0. Don't mark any 0 as -1:
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            if (matrix[i][j] === 0) {
                markRow(matrix, n, m, i);
                markCol(matrix, n, m, j);
            }
        }
    }
    // Finally, mark all -1 as 0:
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            if (matrix[i][j] === -1) {
                matrix[i][j] = 0;
            }
        }
    }
    return matrix;
}

// - Better Appraoch 
// Time Complexity - O(2*(N*M))
// Space Complexity - O(N) + O(M) // using two arrays for Row and Col

function zeroMatrix2(matrix) {
    const n = matrix.length;
    const m = matrix[0].length;
    const row = new Array(n).fill(0); // row array
    const col = new Array(m).fill(0); // col array

    // Traverse the matrix:
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            if (matrix[i][j] === 0) {
                // mark ith index of row with 1:
                row[i] = 1;

                // mark jth index of col with 1:
                col[j] = 1;
            }
        }
    }

    // Finally, mark all (i, j) as 0
    // if row[i] or col[j] is marked with 1.
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            if (row[i] || col[j]) {
                matrix[i][j] = 0;
            }
        }
    }

    return matrix;
}

// - Optimal Appraoch 
// Time Complexity - O(2*(N*M))
// Space Complexity - O(1)

function zeroMatrix3(matrix) {
    const n = matrix.length;
    const m = matrix[0].length;

    let col0 = 1;
    // Step 1: Traverse the matrix and mark 1st row & col accordingly:
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            if (matrix[i][j] === 0) {
                // Mark i-th row:
                matrix[i][0] = 0;

                // Mark j-th column:
                if (j !== 0) {
                    matrix[0][j] = 0;
                } else {
                    col0 = 0;
                }
            }
        }
    }

    // Step 2: Mark with 0 from (1,1) to (n-1, m-1):
    for (let i = 1; i < n; i++) {
        for (let j = 1; j < m; j++) {
            if (matrix[i][j] !== 0) {
                // Check for col & row:
                if (matrix[i][0] === 0 || matrix[0][j] === 0) {
                    matrix[i][j] = 0;
                }
            }
        }
    }

    // Step 3: Finally mark the 1st col & then 1st row:
    if (matrix[0][0] === 0) {
        for (let j = 0; j < m; j++) {
            matrix[0][j] = 0;
        }
    }
    if (col0 === 0) {
        for (let i = 0; i < n; i++) {
            matrix[i][0] = 0;
        }
    }

    return matrix;
}

// - Driver Code

const matrix1 = [
    [1, 1, 1],
    [1, 0, 1],
    [1, 1, 1],
];

const matrix2 = [
    [0, 1, 2, 0],
    [3, 4, 5, 2],
    [1, 3, 1, 5],
]

const matrix3 = [
    [0, 1, 1, 0],
    [3, 1, 5, 2],
    [1, 3, 8, 5],
    [0, 8, 1, 1]
]

const n = matrix1.length;
const m = matrix1[0].length;

const ans = zeroMatrix1(matrix1, n, m);
const ans2 = zeroMatrix2(matrix2);
const ans3 = zeroMatrix3(matrix3);

console.log("The Final matrix is: ");
for (let i = 0; i < n; i++) {
    console.log(ans[i].join(" "));
}

console.log("\n");

console.log("The Final matrix is: ");
for (let i = 0; i < matrix2.length; i++) {
    console.log(ans2[i].join(" "));
}

console.log("\n");

console.log("The Final matrix is: ");
for (let i = 0; i < matrix3.length; i++) {
    console.log(ans3[i].join(" "));
}