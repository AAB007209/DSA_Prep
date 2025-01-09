// - Problem Description (Leetcode: 503. Next Greater Element II)

// Link - https://leetcode.com/problems/next-greater-element-ii/

/*
Given a circular integer array nums (i.e., the next element of nums[nums.length - 1] is nums[0]), return the next greater number for every element in nums.

The next greater number of a number x is the first greater number to its traversing-order next in the array, which means you could search circularly to find its next greater number. 
If it doesn't exist, return -1 for this number.
*/

// - Bruteforce Approach
// Time Complexity - O(N^2)
// Space Complexity - O(N)

function nextGreaterElements1(nums) {
    const n = nums.length;
    const res = new Array(n).fill(-1);

    for(let i=0; i<n; i++){
        for(let j=1; j<n; j++){
            let index = (i+j) % n;
            if(nums[index] > nums[i]){
                res[i] = nums[index];
                break;
            }
        }
    }

    return res;
}

// - Optimal Approach
// Time Complexity - O(N)
// Space Complexity - O(N)

function nextGreaterElements2(nums) {
    const n = nums.length;
    const res = new Array(n).fill(-1); // Initialize the result array with -1
    const stack = []; // Stack to store indices

    // Traverse the array twice to simulate circular behavior
    for (let i = 0; i < 2 * n; i++) {
        let index = i % n; // Wrap the index using modulo

        // While the stack is not empty and the current element is greater than the element at the top of the stack
        while (stack.length > 0 && nums[index] > nums[stack[stack.length - 1]]) {
            const topIndex = stack.pop();
            res[topIndex] = nums[index]; // Update the result for the element at the top of the stack
        }

        // Only push indices from the first pass (to avoid duplicates)
        if (i < n) {
            stack.push(index);
        }
    }

    return res;
}

// - Driver code 

console.log("\n---Bruteforce Approach---\n");
console.log(nextGreaterElements1([1,2,1])); // Output - [ 2, -1, 2 ]
console.log(nextGreaterElements1([1,3,2,4])); // Output - [ 3, 4, 4, -1 ]
console.log(nextGreaterElements1([1,2,3,4,3])); // Output - [ 2, 3, 4, -1, 4 ]

console.log("\n---Optimal Approach---\n");
console.log(nextGreaterElements2([1,2,1])); // Output - [ 2, -1, 2 ]
console.log(nextGreaterElements2([1,3,2,4])); // Output - [ 3, 4, 4, -1 ]
console.log(nextGreaterElements2([1,2,3,4,3])); // Output - [ 2, 3, 4, -1, 4 ]

