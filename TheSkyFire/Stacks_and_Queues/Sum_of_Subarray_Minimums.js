// - Problem Description (Leetcode: 907. Sum of Subarray Minimums)

// Link - https://leetcode.com/problems/sum-of-subarray-minimums/

/*
Given an array of integers arr, find the sum of min(b), where b ranges over every (contiguous) subarray of arr. 
Since the answer may be large, return the answer modulo 109 + 7.
*/

// - Bruteforce Approach
// Time Complexity - O(N^3)
// Space Complexity - O(1)

// - Algorithm
/*
    1. Find all the Subarrays of the given array
    2. Find the min element of the subarrays
    3. Sum all the min elements.
*/

function sumOfSubarrayMins(arr) {
    const n = arr.length;

    // - 1. Find all the Subarrays of the given array
    // let subarrays = [];
    // for (let i = 0; i < n; i++) {
    //     for (let j = i + 1; j <= n; j++) {
    //         const subarr = arr.slice(i, j);
    //         subarrays.push(subarr);
    //     }
    // }

    // - 2. Find the min element of the subarrays
    // let subarrMins = [];
    // for (let array of subarrays) {
    //     let mini = Math.min(...array);
    //     subarrMins.push(mini);
    // }

    // - 3. Sum all the min elements
    // const sum = subarrMins.reduce((acc, num) => acc + num, 0);
    // return sum;

    // - OR
    let subarrMins = 0;
    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j <= n; j++) {
            const subarr = arr.slice(i, j);
            let mini = Math.min(...subarr);
            subarrMins += mini;
        }
    }

    return subarrMins;
}

// - Bruteforce Approach
// Time Complexity - O(N^2)
// Space Complexity - O(1)

function sumOfSubarrayMins2(arr) {
    const n = arr.length;
    let subarrMins = 0;

    for (let i = 0; i < n; i++) {
        let currentMin = Infinity; // Reset minimum for the new subarray

        for (let j = i; j < n; j++) {
            // Update the minimum for the subarray [i, j] as we traverse the subarray
            currentMin = Math.min(currentMin, arr[j]);

            subarrMins += currentMin; // Add minimums
        }
    }

    return subarrMins;
}

// - Optimal Approach (Using Monotonic Stack)
// Time Complexity - O(N)
// Space Complexity - O(N)

function sumOfSubarrayMins3(arr) {

}

// - Driver code
console.log(sumOfSubarrayMins([3, 1, 2, 4])); // 17
console.log(sumOfSubarrayMins([11, 81, 94, 43, 3])); // 444

console.log(sumOfSubarrayMins2([3, 1, 2, 4])); // 17
console.log(sumOfSubarrayMins2([11, 81, 94, 43, 3])); // 144