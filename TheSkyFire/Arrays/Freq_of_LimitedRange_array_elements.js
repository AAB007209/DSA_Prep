// - Problem Description (GFG: Frequencies of Limited Range Array Elements)
// Link - https://www.geeksforgeeks.org/problems/frequency-of-array-elements-1587115620/1

/*
You are given an array arr[] containing positive integers. These integers can be from 1 to p, and some numbers may be repeated or absent. Your task is to count the frequency of all numbers that lie in the range 1 to n.

Note:
Do modify the array in-place changes in arr[], such that arr[i] = frequency(i) and assume 1-based indexing.
The elements greater than n in the array can be ignored when counting.

*/

// - Bruteforce Approach
// Time Complexity - O(N)
// Space Complexity - O(N)

function frequencyCount1(arr, N, P) {

    let freqArray = Array(N).fill(0);

    for (let i = 0; i < N; i++) {
        if (arr[i] <= N) {
            freqArray[arr[i] - 1] += 1;
        }
    }

    for (let i = 0; i < N; i++) {
        arr[i] = freqArray[i];
    }
    return arr;
}

// - Optimised Approach
// Time Complexity - O(N)
// Space Complexity - O(1)

function frequencyCount2(arr, N, P) {
    let i = 0;
    while (i < N) {
        // If the element is out of range or already processed
        if (arr[i] <= 0 || arr[i] > N || arr[i] > P) {
            i++;
            continue;
        }

        // Find the index corresponding to this element
        let elementIndex = arr[i] - 1;

        // If the element at `elementIndex` is not processed
        if (arr[elementIndex] > 0) {
            arr[i] = arr[elementIndex]; // Save current element to `arr[i]`

            // Mark arr[elementIndex] to store initial count
            arr[elementIndex] = -1;
        } else {
            // If this is not the first occurrence of arr[i],
            // decrement its count
            arr[elementIndex]--;

            // Initialize arr[i] as 0 to indicate it's processed
            arr[i] = 0;
            i++;
        }
    }

    // Convert all negative values to positive frequencies
    for (let i = 0; i < N; i++) {
        if (arr[i] < 0) {
            arr[i] = -arr[i];
        } else {
            arr[i] = 0;
        }
    }
    return arr;
}

// - Driver code

console.log(frequencyCount1([2, 3, 2, 3, 5], 5, 5)); // Output -> [0, 2, 2, 0, 1]
console.log(frequencyCount2([8, 9], 2, 9)); // Output -> [0, 0]
