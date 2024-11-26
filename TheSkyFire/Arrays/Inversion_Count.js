// - Problem Description (GFG: Count Inversions)

// Link - https://www.geeksforgeeks.org/problems/inversion-of-array-1587115620/1?utm_source=youtube&utm_medium=collab_striver_ytdescription&utm_campaign=inversion-of-array

/*
Given an array of integers arr[]. Find the Inversion Count in the array.
Two elements arr[i] and arr[j] form an inversion if arr[i] > arr[j] and i < j.

Inversion Count: For an array, inversion count indicates how far (or close) the array is from being sorted. If the array is already sorted then the inversion count is 0.
If an array is sorted in the reverse order then the inversion count is the maximum.
*/

// - Bruteforce Approach
// Time Complexity - O(N^2)
// Space Complexity - O(1)

function inversionCount1(nums) {
    let count = 0;
    let n = nums.length;

    for(let i=0; i<n; i++){
        for(let j=i+1; j<n; j++){
            if(nums[i] > nums[j]){
                count++;
            }
        }
    }
    return count;
}

// - Optimal Solution (Little twist to Merge Sort Algorithm) [YET TO BE DONE]
// Time Complexity - O(N * Log N)
// Space Complexity - O(N)

function merge(nums, low, mid, high){
    let temp = [];
    let left = low;
    let right = mid+1;
    
    let count = 0;

    while(left <= mid && right <= high){
        if(nums[left] <= nums[right]){
            temp.push(nums[left]);
            left++;
        }else{
            temp.push(nums[right]);
            count += (mid - left + 1); // Every element from the condition satisfying element on the right becomes pair. So add all there count.
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

    for (let i = low; i <= high; i++) {
        nums[i] = temp[i - low];
    }

    return count;
}

function mergeSort(nums, low, high){
    let count = 0;
    if(low >= high) return count;

    let mid = Math.floor((low + high) / 2);
    count += mergeSort(nums, low, mid);
    count += mergeSort(nums, mid+1, high);
    count += merge(nums, low, mid, high);

    return count;
}


function inversionCount2(nums){
    return mergeSort(nums, 0, nums.length-1);
}

// - Driver code

// Bruteforce drivers
console.log(inversionCount1([2, 4, 1, 3, 5])); // 3
console.log(inversionCount1([10, 10, 10])); // 0
console.log(inversionCount1([2, 3, 4, 5, 6])); // 0
console.log(inversionCount1([6, 5, 4, 3, 2])); // 10
console.log(inversionCount1([6])); // 0
console.log(inversionCount1([6, 3])); // 1

// Optimal Solution Drivers
console.log(inversionCount2([10, 10, 10])); // 0
console.log(inversionCount2([2, 4, 1, 3, 5])); // 3
console.log(inversionCount2([2, 3, 4, 5, 6])); // 0
console.log(inversionCount2([6, 5, 4, 3, 2])); // 10
console.log(inversionCount2([6])); // 0
console.log(inversionCount2([6, 3])); // 1
