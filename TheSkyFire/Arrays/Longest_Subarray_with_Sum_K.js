// - Problem Description (GFG: Longest Subarray with Sum K)

// Link - https://www.geeksforgeeks.org/problems/longest-sub-array-with-sum-k0809/1

/*
Given an array arr[] containing integers and an integer k, your task is to find the length of the longest subarray where the sum of its elements is equal to the given value k. 
If there is no subarray with sum equal to k, return 0.
*/

// - Bruteforce Approach
// Time Complexity - O(N^2)
// Space Complexity - O(1)
function longestSubarray1(arr, K) {
    const n = arr.length;
    let maxLength = 0;
    
    for(let i=0; i<n; i++){
        let sum = 0;

        for(let j=i; j<n; j++){
            sum += arr[j];

            if(sum === K){
                maxLength = Math.max(maxLength, j-i+1);
            }
        }
    }
    return maxLength;
}

// - Optimal Approach
// Time Complexity - O(N)
// Space Complexity - O(N)
function longestSubarray2(arr, K) {
    const n = arr.length;
    let map = new Map();
    let sum = 0;
    let maxLength = 0;

    for (let i = 0; i < n; i++) {
        sum += arr[i];

        // If sum itself equals K, update maxLength
        if (sum === K) {
            maxLength = i + 1;
        }

        // Check if (sum - K) exists in the map
        if (map.has(sum - K)) {
            maxLength = Math.max(maxLength, i - map.get(sum - K));
        }

        // Store the first occurrence of sum in the map
        if (!map.has(sum)) {
            map.set(sum, i);
        }
    }

    return maxLength;
}

// - Driver code
console.log(longestSubarray2([10, 5, 2, 7, 1, -10], 15)); // Output: 6
console.log(longestSubarray2([-5, 8, -14, 2, 4, 12], -5)); // Output: 5
console.log(longestSubarray2([10, -10, 20, 30], 5)); // Output: 0