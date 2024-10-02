// - Problem Description
// Given a sorted matrix, come up with an efficient way to search for a value in the matrix. Each row in the matrix is sorted in ascending order from left to right. Each column in the matrix is sorted in ascending order from top to bottom.

function searchA2DMatrix(matrix, target) {
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