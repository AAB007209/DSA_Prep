// - Problem Description (Leetcode: 88. Merge Sort Array)

// Link - https://leetcode.com/problems/merge-sorted-array

/*
Merge nums1 and nums2 into a single array sorted in non-decreasing order.

The final sorted array should not be returned by the function, but instead be stored inside the array nums1. 
To accommodate this, nums1 has a length of m + n, where the first m elements denote the elements that should be merged,
and the last n elements are set to 0 and should be ignored. nums2 has a length of n.
*/

// - Bruteforce Solution
// Time Complexity - O((M+N) * log(M+N))
// Space Complexity - O(M + N)

function mergeSortArray1(nums1, m, nums2, n) {

    for (let i = 0; i < n; i++) {
        nums1[m + i] = nums2[i]; // O(N)
    }

    nums1.sort((a, b) => a - b); // O(M * LogM)

    return nums1;
}

// - Better Approach
// Time Complexity - O(M + N)
// Space Complexity - O(N)

function mergeSortArray2(nums1, m, nums2, n) {
    let nums3 = [];
    let j = 0, k = 0;

    while (j < m && k < n) {
        if (nums1[j] < nums2[k]) {
            nums3.push(nums1[j]);
            j++;
        } else if (nums1[j] > nums2[k]) {
            nums3.push(nums2[k]);
            k++;
        } else {
            nums3.push(nums1[j]);
            nums3.push(nums2[k]);
            j++;
            k++;
        }
    }

    while (j < m) {
        nums3.push(nums1[j]);
        j++;
    }

    while (k < n) {
        nums3.push(nums2[k]);
        k++;
    }

    return nums3;
}

// - Optimal Solution
// Time Complexity - O(M + N)
// Space Complexity - O(1)

function mergeSortArray3(nums1, m, nums2, n) {
    let left = m - 1;
    let right = 0;

    while (left >= 0 && right < n) {
        if (nums1[left] > nums2[right]) {
            [nums1[left], nums2[right]] = [nums2[right], nums1[left]]
            left--, right++;
        } else {
            break;
        }
    }

    for (let i = 0; i < n; i++) {
        nums1[m + i] = nums2[i];
    }

    return nums1;
}

// - Driver code
console.log(mergeSortArray3([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3)); // Output - [ 1, 2, 2, 3, 5, 6 ]
console.log(mergeSortArray2([1], 1, [], 0)); // Output - [1]
console.log(mergeSortArray1([0], 0, [1], 1)); // Output - [1]