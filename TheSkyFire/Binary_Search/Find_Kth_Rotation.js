// - Problem Description (GFG: Find Kth Rotation)

// Link - https://www.geeksforgeeks.org/problems/rotation4723/1

/*
Given an increasing sorted rotated array arr of distinct integers. The array is right-rotated k times. Find the value of k.
*/

// - Bruteforce Approach (Linear Search)
// Time Complexity - O(N)
// Space Complexity - O(1)

function findKRotation1(arr) {
    let n = arr.length;
    if(n === 0) return -1;
    if(n === 1) return 0;

    let mini = arr[0], minInd = 0;
    for(let i=1; i<n; i++){
        if(arr[i] < mini){
            mini = arr[i];
            minInd = i;
        }
    }
    return minInd;
}

// - Optimal Approach (Binary Search)
// Time Complexity - O(Log N)
// Space Complexity - O(1)

// - Bruteforce Approach (Linear Search)
// Time Complexity - O(N)
// Space Complexity - O(1)

function findKRotation2(nums) {
    let n = nums.length;
    let low = 0, high = n-1, mini=Number.MAX_SAFE_INTEGER, index=-1;

    if(n === 1 || (nums[0] < nums[n-1])){
        return 0;
    }

    while(low <= high)
    {
        let mid = (low + high) >> 1;

        if(nums[low] <= nums[mid]){
            if(nums[low] < mini){
                index = low;
                mini = nums[low];
            }
            low = mid+1;
        }
        else{
            if(nums[mid] < mini){
                index = mid;
                mini = nums[mid];
            }
            high = mid-1;
        }
    }
    return index;
}

// - More Optimized 
function findKRotation3(nums) {
    let n = nums.length;
    let low = 0, high = n - 1;

    if (nums[low] <= nums[high]) {
        return 0;
    }

    while (low <= high) {
        let mid = Math.floor((low + high) / 2);

        // Check if mid is the pivot (smallest element)
        if (nums[mid] > nums[mid + 1]) {
            return mid + 1; // Pivot found
        }
        if (nums[mid] < nums[mid - 1]) {
            return mid; // Pivot found
        }

        if (nums[low] <= nums[mid]) {
            // Left part is sorted, so pivot must be in the right part
            low = mid + 1;
        } else {
            // Right part is sorted, so pivot must be in the left part
            high = mid - 1;
        }
    }

    return 0;
}


// - Driver code
// Bruteforce
console.log(findKRotation1([3,4,5,1,2])); // Output -> 3
console.log(findKRotation1([4,5,6,7,0,1,2])); // Output -> 4
console.log(findKRotation1([11,13,15,17])); // Output -> 0

// Optimal
console.log(findKRotation2([3,4,5,1,2])); // Output -> 3
console.log(findKRotation2([4,5,6,7,0,1,2])); // Output -> 4
console.log(findKRotation2([11,13,15,17])); // Output -> 0
console.log(findKRotation2([7,8,9,2,3,4])); // Output -> 3

// More Optimal
console.log(findKRotation3([3,4,5,1,2])); // Output -> 3
console.log(findKRotation3([4,5,6,7,0,1,2])); // Output -> 4
console.log(findKRotation3([11,13,15,17])); // Output -> 0
console.log(findKRotation3([7,8,9,2,3,4])); // Output -> 3

