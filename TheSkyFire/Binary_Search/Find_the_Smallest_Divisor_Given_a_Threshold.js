// - Problem Description (Leetcode: 1283. Find the Smallest Divisor Given a Threshold)

// Link - https://leetcode.com/problems/find-the-smallest-divisor-given-a-threshold

/*
Given an array of integers nums and an integer threshold, we will choose a positive integer divisor, divide all the array by it, and sum the division's result. Find the smallest divisor such that the result mentioned above is less than or equal to threshold.

Each result of the division is rounded to the nearest integer greater than or equal to that element. (For example: 7/3 = 3 and 10/2 = 5).

The test cases are generated so that there will be an answer.
*/

// - Bruteforce Approach
// Time Complexity - O(N^2)
// Space Complexity - O(N)

function sum(n, nums){
    let eachSum = 0;
    let N = nums.length;
    for(let i=0; i<N; i++){
        eachSum += Math.ceil(nums[i]/n);
    }
    return eachSum;
}

function smallestDivisor1(nums, threshold) {

    let len = nums.length;
    if(len > threshold) return -1;
    let mp = new Map();

    for(let i=0; i<len; i++){
        let elemSum = sum(nums[i], nums);
        mp.set(nums[i], elemSum);
    }

    let mini = Number.MAX_SAFE_INTEGER;
    for(let [key, val] of mp){
        if(val <= threshold){
            mini = Math.min(mini, key);
        }
    }
    return mini === Number.MAX_SAFE_INTEGER ? -1 : mini;
};

// - Better Approach
// Time Complexity - O(N^2)
// Space Complexity - O(1)

function smallestDivisor2(nums, threshold){
    let n = nums.length;
    let maxi = Math.max(...nums);

    for(let i=1; i<=maxi; i++){
        let sum = 0;
        for(let j=0; j<n; j++){
            sum += Math.ceil(nums[j] / i);
        }
        if(sum <= threshold) return i;
    }
    return -1;
}

// - Optimal Approach
// Time Complexity - O(N * Log N)
// Space Complexity - O(1)

function smallestDivisor3(nums, threshold){
    let n = nums.length;
    if(n > threshold) return -1;
    let low = 1, high = Math.max(...nums);

    while(low <= high){
        let mid = (low + high) >> 1;
        if(sum(mid, nums) <= threshold){
            high = mid - 1;
        }else{
            low = mid + 1;
        }
    }  
    return low;
}

// - Driver code
// Bruteforce
console.log(smallestDivisor1([1,2,5,9], 6)); // 5
console.log(smallestDivisor1([44, 22, 33, 11, 1], 5)); // 44
console.log(smallestDivisor1([1,2,3,4,5], 7)); // 3
console.log(smallestDivisor1([1, 1, 1, 1], 4)); // 1
console.log(smallestDivisor1([10, 20, 30, 40, 50, 60, 70, 80, 90, 100], 50)); // 20

// Better
console.log(smallestDivisor2([1,2,5,9], 6)); // 5
console.log(smallestDivisor2([44, 22, 33, 11, 1], 5)); // 44
console.log(smallestDivisor2([1,2,3,4,5], 7)); // 3
console.log(smallestDivisor2([1, 1, 1, 1], 4)); // 1
console.log(smallestDivisor2([10, 20, 30, 40, 50, 60, 70, 80, 90, 100], 50)); // 20

// Optimal
console.log(smallestDivisor3([1,2,5,9], 6)); // 5
console.log(smallestDivisor3([44, 22, 33, 11, 1], 5)); // 44
console.log(smallestDivisor3([1,2,3,4,5], 7)); // 3
console.log(smallestDivisor3([1, 1, 1, 1], 4)); // 1
console.log(smallestDivisor3([10, 20, 30, 40, 50, 60, 70, 80, 90, 100], 50)); // 20