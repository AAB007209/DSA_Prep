// - Problem Description (GFG. Number of Occurrence)

// Link - https://www.geeksforgeeks.org/problems/number-of-occurrence2259/1

/*
Given a sorted array, arr[] and a number target, you need to find the number of occurrences of target in arr[].
*/

// - Bruteforce Approach (Linear Search)
// Time Complexity - O(N)
// Space Complexity - O(1)

function numberOfOccurrences1(arr, target) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            count++;
        }
    }
    return count;
}

function numberOfOccurrences2(nums, target) {
    let n = nums.length;
    if (n === 0) return -1;

    let startIndex = -1, endIndex = -1;
    let left = 0, right = n - 1;
    while (left <= right) {
        let mid = (left + right) >> 1;
        if (nums[mid] === target) {
            startIndex = mid;
            right = mid - 1;
        } else if (nums[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    left = 0, right = n - 1;
    while (left <= right) {
        let mid = (left + right) >> 1;
        if (nums[mid] === target) {
            endIndex = mid;
            left = mid + 1;
        } else if (nums[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return (startIndex !== -1 && endIndex !== -1) ? (endIndex - startIndex + 1) : 0;
}

// - Driver Code
// Bruteforce
console.log(numberOfOccurrences1([1, 1, 2, 2, 2, 2, 3], 2)); // Output -> 4
console.log(numberOfOccurrences1([1, 1, 2, 2, 2, 2, 3], 4)); // Output -> 0
console.log(numberOfOccurrences1([8, 9, 10, 12, 12, 12], 12)); // Output -> 3

// Optimal (Binary Search)
console.log(numberOfOccurrences2([1, 1, 2, 2, 2, 2, 3], 2)); // Output -> 4
console.log(numberOfOccurrences2([1, 1, 2, 2, 2, 2, 3], 4)); // Output -> 0
console.log(numberOfOccurrences2([8, 9, 10, 12, 12, 12], 12)); // Output -> 3
