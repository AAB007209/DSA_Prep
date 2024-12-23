// - Problem Description (Leetcode: 240. Search in a 2D Matrix II)

// Link - https://leetcode.com/problems/search-a-2d-matrix-ii/description

/*
Write an efficient algorithm that searches for a value target in an m x n integer matrix matrix. This matrix has the following properties:

Integers in each row are sorted in ascending from left to right.
Integers in each column are sorted in ascending from top to bottom.
*/

// - Bruteforce Approach
// Time Complexity - O(N * M)
// Space Complexity - O(1)

function searchMatrix(matrix, target) {
    let n = matrix.length;
    let m = matrix[0].length;

    for(let i=0; i<n; i++){
        for(let j=0; j<m; j++){
            if(matrix[i][j] === target){
                return true;
            }
        }
    }
    return false;
}

// - Better Approach
// Time Complexity - O(N * log(M))
// Space Complexity - O(1)

function bin_search(rowArray, target){
    let len = rowArray.length;
    let low = 0, high = len-1;
    while(low <= high){
        let mid = (low + high) >> 1;
        if(rowArray[mid] === target){
            return true;
        }else if(rowArray[mid] < target){
            low = mid+1;
        }else{
            high = mid-1;
        }
    }
    return false;
}

function searchMatrix2(matrix, target) {
    let n = matrix.length;
    let m = matrix[0].length;

    for(let i=0; i<n; i++){
        if(matrix[i][0] <= target && target <= matrix[i][m-1]){
            if(bin_search(matrix[i], target)){
                return true;
            }
        }
    }
    return false;
}

// - Optimal Approach
// Time Complexity - O(N+M)
// Space Complexity - O(1)

function searchMatrix3(matrix, target){
    let n = matrix.length;
    let m = matrix[0].length;

    let j = m - 1;
    let i = 0;
    while (j >= 0 && i < n) {
        if (matrix[i][j] === target) {
            return true;
        } else if (matrix[i][j] > target) {
            j--;
        } else {
            i++;
        }
    }
    return false;
}

// - Driver code
console.log(searchMatrix([[1,4,7,11,15],[2,5,8,12,19],[3,6,9,16,22],[10,13,14,17,24],[18,21,23,26,30]], 5));
console.log(searchMatrix([[1,4,7,11,15],[2,5,8,12,19],[3,6,9,16,22],[10,13,14,17,24],[18,21,23,26,30]], 20));

console.log(searchMatrix2([[1,4,7,11,15],[2,5,8,12,19],[3,6,9,16,22],[10,13,14,17,24],[18,21,23,26,30]], 5));
console.log(searchMatrix2([[1,4,7,11,15],[2,5,8,12,19],[3,6,9,16,22],[10,13,14,17,24],[18,21,23,26,30]], 20));

console.log(searchMatrix3([[1,4,7,11,15],[2,5,8,12,19],[3,6,9,16,22],[10,13,14,17,24],[18,21,23,26,30]], 5));
console.log(searchMatrix3([[1,4,7,11,15],[2,5,8,12,19],[3,6,9,16,22],[10,13,14,17,24],[18,21,23,26,30]], 20));
