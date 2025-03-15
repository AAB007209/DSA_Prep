// - Problem Description (Leetcode: 189. Rotate Array)

// Link - https://leetcode.com/problems/rotate-array/

/*
Given an integer array nums, rotate the array to the right by k steps, where k is non-negative.
*/

// - Bruteforce Approach
// Time Complexity - O(N)
// Space Complexity - O(N)

function rotateArray(nums, k) {
    const n = nums.length;
    let newArray = new Array(n);

    for (let i = 0; i < n; i++) {
        newArray[(i + k) % n] = nums[i];
    }

    return newArray;
}

// - Better Appraoch [Using Deque (Double-Ended Queue)]
// Time Complexity - O(N)
// Space Complexity - O(K)
function rotateArray2(nums, k) {
    const n = nums.length;
    k = k % n;
    if (k === 0 || n === 1) return nums;

    let deque = nums.slice(-k); // Store the last k elements
    nums.splice(-k, k); // Remove the last k elements
    return deque.concat(nums); // Attach at the front
}

// - Better Appraoch [Using splice method]
// Time Complexity - O(N)
// Space Complexity - O(K)

function rotateArray5(nums, k) {
    const n = nums.length;
    k = k % n; // Handle cases where k > n
    if (k === 0 || n === 1) return nums;

    let rotatedPart = nums.splice(-k); // Extract last k elements
    nums.unshift(...rotatedPart); // Move to the front
    return nums;
}

// - Optimal Appraoch
// Time Complexity - O(N)
// Space Complexity - O(1)

function rotateArray3(nums, k) {
    const n = nums.length;
    k = k % n; // Handle cases where k > n

    if (k === 0 || n === 1) return; // Optimization for trivial cases

    function reverse(left, right) {
        while (left < right) {
            [nums[left], nums[right]] = [nums[right], nums[left]]; // Swap using destructuring
            left++;
            right--;
        }
    }

    reverse(0, n - 1);  // Reverse the entire array
    reverse(0, k - 1);  // Reverse the first k elements
    reverse(k, n - 1);  // Reverse the remaining elements

    return nums;
};

// - Optimal Appraoch [Cyclic Replacements]
// Time Complexity - O(N)
// Space Complexity - O(1)

function rotateArray4(nums, k) {
    const n = nums.length;
    k = k % n; // Handle cases where k > n
    if (k === 0 || n === 1) return; // No need to rotate

    let count = 0; // Number of elements placed correctly
    let start = 0; // Start index of the cycle

    while (count < n) {
        let current = start, prev = nums[start];

        do {
            let next = (current + k) % n;
            [nums[next], prev] = [prev, nums[next]]; // Swap
            current = next;
            count++;
        } while (current !== start);

        start++; // Move to the next cycle
    }

    return nums;
}


// - Driver code
console.log(rotateArray([1, 2, 3, 4, 5, 6, 7], 3)); // Output - [5, 6, 7, 1, 2, 3, 4] 
console.log(rotateArray([1, 2, 3, 4, 5, 6, 7], 7)); // Output - [1, 2, 3, 4, 5, 6, 7]
console.log(rotateArray([-1, -100, 3, 99], 2)); // Output - [3, 99, -1, -100]

console.log(rotateArray2([1, 2, 3, 4, 5, 6, 7], 3)); // Output - [5, 6, 7, 1, 2, 3, 4] 
console.log(rotateArray2([1, 2, 3, 4, 5, 6, 7], 7)); // Output - [1, 2, 3, 4, 5, 6, 7]
console.log(rotateArray2([-1, -100, 3, 99], 2)); // Output - [3, 99, -1, -100]

console.log(rotateArray3([1, 2], 1)); // Output - [2, 1]
console.log(rotateArray3([1, 2], 3)); // Output - [2, 1]
console.log(rotateArray3([-5, -10, -15, -20], 2)); // Output - [ -15, -20, -5, -10 ]

console.log(rotateArray4([1, 2], 1)); // Output - [2, 1]
console.log(rotateArray4([1, 2], 3)); // Output - [2, 1]
console.log(rotateArray4([-5, -10, -15, -20], 2)); // Output - [ -15, -20, -5, -10 ]

console.log(rotateArray5([1, 2], 1)); // Output - [2, 1]
console.log(rotateArray5([1, 2], 3)); // Output - [2, 1]
console.log(rotateArray5([-5, -10, -15, -20], 2)); // Output - [ -15, -20, -5, -10 ]