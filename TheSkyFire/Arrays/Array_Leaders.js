// - Problem Description (GFG: Array Leaders)

// Link - https://www.geeksforgeeks.org/problems/leaders-in-an-array-1587115620/1

/*
You are given an array arr of positive integers. Your task is to find all the leaders in the array. 
An element is considered a leader if it is greater than or equal to all elements to its right. 
The rightmost element is always a leader.
*/

// - Bruteforce Approach
// Time Complexity - O(N^2)
// Space Complexity - O(N)

function leaders1(nums) {
    const n = nums.length;
    let leaders = [];
    for(let i=0; i<n; i++){
        let flag = true;
        for(let j=i+1; j<n; j++){
            if(!(nums[i] >= nums[j])){
                flag = false;
                break;
            }
        }
        if(flag){
            leaders.push(nums[i]);
        }
    }

    return leaders;
}

// - Optimal Approach
// Time Complexity - O(N)
// Space Complexity - O(N)

function leaders2(nums){
    let n = nums.length;
    let leaders = [];
    let maxRight = nums[n - 1]; // Rightmost element is always a leader
    leaders.push(maxRight);

    // Traverse from second-last element to the leftmost
    for (let i = n - 2; i >= 0; i--) {
        if (nums[i] >= maxRight) {
            maxRight = nums[i];
            leaders.push(nums[i]);
        }
    }

    // Since leaders are collected in reverse order, reverse the array
    return leaders.reverse();
}

// - Driver code
console.log(leaders1([16, 17, 4, 3, 5, 2])); // Output: [ 17, 5, 2 ]
console.log(leaders1([10, 4, 2, 4, 1])); // Output: [ 10, 4, 4, 1 ]
console.log(leaders1([5, 10, 20, 40])); // Output: [ 40 ]
console.log(leaders1([30, 10, 10, 5])); // Output: [ 30, 10, 10, 5 ]

console.log(leaders2([16, 17, 4, 3, 5, 2])); // Output: [ 17, 5, 2 ]
console.log(leaders2([10, 4, 2, 4, 1])); // Output: [ 10, 4, 4, 1 ]
console.log(leaders2([5, 10, 20, 40])); // Output: [ 40 ]
console.log(leaders2([30, 10, 10, 5])); // Output: [ 30, 10, 10, 5 ]
