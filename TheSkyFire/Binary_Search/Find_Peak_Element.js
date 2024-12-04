// - Problem Description (Leetcode: 162. Find Peak element)

// Link - https://leetcode.com/problems/find-peak-element

/*
A peak element is an element that is strictly greater than its neighbors.
Given a 0-indexed integer array nums, find a peak element, and return its index. If the array contains multiple peaks, return the index to any of the peaks.
You may imagine that nums[-1] = nums[n] = -∞. In other words, an element is always considered to be strictly greater than a neighbor that is outside the array.

You must write an algorithm that runs in O(log n) time.
*/

// - Bruteforce Approach (linear Traversal)
// Time Complexity - O(N)
// Space Complexity - O(1)

function findPeakElement1(nums) {
    let n = nums.length;
    if(n === 0) return -1;
    if(n === 1) return 0;

    if (nums[0] > nums[1]) return 0;       // First element is a peak
    if (nums[n - 1] > nums[n - 2]) return n - 1; // Last element is a peak

    for(let i = 1; i<n-1; i++){
        if(nums[i] > nums[i-1] && nums[i] > nums[i+1]){
            return i;
        }
    }
    return -1;
}

// - Optimal Approach (Binary Search)
// Time Complexity - O(Log N)
// Space Complexity - O(1)

function findPeakElement2(nums) {
    let n = nums.length;
    if(n === 0) return -1;
    if(n === 1) return 0;

    if (nums[0] > nums[1]) return 0; // First element is a peak
    if (nums[n - 1] > nums[n - 2]) return n - 1; // Last element is a peak

    let low = 1, high = n-2;
    while(low <= high)
    {
        let mid = (low + high) >> 1;

        if(nums[mid-1] < nums[mid] && nums[mid] > nums[mid+1]){
            return mid;
        }

        if(nums[mid] > nums[mid-1]){
            low = mid + 1;
        }
        else high = mid - 1;
    }

    return -1;
}

// - Driver code
// Bruteforce
console.log(findPeakElement1([1, 2, 3, 1])); // Output: 2
console.log(findPeakElement1([1, 2, 1, 3, 5, 6, 4])); // Output: 1 or 5
console.log(findPeakElement1([1])); // Output: 0
console.log(findPeakElement1([2, 1])); // Output: 0

// Optimal (Using Binary Search)
console.log(findPeakElement2([1, 2, 3, 1])); // Output: 2
console.log(findPeakElement2([1, 2, 1, 3, 5, 6, 4])); // Output: 1 or 5
console.log(findPeakElement2([1])); // Output: 0
console.log(findPeakElement2([2, 1])); // Output: 0