// Quick Sort

/*
- Algorithm
1. Choose the Pivot
2. Partition the array into two parts:
    - Left Subarray -> Elements smaller than the pivot
    - Right Subarray -> Elements greater than the pivot

3. Recursively Apply Quick Sort on both Arrays
4. Combine the Sorted Subarrays with the pivot
*/

// - Recursive Approach
// Time Complexity - O(N^2) [Worst Case]
// Space Complexity - O(N)

function partition(arr, low, high) {
    let pivot = arr[high]; // Choosing last element as pivot
    let i = low - 1;

    for (let j = low; j < high; j++) {
        if (arr[j] < pivot) {
            i++;
            [arr[i], arr[j]] = [arr[j], arr[i]]; // Swap
        }
    }
    [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]]; // Swap pivot to correct position
    return i + 1;
}

function quickSort(arr, low = 0, high = arr.length - 1) {
    if (low < high) {
        let pi = partition(arr, low, high);
        quickSort(arr, low, pi - 1);  // Sort left partition
        quickSort(arr, pi + 1, high); // Sort right partition
    }
    return arr;
}

// Example usage
let arr = [10, 7, 8, 9, 1, 5];
console.log(quickSort(arr)); // Output: [1, 5, 7, 8, 9, 10]
