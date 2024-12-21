// - Problem Description (GFG: Row with Max 1's)

// Link - https://www.geeksforgeeks.org/problems/row-with-max-1s0023/1

/*
You are given a 2D binary array arr[][] consisting of only 1s and 0s. 
Each row of the array is sorted in non-decreasing order. 
Your task is to find and return the index of the first row that contains the maximum number of 1s. 
If no such row exists, return -1.   
*/

// - Bruteforce Approach
// Time Complexity - O(N*M)
// Space Complexity - O(1)

function rowWithMax1s(arr) {
    let n = arr.length;
    let m = arr[0].length;
    let maxOnes = 0; // To track the maximum count of 1s
    let rowIndex = -1; // To track the row index with maximum 1s

    for (let i = 0; i < n; i++) {
        let count = 0;

        for (let j = 0; j < m; j++) {
            if (arr[i][j] === 1) {
                count++;
            }
        }

        if (count > maxOnes) {
            maxOnes = count;
            rowIndex = i;
        }
    }

    return maxOnes > 0 ? rowIndex : -1;
}

// - Optimal Approach
// Time Complexity - O(N * log(M))
// Space Complexity - O(1)

function rowWithMax1s_2(arr) {
    let n = arr.length;
    let m = arr[0].length;

    let maxRowIndex = -1;
    let j = m - 1; // Start from the last column

    for (let i = 0; i < n; i++) {
        while (j >= 0 && arr[i][j] === 1) {
            maxRowIndex = i; // Update the row index
            j--; // Move left to count more 1s
        }
    }

    return maxRowIndex;

}

// - Driver code
// Bruteforce
console.log(rowWithMax1s([[0, 1, 1, 1], [0, 0, 1, 1], [1, 1, 1, 1], [0, 0, 0, 0]])); // 2
console.log(rowWithMax1s([[0, 0], [1, 1]])); // 1
console.log(rowWithMax1s([[0, 0], [0, 0]])); // -1

// Optimal
console.log(rowWithMax1s_2([[0, 1, 1, 1], [0, 0, 1, 1], [1, 1, 1, 1], [0, 0, 0, 0]])); // 2
console.log(rowWithMax1s_2([[0, 0], [1, 1]])); // 1
console.log(rowWithMax1s_2([[0, 0], [0, 0]])); // -1