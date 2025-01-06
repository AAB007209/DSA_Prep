// - Problem Description (Leetcode: 496. Next Greater Element I)

// Link - https://leetcode.com/problems/next-greater-element-i/description/

/*
The next greater element of some element x in an array is the first greater element that is to the right of x in the same array.

You are given two distinct 0-indexed integer arrays nums1 and nums2, where nums1 is a subset of nums2.

For each 0 <= i < nums1.length, find the index j such that nums1[i] == nums2[j] and determine the next greater element of nums2[j] in nums2. If there is no next greater element, then the answer for this query is -1.

Return an array ans of length nums1.length such that ans[i] is the next greater element as described above.
*/

// - Bruteforce Approach (Using Map)
// Time Complexity - O(M^2 + N) [M = size of the nums2, N = size of nums1]
// Space Complexity - O(M+N)

function nextGreaterElement1(nums1, nums2) {
    const ngeMap = new Map();
    const res = [];

    for(let i=0; i<nums2.length; i++){
        let nextGreater = -1;
        for(let j = i+1; j < nums2.length; j++){
            if(nums2[j] > nums2[i]){
                nextGreater = nums2[j];
                break;
            }
        }
        ngeMap.set(nums2[i], nextGreater);
    }

    // Building the result for nums1 using the NGE map
    for(let num of nums1){
        res.push(ngeMap.get(num));
    }

    return res;
}

// - Better Solution
// Time Complexity - O(M * N) [M = size of the nums2, N = size of nums1]
// Space Complexity - O(N)
function nextGreaterElement2(nums1, nums2){
    const res = new Array(nums1.length).fill(-1);

    for(let i=0; i<nums1.length; i++){
        const target = nums1[i];
        let found = false;

        for(let j=0; j<nums2.length; j++){
            if(nums2[j] === target){
                found = true;
            }

            if(found && nums2[j] > target){
                res[i] = nums2[j];
                break;
            }
        }
    }
    return res;
}

// Better Solution (Using Stack)
// Time Complexity - O(M * N) [M = size of the nums2, N = size of nums1]
// Space Complexity - O(M + N)

function nextGreaterElement3(nums1, nums2){
    const nge = new Array(nums2.length).fill(-1); // Array to store NGEs for nums2
    const stack = []; // Stack to track elements

    // Traverse nums2 from right to left
    for (let i = nums2.length - 1; i >= 0; i--) {
        const ele = nums2[i];

        // Remove elements from the stack that are smaller than or equal to the current element
        while (stack.length > 0 && stack[stack.length - 1] <= ele) {
            stack.pop();
        }

        // If stack is not empty, the top is the NGE
        if (stack.length > 0) {
            nge[i] = stack[stack.length - 1];
        }

        // Push the current element onto the stack
        stack.push(ele);
    }

    // Build the result for nums1
    const res = [];
    for (let num of nums1) {
        const index = nums2.indexOf(num); // Find the index of num in nums2
        res.push(nge[index]); // Get the NGE from the nge array
    }

    return res;
}

// - Optimal Solution (Using Stack and Map)
// Time Complexity - O(M + N) [M = size of the nums2, N = size of nums1]
// Space Complexity - O(M + N)

function nextGreaterElement4(nums1, nums2){
    let map = new Map();
    let stack = [];
    for(let i=0; i<nums2.length; i++){
        while(stack.length>0 && nums2[i]>nums2[stack[stack.length-1]]){
            let ans = stack.pop();
            map.set(nums2[ans], nums2[i]);
        }
        stack.push(i);
    }
    let result = [];
    for(let i=0; i<nums1.length; i++){
        if(map.has(nums1[i])){
            result.push(map.get(nums1[i]));
        }else{
            result.push(-1);
        }
    }
    return result;
}

// - Driver code

// Bruteforce Solution
console.log(nextGreaterElement1([4,1,2], [1,3,4,2])); // Output: [-1, 3, -1]
console.log(nextGreaterElement1([2,4], [1,2,3,4])); // Output: [3, -1]
console.log(nextGreaterElement1([10, 20, 30], [5, 10, 20, 30, 40])); // Output: [20, 30, 40]
console.log(nextGreaterElement1([5, 10], [1, 2, 5, 6, 10])); // Output: [6, -1]

// Better Solution
console.log(nextGreaterElement2([4,1,2], [1,3,4,2])); // Output: [-1, 3, -1]
console.log(nextGreaterElement2([2,4], [1,2,3,4])); // Output: [3, -1]
console.log(nextGreaterElement3([8, 1, 5], [6, 1, 8, 5, 4])); // Output: [-1, 8, -1]
console.log(nextGreaterElement3([5, 3, 8], [9, 5, 6, 7, 3, 8])); // Output: [6, 8, -1]

// Better 2 Solution
console.log(nextGreaterElement3([4,1,2], [1,3,4,2])); // Output: [-1, 3, -1]
console.log(nextGreaterElement3([2,4], [1,2,3,4])); // Output: [3, -1]
console.log(nextGreaterElement3([9, 2, 7], [2, 4, 7, 9, 3, 5])); // Output: [-1, 4, 9]
console.log(nextGreaterElement3([11, 5], [5, 11, 6, 7])); // Output: [-1, 11]

// Optimal Solution
console.log(nextGreaterElement4([4,1,2], [1,3,4,2])); // Output: [-1, 3, -1]
console.log(nextGreaterElement4([2,4], [1,2,3,4])); // Output: [3, -1]