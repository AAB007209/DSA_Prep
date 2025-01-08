// - Problem Description (GFG: Number of Greater elements to the right)

// Link - https://www.geeksforgeeks.org/problems/number-of-nges-to-the-right/1

/*
Given an array of N integers and Q queries of indices. For each query indices[i], 
determine the count of elements in arr that are strictly greater than arr[indices[i]] to its right (after the position indices[i]).
*/

// - Bruteforce Approach
// Time Complexity - O(queries * N)
// Space Complexity - O(1)

function countNge(arr, queries, indices) {
    let N = arr.length;
    let result = [];
    for(let i=0; i<queries; i++){
        let curr = arr[indices[i]]; 
        let count = 0;
        for(let j=indices[i]+1; j<N; j++){
            if(curr < arr[j]){
                count++;
            }
        }
        result.push(count);
    }
    return result;
}

// - Optimal Approach
// Time Complexity - O(queries * N)
// Space Complexity - O(N)

function countNge2(arr, queries, indices){
    let N = arr.length;
    let result = [];

    for(let i=0; i<queries; i++){
        let curr = arr[indices[i]]; 
        let stack = [];
        let r = N - 1;
        while(r > indices[i]){
            if(arr[r] > curr){
                stack.push(arr[r]);
            }
            r--;
        }
        result[i] = stack.length;
    }
    return result;
}

// - Driver code
console.log(countNge([3,4,2,7,5,8,10,6], 2, [0,5])); // Output: [ 6, 1 ]
console.log(countNge([1,2,3,4,1], 2, [0,3])); // Output: [ 3, 0 ]

// Stack Approach
console.log(countNge2([3,4,2,7,5,8,10,6], 2, [0,5])); // Output: [ 6, 1 ]
console.log(countNge2([1,2,3,4,1], 2, [0,3])); // Output: [ 3, 0 ]
