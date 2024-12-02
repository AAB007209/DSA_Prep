// - Problem Description (GFG: Floor in a Sorted Array)

// Link - https://www.geeksforgeeks.org/problems/floor-in-a-sorted-array-1587115620/1

/*
Given a sorted array arr[] (with unique elements) and an integer k, find the index (0-based) of the largest element in arr[] that is less than or equal to k.
This element is called the "floor" of k. If such an element does not exist, return -1.
*/

// - Bruteforce Approach (Linear Search)
// Time Complexity - O(N)
// Space Complexity - O(1)

function findFloor1(nums, k) {
    let n = nums.length, potentialFloor = -1;

    if (k === 0 && n !== 0 && nums[0] > 0) return -1;

    for (let i = 0; i < n; i++) {
        if (nums[i] === k) return i;
        if (nums[i] < k) {
            potentialFloor = i;
        } else {
            break;
        }
    }
    return potentialFloor;
}

// - Optimal Approach (Binary Search)
// Time Complexity - O(Log N)
// Space Complexity - O(1)

function findFloor2(nums, k) {
    let n = nums.length;
    let left = 0, right = n - 1;
    let potentialMax = -1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);

        if (nums[mid] === k) {
            return mid;
        } else if (nums[mid] < k) {
            potentialMax = mid;
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return potentialMax;
}

// - Driver code
console.log(findFloor2([1, 2, 8, 10, 11, 12, 19], 0));
console.log(findFloor2([1, 2, 8, 10, 11, 12, 19], 5));
console.log(findFloor2([1, 2, 8], 1));

console.log(findFloor1([1, 2, 8, 10, 11, 12, 19], 0));
console.log(findFloor1([1, 2, 8, 10, 11, 12, 19], 5));
console.log(findFloor1([1, 2, 8], 1));