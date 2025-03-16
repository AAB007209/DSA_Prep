// - Problem Description (GFG: Find the Union)

// Link - https://www.geeksforgeeks.org/problems/union-of-two-sorted-arrays-1587115621/1

/*
Given two sorted arrays a[] and b[], where each array may contain duplicate elements , the task is to return the elements in the union of the two arrays in sorted order.

Union of two arrays can be defined as the set containing distinct common elements that are present in either of the arrays.
*/

// - Bruteforce Approach
// Time Complexity - O(N + M + D log D)
// Space Complexity - O(N + M)

function findUnion(a, b) {
    let set = new Set();

    for (let elem of a) {
        if (!set.has(elem)) set.add(elem);
    }

    for (let elem of b) {
        if (!set.has(elem)) set.add(elem);
    }


    return [...set].sort((a, b) => a - b);
}

// - Driver code
console.log(findUnion([1, 2, 3, 4, 5], [1, 2, 3, 6, 7])); // Output - [1, 2, 3, 4, 5, 6, 7]
console.log(findUnion([2, 2, 3, 4, 5], [1, 1, 2, 3, 4])); // Output - [1, 2, 3, 4, 5]
console.log(findUnion([1, 1, 1, 1, 1], [2, 2, 2, 2, 2])); // Output - [1, 2]