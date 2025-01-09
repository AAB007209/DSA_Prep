// - Problem Description (Interviewbit: Nearest Smallest Integer)

// Link - https://www.interviewbit.com/problems/nearest-smaller-element/

/*
Given an array, find the nearest smaller element G[i] for every element A[i] in the array such that the element has an index smaller than i.

More formally,

    G[i] for an element A[i] = an element A[j] such that 
    j is maximum possible AND 
    j < i AND
    A[j] < A[i]
Elements for which no smaller element exist, consider next smaller element as -1.
*/

// - Bruteforce Approach
// Time Complexity - O(N^2)
// Space Complexity - O(1)

function nearestSmallestInteger(nums) {
    const n = nums.length;
    let result = Array(n).fill(-1);

    for(let i=n-1; i>0; i--){
        let curr = nums[i];
        for(let j=i-1; j>=0; j--){
            if(curr > nums[j]){
                result[i] = nums[j];
                break;
            }
        }
    }
    return result;
}

// - Optimal Approach (Using Stack + Map)
// Time Complexity - O(N)
// Space Complexity - O(N)
function nearestSmallestInteger2(nums){
    const n = nums.length;
    let stack = [];
    let mpp = new Map();

    stack.push(nums[0]);
    mpp.set(nums[0], -1);
    for(let i = 1; i<n; i++){
        while(stack.length > 0 && nums[i] <= stack[stack.length-1]){
            stack.pop();
        }

        if(stack.length > 0){
            mpp.set(nums[i], stack[stack.length-1]);
        }else{
            mpp.set(nums[i], -1);
        }

        stack.push(nums[i]);
    }

    const result = nums.map(num => mpp.get(num));
    // let result = [];
    // for(let i=0; i<n; i++){
    //     if(mpp.has(nums[i])){
    //         result.push(mpp.get(nums[i]));
    //     }
    // }

    return result;
}

// - Optimal Approach (Using Stack + Array)
// Time Complexity - O(N)
// Space Complexity - O(N)
function nearestSmallestInteger3(nums) {
    const n = nums.length;
    let stack = [];
    let result = [];

    for (let i = 0; i < n; i++) {
        // Pop elements from the stack until we find a smaller element or the stack becomes empty
        while (stack.length > 0 && stack[stack.length - 1] >= nums[i]) {
            stack.pop();
        }

        // If the stack is empty, there's no smaller element to the left
        if (stack.length === 0) {
            result.push(-1);
        } else {
            result.push(stack[stack.length - 1]);
        }

        stack.push(nums[i]);
    }
    return result;
}

// - Driver code

// - Bruteforce
console.log(nearestSmallestInteger([4,5,2,10,8])); // Output: [ -1, 4, -1, 2, 2 ]
console.log(nearestSmallestInteger([3,2,1])); // Output: [ -1, -1, -1 ]
console.log(nearestSmallestInteger([2,8,4,10,9,3])); // Output: [ -1, 2, 2, 4, 4, 2 ]
console.log(nearestSmallestInteger([1, 6, 4, 10, 2, 5])); // Output: [-1, 1, 1, 4, 1, 2]

// Optimal Approach
console.log(nearestSmallestInteger2([4,5,2,10,8])); // Output: [ -1, 4, -1, 2, 2 ]
console.log(nearestSmallestInteger2([3,2,1])); // Output: [ -1, -1, -1 ]
console.log(nearestSmallestInteger2([2,8,4,10,9,3])); // Output: [ -1, 2, 2, 4, 4, 2 ]
console.log(nearestSmallestInteger2([1, 3, 0, 2, 5])); // Output: [ -1, 1, -1, 0, 2 ]

console.log(nearestSmallestInteger3([4,5,2,10,8])); // Output: [ -1, 4, -1, 2, 2 ]
console.log(nearestSmallestInteger3([3,2,1])); // Output: [ -1, -1, -1 ]
console.log(nearestSmallestInteger3([2,8,4,10,9,3])); // Output: [ -1, 2, 2, 4, 4, 2 ]
console.log(nearestSmallestInteger3([1, 3, 0, 2, 5])); // Output: [ -1, 1, -1, 0, 2 ]