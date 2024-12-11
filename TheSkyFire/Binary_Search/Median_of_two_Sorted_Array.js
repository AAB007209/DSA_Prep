// - Problem Description (Leetcode: 4. Median of two Sorted Array)

// Link - https://leetcode.com/problems/median-of-two-sorted-arrays/description

/*
Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.

The overall run time complexity should be O(log (m+n))
*/

// - Bruteforce Approach
// Time Complexity - O(M + N) // M and N being the Sizes of Arrays given
// Space Complexity - O(M + N)

function findMedianSortedArrays1(nums1, nums2) {
    let n1 = nums1.length, n2 = nums2.length;

    let result = [];

    let i=0, j=0;
    while(i < n1 && j < n2){
        if (nums1[i] < nums2[j]) result.push(nums1[i++]);
        else result.push(nums2[j++]);
    }

    // Copying the left out elements
    while (i < n1) result.push(nums1[i++]);
    while (j < n2) result.push(nums2[j++]);

    let n = n1 + n2;
    if (n % 2 === 1) {
        return result[Math.floor(n / 2)];
    }

    const median = (result[n / 2] + result[(n / 2) - 1]) / 2.0;
    return median;
}   

// Better Approach
// Time Complexity - O(M + N) // M and N being the Sizes of Arrays given
// Space Complexity - O(1)

function findMedianSortedArrays2(a, b){
    // size of two given arrays:
    const n1 = a.length, n2 = b.length;
    const n = n1 + n2; // total size
    // required indices:
    const ind2 = Math.floor(n / 2);
    const ind1 = ind2 - 1;
    let cnt = 0;
    let ind1el = -1, ind2el = -1;

    // apply the merge step:
    let i = 0, j = 0;
    while (i < n1 && j < n2) {
        if (a[i] < b[j]) {
            if (cnt === ind1) ind1el = a[i];
            if (cnt === ind2) ind2el = a[i];
            cnt++;
            i++;
        }
        else {
            if (cnt === ind1) ind1el = b[j];
            if (cnt === ind2) ind2el = b[j];
            cnt++;
            j++;
        }
    }

    // copy the left-out elements:
    while (i < n1) {
        if (cnt === ind1) ind1el = a[i];
        if (cnt === ind2) ind2el = a[i];
        cnt++;
        i++;
    }
    while (j < n2) {
        if (cnt === ind1) ind1el = b[j];
        if (cnt === ind2) ind2el = b[j];
        cnt++;
        j++;
    }

    // Find the median:
    if (n % 2 === 1) {
        return ind2el;
    }

    return (ind1el + ind2el) / 2.0;
}

// Optimal Approach
// Time Complexity - O(log(min(n,m))) // M and N being the Sizes of Arrays given
// Space Complexity - O(1)

function findMedianSortedArrays3(a, b){
    let n1 = a.length, n2 = b.length;
    // if n1 is bigger swap the arrays:
    if (n1 > n2) return findMedianSortedArrays3(b, a);

    let n = n1 + n2; // total length
    let left = Math.floor((n1 + n2 + 1) / 2); // length of left half
    // apply binary search:
    let low = 0, high = n1;
    while (low <= high) {
        let mid1 = Math.floor((low + high) / 2);
        let mid2 = left - mid1;
        // calculate l1, l2, r1, and r2
        let l1 = Number.MIN_SAFE_INTEGER, l2 = Number.MIN_SAFE_INTEGER;
        let r1 = Number.MAX_SAFE_INTEGER, r2 = Number.MAX_SAFE_INTEGER;
        if (mid1 < n1) r1 = a[mid1];
        if (mid2 < n2) r2 = b[mid2];
        if (mid1 - 1 >= 0) l1 = a[mid1 - 1];
        if (mid2 - 1 >= 0) l2 = b[mid2 - 1];

        if (l1 <= r2 && l2 <= r1) {
            if (n % 2 === 1) return Math.max(l1, l2);
            else return (Math.max(l1, l2) + Math.min(r1, r2)) / 2;
        }

        // eliminate the halves:
        else if (l1 > r2) high = mid1 - 1;
        else low = mid1 + 1;
    }
    return 0; // dummy statement
}

// - Driver code
console.log(findMedianSortedArrays1([1,4,7,10,12], [2,3,6,15])); // 6
console.log(findMedianSortedArrays2([1,4,7,10,12], [2,3,6,15])); // 6
console.log(findMedianSortedArrays3([1,4,7,10,12], [2,3,6,15])); // 6

console.log(findMedianSortedArrays1([100, 112, 256, 349, 770], [72,86,113,119,265,445,892])); // 187.5 
console.log(findMedianSortedArrays2([100, 112, 256, 349, 770], [72,86,113,119,265,445,892])); // 187.5
console.log(findMedianSortedArrays3([100, 112, 256, 349, 770], [72,86,113,119,265,445,892])); // 187.5

