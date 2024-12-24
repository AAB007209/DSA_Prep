// - Problem Description (Leetcode: 1901. Find the Peak Element II)

// Link - https://leetcode.com/problems/find-a-peak-element-ii/description

/*
A peak element in a 2D grid is an element that is strictly greater than all of its adjacent neighbors to the left, right, top, and bottom.
Given a 0-indexed m x n matrix mat where no two adjacent cells are equal, find any peak element mat[i][j] and return the length 2 array [i,j].
You may assume that the entire matrix is surrounded by an outer perimeter with the value -1 in each cell.
You must write an algorithm that runs in O(m log(n)) or O(n log(m)) time.
*/

// - Bruteforce Approach
// Time Complexity - O(N * M)
// Space Complexity - O(1)

function findPeakGrid1(mat){
    let n = mat.length;
    let m = mat[0].length;

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            let top = i > 0 ? mat[i - 1][j] : -1;
            let bottom = i < n - 1 ? mat[i + 1][j] : -1;
            let left = j > 0 ? mat[i][j - 1] : -1;
            let right = j < m - 1 ? mat[i][j + 1] : -1;

            if (mat[i][j] > top && mat[i][j] > bottom && mat[i][j] > left && mat[i][j] > right) {
                return [i, j]; 
            }
        }
    }

    return [-1, -1];
}

function findPeakGrid2(mat) {
    let n = mat.length;
    let m = mat[0].length;
    let maxi = Number.MIN_SAFE_INTEGER;
    let i1 = -1, i2 = -1;

    for(let i=0; i<n; i++){
        for(let j=0; j<m; j++){
            if(mat[i][j] > maxi){
                maxi = mat[i][j];
                i1 = i;
                i2 = j;
            }
        }
    }
    return [i1, i2];
}

// - Optimal Approach
// Time Complexity - O(N * log(M))
// Space Complexity - O(1)
function getMax(matrix, mid) {
    let index = -1;
    let maxi = Number.MIN_SAFE_INTEGER;

    for(let row = 0; row<matrix.length; row++){
        let elem = matrix[row][mid];

        if(elem > maxi){
            maxi = Math.max(maxi, elem);
            index = row;
        }
    }
    return index;
}

function findPeakGrid3(mat) {
    let n = mat.length;
    let m = mat[0].length;

    let start = 0;
    let end = m - 1;

    while(start <= end){
        let mid = (start + end) >> 1;

        let row = getMax(mat, mid);
        let left = -1, right = -1;

        // Handling edge cases
        if(mid - 1 >= 0){
            left = mat[row][mid-1];
        }

        if(mid + 1 < m){
            right = mat[row][mid+1];
        }

        // We find peak element
        if (mat[row][mid] > left && mat[row][mid] > right) {
            return [row, mid];
        }

        // our peak is on the left side of mid so eliminate the right part
        else if (mat[row][mid] > right) {
            end = mid - 1;
        }

        // our peak is on the right side of mid so eliminate the left part
        else {
            start = mid + 1;
        }
    }
    return [-1, -1];
}

// - Driver code
// - Bruteforce
console.log(findPeakGrid1([[1,4], [3,2]])); // [0,1]
console.log(findPeakGrid1([[10,20,15],[21,30,14],[7,16,32]])); // [1, 1]
console.log(findPeakGrid1([[1, 4, 3], [6, 7, 5], [9, 8, 10]])); // [2, 0]

// - Bruteforce (Max element)
console.log(findPeakGrid2([[1,4], [3,2]])); // [0,1]
console.log(findPeakGrid2([[10,20,15],[21,30,14],[7,16,32]])); // [2, 2]
console.log(findPeakGrid2([[1, 4, 3], [6, 7, 5], [9, 8, 10]])); // [2, 2]

// - Optimal
console.log(findPeakGrid3([[1,4], [3,2]])); // [1, 0]
console.log(findPeakGrid3([[10,20,15],[21,30,14],[7,16,32]])); // [1, 1]
console.log(findPeakGrid3([[1, 4, 3], [6, 7, 5], [9, 8, 10]])); // [2, 2]