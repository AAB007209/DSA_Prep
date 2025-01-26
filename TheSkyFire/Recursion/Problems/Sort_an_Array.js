/*
- Sort an Array using Recursion
*/

// - Recursive Approach
// Time Complexity - O(N^2)
// Space Complexity - O(N)

function sortArray(arr) {
    if (arr.length <= 1) {
        return arr;
    }

    let temp = arr.pop();
    sortArray(arr);
    insert(arr, temp);

    return arr;
}

function insert(arr, temp) {
    if (arr.length === 0 || arr[arr.length - 1] <= temp) {
        arr.push(temp);
        return;
    }

    let val = arr.pop();

    insert(arr, temp);

    arr.push(val);
}

// - Driver code
console.log(sortArray([5, 1, 2, 0, 3])); // Output: [ 0, 1, 2, 3, 5 ]
console.log(sortArray([2, 3, 7, 6, 4, 5, 9])); // Output: [ 2, 3, 4, 5, 6, 7, 9]
console.log(sortArray([1, 2, 3, 4])); // Output: [ 1, 2, 3, 4 ] (Already Sorted)