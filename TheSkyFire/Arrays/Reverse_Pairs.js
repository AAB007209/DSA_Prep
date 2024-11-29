// - Problem Description (Leetcode: 493. Reverse Pairs)

// Link - https://leetcode.com/problems/reverse-pairs/description

/*
Given an integer array nums, return the number of reverse pairs in the array.

A reverse pair is a pair (i, j) where:

-> 0 <= i < j < nums.length and
-> nums[i] > 2 * nums[j].
*/

// - Bruteforce Approach
// Time Complexity - O(N^2)
// Space Complexity - O(1)

function reversePairs1(nums) {
    let count = 0, n = nums.length;
    for(let i=0; i<n; i++){
        for(let j=i+1; j<n; j++){
            if(nums[i] > 2 * nums[j]){
                count++;
            }
        }
    }
    return count;
}

// - Optimal Approach
// Time Complexity - O(N * Log N)
// Space Complexity - O(N)

function merge(nums, low, mid, high){
    let temp = [];
    let left = low, right = mid+1;

    while(left <= mid && right <= high){
        if(nums[left] < nums[right]){
            temp.push(nums[left]);
            left++;
        }else{
            temp.push(nums[right]);
            right++;
        }
    }

    while(left <= mid){
        temp.push(nums[left]);
        left++;
    }

    while(right <= high){
        temp.push(nums[right]);
        right++;
    }

    for(let i=low; i<=high; i++){
        nums[i] = temp[i - low];
    }
}

function countPairs(nums, low, mid, high){
    let cnt = 0;
    let right = mid + 1;
    for(let i=low; i<=mid; i++){
        while(right <= high && nums[i] > 2 * nums[right]) right++;
        cnt += right - (mid + 1);
    }
    return cnt;
}

function mergeSort(nums, low, high){
    let count = 0;
    if(low >= high) return count;

    let mid = Math.floor((low + high)/2);

    count += mergeSort(nums, low, mid);
    count += mergeSort(nums, mid+1, high);
    count += countPairs(nums, low, mid, high);
    merge(nums, low, mid, high);
    return count;
}

function reversePairs2(nums){
    return mergeSort(nums, 0, nums.length-1);
}

// - Driver code for Bruteforce
console.log(reversePairs1([1, 3, 2, 3, 1])); // 2
console.log(reversePairs1([2, 4, 3, 5, 1])); // 3
console.log(reversePairs1([1, 2, 3, 4, 6, 5])); // 0

console.log("\n")
// - Driver code for Optimal Solution
console.log(reversePairs2([1, 3, 2, 3, 1])); // 2
console.log(reversePairs2([2, 4, 3, 5, 1])); // 3
console.log(reversePairs2([1, 2, 3, 4, 6, 5])); // 0
console.log(reversePairs2([1, 6, 2, 10, 4])); // 2