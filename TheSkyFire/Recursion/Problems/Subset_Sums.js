// - Problem Description (GFG: Subset sums)

// Link - https://www.geeksforgeeks.org/problems/subset-sums2234/1

/*
Given a array arr of integers, return the sums of all subsets in the list.  Return the sums in any order.
*/

// - Recursive Approach
// Time Complexity - O(2^N)
// Space Complexity - O(2^N)

function sums(arr, output, result){
    if(arr.length === 0){
        result.push(output);
        return;
    }
    
    // Pick the first element
    sums(arr.slice(1), output + arr[0], result);
    
    // Don't pick the first element
    sums(arr.slice(1), output, result);
}

function subsetSums(arr) {
    let result = [];
    sums(arr, 0, result);
    return result.sort((a, b) => a - b); // Sorting not required Actually
}

// - Driver code
console.log(subsetSums([2,3])); // Output: [0, 2, 3, 5]
console.log(subsetSums([1,2,1])); // Output: [0, 1, 1, 2, 2, 3, 3, 4]
console.log(subsetSums([5,6,7])); // Output: [0, 5, 6, 7, 11, 12, 13, 18]