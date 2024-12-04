// - Problem Description (Leetcode: 153. Find the Minimum in Rotated Sorted Array)

// Link - https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/description/

/*
Given the sorted rotated array nums of unique elements, return the minimum element of this array.

You must write an algorithm that runs in O(log n) time.
*/

// - Bruteforce Approach (linear Search)
// Time Complexity - O(N)
// Space Complexity - O(1)

function findMin(nums) {
    let n = nums.length;
    if(n === 0) return -1;
    if(n === 1) return nums[0];

    let mini = nums[0];
    for(let i=1; i<n; i++){
        if(nums[i] < mini){
            mini = nums[i];
        }
    }
    return mini;
}

// - Optimal Approach (Binary Search)
// Time Complexity - O(log N)
// Space Complexity - O(1)

function findMin2(nums){
    let n = nums.length;
    let low = 0, high = n-1, mini=Number.MAX_SAFE_INTEGER;

    if(n === 1){
        return nums[0]
    }
    if(nums[0] < nums[n-1]){
        return nums[0]
    }

    while(low <= high)
    {
        let mid = (low + high) >> 1;

        if(nums[low] <= nums[mid]){
            mini = Math.min(mini, nums[low]);
            low = mid+1;
        }
        else{
            mini = Math.min(mini, nums[mid]);
            high = mid-1;
        }
    }
    return mini;
}

// - Driver code
// Bruteforce
console.log(findMin([3,4,5,1,2])); // Output -> 1
console.log(findMin([4,5,6,7,0,1,2])); // Output -> 0
console.log(findMin([11,13,15,17])); // Output -> 11

// Optimal
console.log(findMin2([3,4,5,1,2])); // Output -> 1
console.log(findMin2([4,5,6,7,0,1,2])); // Output -> 0
console.log(findMin2([11,13,15,17])); // Output -> 11
console.log(findMin2([7,8,9,2,3,4])); // Output -> 2