// - Problem Description

// Given an array containing a mix of strings and numbers, such as [a, 1, b, 2, c, d, 3, 4, e], your task is to create a new array that retains only the numbers present in the original array.

// Time Complexity - O(N
// Space Complexity - O(1)
function extractNumbers(N, arr) {
    let res = [];
    for (let i = 0; i < N; i++) {
        // Check if the element can be converted to a number and is not NaN
        if (!isNaN(arr[i])) {
            res.push(Number(arr[i]));
        }
    }
    return res;
}

// Driver Code
let N = 8;
let arr = ['a', '3', 'long', '17', 'crio', 'dsa', '100', '20'];
let result = extractNumbers(N, arr);
console.log(result);  // Output: [3, 17, 100, 20]


// isNaN() - Checks if the element is not a number.