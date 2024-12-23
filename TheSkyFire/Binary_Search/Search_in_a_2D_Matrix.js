// - Problem Description (Leetcode: 74. Search a 2D Matrix)

// Link - https://leetcode.com/problems/search-a-2d-matrix/description

/*
You are given an m x n integer matrix matrix with the following two properties:

Each row is sorted in non-decreasing order.
The first integer of each row is greater than the last integer of the previous row.
Given an integer target, return true if target is in matrix or false otherwise.

You must write a solution in O(log(m * n)) time complexity.
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
// Time Complexity - O(log(N*M))
// Space Complexity - O(1)

function searchMatrix3(matrix, target){
    let n = matrix.length;
    let m = matrix[0].length;

    //apply binary search:
    let low = 0, high = n * m - 1;
    while (low <= high) {
        let mid = (low + high) >> 1;
        let row = Math.floor(mid / m);
        let col = mid % m;
        if (matrix[row][col] === target) return true;
        else if (matrix[row][col] < target) low = mid + 1;
        else high = mid - 1;
    }
    return false;
}

// - Driver code
console.log(searchMatrix([[1,3,5,7], [10, 11, 16, 20], [23,30,34,60]], 3)); // true
console.log(searchMatrix([[1,3,5,7], [10, 11, 16, 20], [23,30,34,60]], 13)); // false

console.log(searchMatrix2([[1,3,5,7], [10, 11, 16, 20], [23,30,34,60]], 1)); // true
console.log(searchMatrix2([[1,3,5,7], [10, 11, 16, 20], [23,30,34,60]], 13)); // false

console.log(searchMatrix2([[1,3,5,7], [10, 11, 16, 20], [23,30,34,60]], 34)); // true
console.log(searchMatrix2([[1,3,5,7], [10, 11, 16, 20], [23,30,34,60]], 9)); // false
