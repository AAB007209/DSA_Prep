// - Problem Description (Leetcode: 53. Maximum Subarray)

// Link - https://leetcode.com/problems/maximum-subarray/

/*
Given an integer array nums, find the subarray with the largest sum, and return its sum.
*/

// - Bruteforce Approach
// Time Complexity - O(N^3)
// Space Complexity - O(1)

function maxSubArray(nums) {
    const n = nums.length;
    let maxi = Number.MIN_SAFE_INTEGER;

    for (let i = 0; i < n; i++) { 
        for (let j = i; j < n; j++) { 
            let sum = 0;
            for (let k = i; k <= j; k++) {
                sum += nums[k];
            }
            maxi = Math.max(maxi, sum);
        }
    }

    return maxi;
}

// - Better Approach
// Time Complexity - O(N^2)
// Space Complexity - O(1)

function maxSubArray1(nums) {
    const n = nums.length;
    let maxi = Number.MIN_SAFE_INTEGER;
    for(let i=0; i<n; i++){
        let sum = 0;
        for(let j=i; j<n; j++){
            sum += nums[j];
            maxi = Math.max(maxi, sum);
        }
    }

    return maxi;
}

// - Optimal Approach
// Time Complexity - O(N)
// Space Complexity - O(1)

function maxSubArray2(nums){
    let currSum = 0, maxi = Number.MIN_SAFE_INTEGER;

    for(let i=0; i<nums.length; i++){
        currSum = currSum + nums[i];
        maxi = Math.max(currSum, maxi);

        (currSum < 0) ? currSum = 0: currSum;
    }

    return maxi;
}

console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4])); // Output - 6
console.log(maxSubArray([1])); // Output - 1
console.log(maxSubArray([5, 4, -1, 7, 8])); // Output - 23

console.log(maxSubArray1([-2,1,-3,4,-1,2,1,-5,4])); // Output - 6
console.log(maxSubArray1([1])); // Output - 1
console.log(maxSubArray1([5, 4, -1, 7, 8])); // Output - 23

console.log(maxSubArray2([-2,1,-3,4,-1,2,1,-5,4])); // Output - 6 
console.log(maxSubArray2([1])); // Output -  1
console.log(maxSubArray2([5, 4, -1, 7, 8])); // Output - 23

