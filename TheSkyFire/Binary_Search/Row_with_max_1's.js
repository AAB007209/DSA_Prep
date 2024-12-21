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

// - Optimal Approach (Binary Search (M >> N))
// Time Complexity - O(N * log(M))
// Space Complexity - O(1)

function lowerBound(arr, m) {
    let low = 0, high = m - 1;
    let ans = m;
    while (low <= high) {
        let mid = (low + high) >> 1;

        if (arr[mid] >= 1) {
            ans = mid;
            high = mid - 1;
        } else {
            low = mid + 1;
        }
    }
    return ans;
}

function rowWithMax1s_2(arr) {
    let n = arr.length;
    let m = arr[0].length;
    let cnt_max = 0;
    let index = -1;

    for (let i = 0; i < n; i++) {
        // For every row we find out the lowerbound of 1 i.e., first occurrence and then calculate then no.of 1's from it.
        let cnt_ones = m - lowerBound(arr[i], m);
        if (cnt_ones > cnt_max) {
            cnt_max = cnt_ones;
            index = i;
        }
    }
    return index;
}


// - Optimal Approach [Step Down Approach] (if M and N are similar or N >> M)
// Time Complexity - O(N + M)
// Space Complexity - O(1)

function rowWithMax1s_3(arr) {
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

// Optimal
console.log(rowWithMax1s_3([[0, 1, 1, 1], [0, 0, 1, 1], [1, 1, 1, 1], [0, 0, 0, 0]])); // 2
console.log(rowWithMax1s_3([[0, 0], [1, 1]])); // 1
console.log(rowWithMax1s_3([[0, 0], [0, 0]])); // -1


/* Learnings

Approach: of Step down appraoch
- Start from the top-right corner of the matrix.
- Move left if you encounter a 1 (to count more 1s in the row).
- Move down if you encounter a 0 (to check the next row).
- Track the row with the maximum number of 1s during the traversal.

*/