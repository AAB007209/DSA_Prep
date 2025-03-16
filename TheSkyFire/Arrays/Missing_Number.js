// - Problem Description (Leetcode: 268. Missing Number)

// Link - https://leetcode.com/problems/missing-number/

/*
Given an array nums containing n distinct numbers in the range [0, n], return the only number in the range that is missing from the array.
*/

// - Direct Approach
// Time Complexity - O(N)
// Space Complexity - O(1)

function missingNumber1(nums) {
    let sum = 0, sum2 = 0;
    for (let num of nums) {
        sum += num;
    }

    for (let i = 0; i <= nums.length; i++) {
        sum2 += i;
    }

    return sum2 - sum;
}

// - Using XOR Property

function missingNumber2(nums) {
    let result = nums.size();  // Initialize result with n
    let i = 0;

    for (let num of nums) {
        result ^= num;  // XOR all numbers in nums
        result ^= i;    // XOR all expected indices from 0 to n-1
        i++;
    }

    return result;
}

// - Driver code
console.log(missingNumber1([3, 0, 1])); // Output - 2
console.log(missingNumber1([0, 1])); // Output - 2
console.log(missingNumber1([9, 6, 4, 2, 3, 5, 7, 0, 1])); // Output - 8

console.log(missingNumber1([3, 0, 1])); // Output - 2
console.log(missingNumber1([0, 1])); // Output - 2
console.log(missingNumber1([9, 6, 4, 2, 3, 5, 7, 0, 1])); // Output - 8