// - Problem Description (Leetcode: 48. Rotate Image)
// Link - https://leetcode.com/problems/rotate-image/description

/*
You are given an n x n 2D matrix representing an image, rotate the image by 90 degrees (clockwise).

You have to rotate the image in-place, which means you have to modify the input 2D matrix directly. DO NOT allocate another 2D matrix and do the rotation.
*/

// - Bruteforce Approach (Using Extra Matrix)
// Time Complexity - O(N^2)
// Space Complexity - O(N^2)

function rotateImage1(matrix) {
    const n = matrix.length;
    const rotated = Array(n).fill(null).map(() => Array(n).fill(0));
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            rotated[j][n - i - 1] = matrix[i][j];
        }
    }
    // Copy rotated matrix back to the original matrix
    for (let i = 0; i < n; i++) {
        matrix[i] = rotated[i].slice();
    }
    return matrix;
}


// - Optimal Solution (Transpose and Reverse)
// Time Complexity - O(N^2)
// Space Complexity - O(1)

function rotateImage2(matrix) {
    const n = matrix.length;

    // Transposing the matrix
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < i; j++) {
            [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
        }
    }

    // Reversing each row of the matrix
    for (let i = 0; i < n; i++) {
        matrix[i].reverse();
    }

    return matrix;
};

// - Unique Solution (link - https://leetcode.com/problems/rotate-image/solutions/5877192/simple-solution-beats-100-o-1-space-animation)
// Time Complexity - O(N^2)
// Space Complexity - O(1)

function rotateImage3(matrix) {
    const n = matrix.length;

    for (let d = 0; d < Math.floor(n / 2); d++) {
        for (let x = d; x < n - 1 - d; x++) {
            let temp = matrix[d][x];
            matrix[d][x] = matrix[n - 1 - x][d];
            matrix[n - 1 - x][d] = matrix[n - 1 - d][n - 1 - x];
            matrix[n - 1 - d][n - 1 - x] = matrix[x][n - 1 - d];
            matrix[x][n - 1 - d] = temp;
        }
    }
    return matrix;
}


// - Driver Code
console.log(rotateImage1([[1, 2, 3], [4, 5, 6], [7, 8, 9]]));
console.log(rotateImage2([[5, 1, 9, 11], [2, 4, 8, 10], [13, 3, 6, 7], [15, 14, 12, 16]]));
console.log(rotateImage3([[5, 1, 9, 11], [2, 4, 8, 10], [13, 3, 6, 7], [15, 14, 12, 16]]));


// - Outputs of the above driver code
/*
[ [ 7, 4, 1 ], 
  [ 8, 5, 2 ],
  [ 9, 6, 3 ] 
]

[
  [ 15, 13, 2, 5 ],
  [ 14, 3, 4, 1 ],
  [ 12, 6, 8, 9 ],
  [ 16, 7, 10, 11 ]
]
  
[
  [ 15, 13, 2, 5 ],
  [ 14, 3, 4, 1 ],
  [ 12, 6, 8, 9 ],
  [ 16, 7, 10, 11 ]
]
*/