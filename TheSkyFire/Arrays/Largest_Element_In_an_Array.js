// - Problem Description (GFG: Largest Element in Array)

// Link - https://www.geeksforgeeks.org/problems/largest-element-in-array4009/0

/*
Given an array arr[]. The task is to find the largest element and return it.
*/

// - Bruteforce Approach
// Time Complexity - O(N)
// Space Complexity - O(1)

function largest1(arr) {
    let largest = -1;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > largest) {
            largest = arr[i];
        }
    }
    return largest;
}

function largest2(arr) {
    const maxNumber = arr.reduce((max, num) => Math.max(max, num), -Infinity);
    return maxNumber;
}

// - Driver code
console.log(largest1([1, 8, 7, 56, 90]));
console.log(largest1([5, 5, 5, 5]));
console.log(largest1([10]));

console.log(largest2([1, 8, 7, 56, 90]));
console.log(largest2([5, 5, 5, 5]));
console.log(largest2([10]));