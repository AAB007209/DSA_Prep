// - Problem Description (GFG: K-th element of two Arrays)

// Link - https://www.geeksforgeeks.org/problems/k-th-element-of-two-sorted-array1317/1

/*
Given two sorted arrays a[] and b[] and an element k, the task is to find the element that would be at the kth position of the combined sorted array.
*/

// - Bruteforce Approach - Using Sorting the array and using extra space
// Time Complexity - O(N^2)
// Space Complexity - O(N)

function kthElement1(a, b, k){
    let m = a.length;
    let n = b.length;

    let result = [];

    let i=0, j=0;
    while (i < m && j < n) {
        if (a[i] < b[j]) result.push(a[i++]);
        else result.push(b[j++]);
    }

    while (i < m) result.push(a[i++]);
    while (j < n) result.push(b[j++]);
    return result[k - 1];
}

// - Better Approach - (Two Pointer Approach)
// Time Complexity - O(N + M)
// Space Complexity - O(1)

function kthElement2(a, b, k) {
    let element = -1;
    let low = 0, high = 0;
    let count = 0;

    while(low < a.length && high < b.length){
        if(a[low] < b[high]){
            if(count === k-1) {
                element = a[low];
            }
            low++;
        }else{
            if(count === k-1) {
                element = b[high];
            }
            high++;
        }
        count++;
    }

    while(low <= a.length){
        if(count === k-1) {
            element = a[low];
        }
        low++;
        count++;
    }

    while(high <= b.length){
        if(count === k-1) {
            element = b[high];
        }
        high++;
        count++;
    }
    return element;
}

// Optimal Approach
// Time Complexity - O(log(min(n,m)))
// Space Complexity - O(1)

function kthElement3(a, b, k){
    let m = a.length;
    let n = b.length;

    if(m > b) return kthElement3(b, a, k);

    let left = k; // length of left half

    let low = Math.max(0, k - n), high = Math.min(k, m);
    while (low <= high) {
        let mid1 = Math.floor((low + high) / 2);
        let mid2 = left - mid1;
        // calculate l1, l2, r1, and r2
        let l1 = Number.MIN_SAFE_INTEGER, l2 = Number.MIN_SAFE_INTEGER;
        let r1 = Number.MAX_SAFE_INTEGER, r2 = Number.MAX_SAFE_INTEGER;
        if (mid1 < m) r1 = a[mid1];
        if (mid2 < n) r2 = b[mid2];
        if (mid1 - 1 >= 0) l1 = a[mid1 - 1];
        if (mid2 - 1 >= 0) l2 = b[mid2 - 1];

        if (l1 <= r2 && l2 <= r1) {
            return Math.max(l1, l2);
        }

        // eliminate the halves:
        else if (l1 > r2) high = mid1 - 1;
        else low = mid1 + 1;
    }
    return 0;
}

// - Driver code
console.log(kthElement1([2,3,6,7,9], [1,4,8,10], 5));
console.log(kthElement2([2,3,6,7,9], [1,4,8,10], 5));
console.log(kthElement3([2,3,6,7,9], [1,4,8,10], 5));


console.log(kthElement1([100, 112, 256, 349, 770], [72,86,113,119,265,445,892], 7));
console.log(kthElement2([100, 112, 256, 349, 770], [72,86,113,119,265,445,892], 7));
console.log(kthElement3([100, 112, 256, 349, 770], [72,86,113,119,265,445,892], 7));

