// - Problem Description (Follow-up Question)
/*
Print the Subarray with Maximum Score from the Subarray Minimums (Smallest + second Smallest)
*/

function maxSubarraySum(arr, n) {
    let maxi = Number.MIN_SAFE_INTEGER; // maximum sum
    let sum = 0;

    let start = 0;
    let ansStart = -1, ansEnd = -1;
    for (let i = 0; i < n; i++) {

        if (sum == 0) start = i; // starting index

        sum += arr[i];

        if (sum > maxi) {
            maxi = sum;

            ansStart = start;
            ansEnd = i;
        }

        // If sum < 0: discard the sum calculated
        if (sum < 0) {
            sum = 0;
        }
    }

    //printing the subarray:
    console.log("The subarray is: [" + arr.slice(ansStart, ansEnd + 1).join(", ") + "]");

    return maxi;
}

let arr = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
let n = arr.length;
let maxSum = maxSubarraySum(arr, n);
console.log("The maximum subarray sum is: " + maxSum);

// - Output
/*
The subarray is: [4, -1, 2, 1]
The maximum subarray sum is: 6
*/
