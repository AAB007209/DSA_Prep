// - Problem Description (GFG: Ceil the Floor)

// Link - https://www.geeksforgeeks.org/problems/ceil-the-floor2802/1

/*
Given an unsorted array arr[] of integers and an integer x, find the floor and ceiling of x in arr[].

Floor of x is the largest element which is smaller than or equal to x. Floor of x doesn’t exist if x is smaller than smallest element of arr[].
Ceil of x is the smallest element which is greater than or equal to x. Ceil of x doesn’t exist if x is greater than greatest element of arr[].

Return an array of integers denoting the [floor, ceil]. Return -1 for floor or ceiling if the floor or ceiling is not present.
*/

// - Bruteforce Approach (Sorting + Binary Search)
// Time Complexity - O(N * log N)
// Space Complexity - O(1)

function findFloorAndCeil1(x, arr) {

    arr.sort((a, b) => a - b);

    let floor = -1;
    let ceil = -1;

    let low = 0, high = arr.length - 1;

    // Find the floor
    while (low <= high) {
        let mid = Math.floor((low + high) / 2);
        if (arr[mid] <= x) {
            floor = arr[mid];
            low = mid + 1; // Search in the right half
        } else {
            high = mid - 1; // Search in the left half
        }
    }

    low = 0; high = arr.length - 1;

    // Find the ceiling
    while (low <= high) {
        let mid = Math.floor((low + high) / 2);
        if (arr[mid] >= x) {
            ceil = arr[mid];
            high = mid - 1; // Search in the left half
        } else {
            low = mid + 1; // Search in the right half
        }
    }

    return [floor, ceil];
}

// - Optimal Approach
// Time Complexity - O(N)
// Space Complexity - O(1)

function findFloorAndCeil2(x, arr) {
    let mini = Number.MIN_SAFE_INTEGER;
    let maxi = Number.MAX_SAFE_INTEGER;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] <= x) mini = Math.max(mini, arr[i]);
        if (arr[i] >= x) maxi = Math.min(maxi, arr[i]);
    }

    if (mini === Number.MIN_SAFE_INTEGER) mini = -1;
    if (maxi === Number.MAX_SAFE_INTEGER) maxi = -1;

    return [mini, maxi];
}

// - Driver Code
console.log(findFloorAndCeil1(7, [5, 6, 8, 9, 6, 5, 5, 6])); // Output - [ 6, 8 ]
console.log(findFloorAndCeil1(10, [5, 6, 8, 9, 6, 5, 5, 6])); // Output - [ 9, -1 ]
console.log(findFloorAndCeil1(5, [6, 4, 8, 6])); // Output - [ 4, 6 ]

console.log(findFloorAndCeil2(7, [5, 6, 8, 9, 6, 5, 5, 6])); // Output - [ 6, 8 ]
console.log(findFloorAndCeil2(10, [5, 6, 8, 9, 6, 5, 5, 6])); // Output - [ 9, -1 ]
console.log(findFloorAndCeil2(5, [6, 4, 8, 6])); // Output - [ 4, 6 ]