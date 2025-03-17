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

// - Better Approach [Hash Map] [This is optimal for +ve & -ve Integers]
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

// - Optimal Approach [Two Pointers] (Only +ve Integers)
// Time Complexity - O(N)
// Space Complexity - O(1)

function longestSubarray3(arr, k){
    let n = arr.length; // size of the array

    let left = 0, right = 0; // 2 pointers
    let sum = arr[0];
    let maxLen = 0;
    while (right < n) {
        // if sum > k, reduce the subarray from left
        // until sum becomes less or equal to k
        while (left <= right && sum > k) {
            sum -= arr[left];
            left++;
        }

        // if sum = k, update the maxLen i.e. answer
        if (sum === k) {
            maxLen = Math.max(maxLen, right - left + 1);
        }

        // Move forward the right pointer
        right++;
        if (right < n) sum += arr[right];
    }

    return maxLen;
}

// - Driver code
// +ve + -ve Integers
console.log(longestSubarray2([2, 3, -2, 4, -1, 5], 5));  // Output: 3
console.log(longestSubarray2([1, 2, 3, -1, 4], 6));      // Output: 3
console.log(longestSubarray2([-2, -3, 4, -1, -2, 1, 5], 3)); // Output: 4

// Only +ve Integers 
console.log(longestSubarray3([10, 5, 2, 7, 1], 15)); // Output: 4 
console.log(longestSubarray3([8, 2, 4, 12], 10)); // Output: 2
console.log(longestSubarray3([10, 10, 20, 30], 40)); // Output: 3 
