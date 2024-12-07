// - Problem Description (Leetcode: 1539. Kth Missing Positive Number)

// Link - https://leetcode.com/problems/kth-missing-positive-number/description

/*
Given an array arr of positive integers sorted in a strictly increasing order, and an integer k.

Return the kth positive integer that is missing from this array.
*/

// - Bruteforce Approach
// Time Complexity - O(N)
// Space Complexity - O(1)

function findKthPositive1(arr, k) {
    let n = arr.length;
    for (let i = 0; i < n; i++) {
        if (arr[i] <= k) k++;
        else break;
    }
    return k;
}


// - Optimal Approach (Binary Search)
// Time Complexity - O(Log N)
// Space Complexity - O(1)

function findKthPositive2(arr, k) {
    let low = 0, high = arr.length - 1;
    while (low <= high) {
        let mid = (low + high) >> 1;
        let missing = arr[mid] - (mid + 1);
        if (missing < k) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }
    return k + high + 1;
}

// - Driver code
// Bruteforce
console.log(findKthPositive1([2, 3, 4, 7, 11], 5));
console.log(findKthPositive1([1, 2, 3, 4], 2));
console.log(findKthPositive1([4, 7, 11], 3));

// Optimal
console.log(findKthPositive2([2, 3, 4, 7, 11], 5));
console.log(findKthPositive2([1, 2, 3, 4], 2));
console.log(findKthPositive2([4, 7, 11], 3));

// - Learnings
/*
- Very Interesting problem. Not a Typical Binary Search problem.
- Requires some practice and Observations to come up with this solution because even Bruteforce was hard for me to come up with.
*/