// - Problem Description (Leetcode: 2104. Sum of Subarray Ranges)

// Link - https://leetcode.com/problems/sum-of-subarray-ranges/description/

/*

You are given an integer array nums. The range of a subarray of nums is the difference between the largest and smallest element in the subarray.

Return the sum of all subarray ranges of nums.

A subarray is a contiguous non-empty sequence of elements within an array.

*/

// - Bruteforce Approach
// Time Complexity - O(N^3)
// Space Complexity - O(N)

//, Algorithm
/*
    1. Generate all the subarrays
    2. Find out the Max and min from the each Subarray, take out Difference and add it to sum.
*/

function subArrayRanges(nums) {
    let n = nums.length;
    let sum = 0;
    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j <= n; j++) {
            const subarr = nums.slice(i, j);
            let maxi = Math.max(...subarr);
            let mini = Math.min(...subarr);

            let diff = maxi - mini;
            sum += diff;
        }
    }
    return sum;
}

// - Better Approach
// Time Complexity - O(N^2)
// Space Complexity - O(1)

function subArrayRanges2(nums) {
    let n = nums.length;
    let sum = 0;

    for (let i = 0; i < n; i++) {
        let maxi = nums[i];
        let mini = nums[i];

        for (let j = i + 1; j < n; j++) {
            maxi = Math.max(maxi, nums[j]);
            mini = Math.min(mini, nums[j]);
            sum += maxi - mini;
        }
    }

    return sum;
}

// - Optimal Approach
// Time Complexity ~ O(N)
// Space Complexity ~ O(N)

function subArrayRanges3(nums) {
    let mins = 0
    let maxes = 0
    let minStack = [];
    let maxStack = [];

    for (let i = 0; i < nums.length; i++) {
        while (minStack.length && nums[minStack[minStack.length - 1]] > nums[i]) {
            const min = minStack.pop()
            mins += ((min - (minStack.length ? minStack[minStack.length - 1] : -1)) * (i - min)) * nums[min]
        }
        minStack.push(i)

        while (maxStack.length && nums[maxStack[maxStack.length - 1]] < nums[i]) {
            const max = maxStack.pop()
            maxes += ((max - (maxStack.length ? maxStack[maxStack.length - 1] : -1)) * (i - max)) * nums[max]
        }
        maxStack.push(i)
    }

    while (minStack.length) {
        const min = minStack.pop()
        mins += ((min - (minStack.length ? minStack[minStack.length - 1] : -1)) * (nums.length - min)) * nums[min]
    }


    while (maxStack.length) {
        const max = maxStack.pop()
        maxes += ((max - (maxStack.length ? maxStack[maxStack.length - 1] : -1)) * (nums.length - max)) * nums[max]
    }

    return maxes - mins;
}

// - Driver code
console.log(subArrayRanges([1, 2, 3])); // Output - 4
console.log(subArrayRanges([1, 3, 3])); // Output - 4
console.log(subArrayRanges([4, -2, -3, 4, 1])); // Output - 59