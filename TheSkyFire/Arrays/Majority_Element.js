// - Problem Description (Leetcode: 169. Majority Element)
// Link - https://leetcode.com/problems/majority-element/description

/*
Given an array nums of size n, return the majority element.

The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.
*/

// - Bruteforce Approach
// Time Complexity - O(N^2)
// Space Complexity - O(1)

function majorityElement1(nums) {
    // Size of the given array
    let n = nums.length;

    for (let i = 0; i < n; i++) {
        // Selected element is arr[i]
        let cnt = 0;
        for (let j = 0; j < n; j++) {
            // Counting the frequency of arr[i]
            if (nums[j] === nums[i]) {
                cnt++;
            }
        }

        // Check if frequency is greater than n/2
        if (cnt > Math.floor(n / 2)) {
            return nums[i];
        }
    }

    return -1;
}

// - Better Approach
// Time Complexity - O(N)
// Space Complexity - O(N)

function majorityElement2(nums) {
    let n = nums.length;

    if (n === 1) {
        return nums[0];
    }

    let map = new Map();

    for (let i = 0; i < n; i++) {
        map.set(nums[i], (map.get(nums[i]) || 0) + 1);
    }

    let condition = Math.floor(n / 2);
    for (let [key, value] of map) {
        if (value > condition) {
            return key;
        }
    }
    return -1;
}

// - Optimal Solution (Moore's Voting Algorithm)
// Time Complexity - O(N)
// Space Complexity - O(1)

function majorityElement3(nums) {
    let n = nums.length;

    if (n === 1) {
        return nums[0];
    }

    let count = 0;
    let element;

    for (let i = 0; i < n; i++) {
        if (count === 0) {
            count = 1;
            element = nums[i];
        } else if (nums[i] === element) {
            count++;
        } else {
            count--;
        }
    }

    let count1 = 0;
    for (let i = 0; i < n; i++) {
        if (nums[i] === element) {
            count1++;
        }
    }

    return count1 > Math.floor(n / 2) ? element : -1;
}

// - Driver Code

// Test cases
const testCases = [
    [3, 3, 4, 2, 4, 4, 2, 4, 4], // Majority element is 4
    [3, 2, 3],                   // Majority element is 3
    [2, 2, 1, 1, 1, 2, 2],       // Majority element is 2
    [1],                         // Single element, majority is 1
    [1, 2, 3],                   // No majority element, expect -1
];

// Testing Bruteforce Approach
console.log("Testing Bruteforce Approach");
testCases.forEach((testCase, index) => {
    console.log(`Test Case ${index + 1}: Input = ${testCase}`);
    console.log("Output:", majorityElement1(testCase));
});

// Testing Better Approach
console.log("\nTesting Better Approach");
testCases.forEach((testCase, index) => {
    console.log(`Test Case ${index + 1}: Input = ${testCase}`);
    console.log("Output:", majorityElement2(testCase));
});

// Testing Optimal Solution (Moore's Voting Algorithm)
console.log("\nTesting Optimal Solution (Moore's Voting Algorithm)");
testCases.forEach((testCase, index) => {
    console.log(`Test Case ${index + 1}: Input = ${testCase}`);
    console.log("Output:", majorityElement3(testCase));
});


// - Output
/*

Testing Bruteforce Approach
Test Case 1: Input = 3,3,4,2,4,4,2,4,4
Output: 4
Test Case 2: Input = 3,2,3
Output: 3
Test Case 3: Input = 2,2,1,1,1,2,2
Output: 2
Test Case 4: Input = 1
Output: 1
Test Case 5: Input = 1,2,3
Output: -1

Testing Better Approach
Test Case 1: Input = 3,3,4,2,4,4,2,4,4
Output: 4
Test Case 2: Input = 3,2,3
Output: 3
Test Case 3: Input = 2,2,1,1,1,2,2
Output: 2
Test Case 4: Input = 1
Output: 1
Test Case 5: Input = 1,2,3
Output: -1

Testing Optimal Solution (Moore's Voting Algorithm)
Test Case 1: Input = 3,3,4,2,4,4,2,4,4
Output: 4
Test Case 2: Input = 3,2,3
Output: 3
Test Case 3: Input = 2,2,1,1,1,2,2
Output: 2
Test Case 4: Input = 1
Output: 1
Test Case 5: Input = 1,2,3
Output: -1

*/