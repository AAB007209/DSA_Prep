// - Problem Description (GFG: Second Largest)

// Link - https://www.geeksforgeeks.org/problems/second-largest3735/1

/*
Given an array of positive integers arr[], return the second largest element from the array. If the second largest element doesn't exist then return -1.

Note: The second largest element should not be equal to the largest element.
*/

// - Bruteforce Approach
// Time Complexity - O(2N)
// Space Complexity - O(1)

function secondLargest1(arr) {
    let firstLargest = -1, secondLargest = -1;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > firstLargest) {
            firstLargest = arr[i];
        }
    }

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > secondLargest && arr[i] < firstLargest) {
            secondLargest = arr[i];
        }
    }

    return secondLargest;
}

// - Optimized Approach
// Time Complexity - O(N)
// Space Complexity - O(1)

function secondLargest2(arr) {
    let firstLargest = -Infinity, secondLargest = -Infinity;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > firstLargest) {
            secondLargest = firstLargest;
            firstLargest = arr[i];
        } else if (arr[i] > secondLargest && arr[i] < firstLargest) {
            secondLargest = arr[i];
        }
    }

    return secondLargest === -Infinity ? -1 : secondLargest;
}

// - Driver code

console.log(secondLargest1([12, 35, 1, 10, 34, 1]));
console.log(secondLargest1([10, 5, 10]));
console.log(secondLargest1([10, 10, 10]));

console.log(secondLargest2([12, 35, 1, 10, 34, 1]));
console.log(secondLargest2([10, 5, 10]));
console.log(secondLargest2([10, 10, 10]));