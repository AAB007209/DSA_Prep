// - Problem Description (GFG: Maximum Score from Subarray Minimums)

// Link - https://www.geeksforgeeks.org/problems/max-sum-in-sub-arrays0824/0

/*
Given an array arr[], with 0-based indexing, select any two indexes, i and j such that i < j. 
From the subarray arr[i...j], select the smallest and second smallest numbers and add them, you will get the score for that subarray. 
Return the maximum possible score across all the subarrays of array arr[].
*/

// - Bruteforce Approach
// Time Complexity - O(N^3)
// Space Complexity - O(1)

function maxScore1(arr) {
    let n = arr.length;
    let maxScore = 0;

    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            let smallest = Infinity, secondSmallest = Infinity;

            // Find the two smallest elements in arr[i...j] in O(N)
            for (let k = i; k <= j; k++) {
                if (arr[k] < smallest) {
                    secondSmallest = smallest;
                    smallest = arr[k];
                } else if (arr[k] < secondSmallest) {
                    secondSmallest = arr[k];
                }
            }

            let score = smallest + secondSmallest;
            maxScore = Math.max(maxScore, score);
        }
    }
    return maxScore;
}

// - Better Approach
// Time Complexity - O(N^2)
// Space Complexity - O(1)

function maxScore2(arr) {
    let n = arr.length;
    let maxScore = 0;

    for (let i = 0; i < n; i++) {
        let smallest = Infinity, secondSmallest = Infinity;
        for (let j = i; j < n; j++) {
            if (arr[j] < smallest) {
                secondSmallest = smallest;
                smallest = arr[j];
            } else if (arr[j] < secondSmallest) {
                secondSmallest = arr[j];
            }
        
            if(secondSmallest !== Infinity){
                let score = smallest + secondSmallest;
                maxScore = Math.max(maxScore, score);
            }
        }
    }
    return maxScore;
}

// - Optimal Approach
// Time Complexity - O(N)
// Space Complexity - O(1)

function maxScore3(arr){
    let n = arr.length;
    if (n < 2) return 0; // Edge case: No valid pairs possible

    let maxScore = 0;

    for (let i = 0; i < n - 1; i++) {
        maxScore = Math.max(maxScore, arr[i] + arr[i + 1]);
    }

    return maxScore;
}

// - Driver code
console.log(maxScore1([4, 3, 1, 5, 6])); // Output: 11 (5+6)
console.log(maxScore1([5, 4, 3, 1, 6])); // Output: 9 (5+4)

console.log(maxScore2([4, 3, 1, 5, 6]));   // Output: 11 (5+6)
console.log(maxScore2([8, 2, 4, 6, 1]));   // Output: 10 (4+6)

console.log(maxScore3([5, 2, 8, 9, 4]));   // Output: 17 (8+9)
console.log(maxScore3([1, 2]));            // Output: 3 (1+2)
console.log(maxScore3([10]));              // Output: 0 (Edge case: Only one element)
console.log(maxScore3([]));                // Output: 0 (Edge case: Empty array)

