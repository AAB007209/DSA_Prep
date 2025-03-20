// - Problem Description (Leetcode: 2149. Rearrange Array Elements by Sign)

// Link - https://leetcode.com/problems/rearrange-array-elements-by-sign/

/*
You are given a 0-indexed integer array nums of even length consisting of an equal number of positive and negative integers.

You should return the array of nums such that the the array follows the given conditions:
1. Every consecutive pair of integers have opposite signs.
2. For all integers with the same sign, the order in which they were present in nums is preserved.
3. The rearranged array begins with a positive integer.

Return the modified array after rearranging the elements to satisfy the aforementioned conditions.
*/

// - Bruteforce Approach [Extra Space usage]
// Time Complexity - O(N)
// Space Complexity - O(N)

function rearrangeArray1(nums) {
    const n = nums.length;
    let pos = new Array(n/2).fill(0);
    let neg = new Array(n/2).fill(0);

    let j = 0, k = 0;  
    for(let i=0; i<n; i++){
        if(nums[i] > 0){
            pos[j] = nums[i];
            j++;
        }else if(nums[i] < 0){
            neg[k] = nums[i];
            k++;
        }
    }

    j = 0;
    for(let i=0; i<n; i+=2){
        nums[i] = pos[j];
        nums[i+1] = neg[j];   
        j++;
    }

    return nums;
}

function rearrangeArray2(nums){
    const n = nums.length;
    let posIndex = 0, negIndex = 1;
    let result = new Array(n);

    for (let i = 0; i < n; i++) {
        if (nums[i] > 0) {
            result[posIndex] = nums[i];
            posIndex += 2;
        } else {
            result[negIndex] = nums[i];
            negIndex += 2;
        }
    }

    // Copy back to nums to keep in-place modification
    for (let i = 0; i < n; i++) {
        nums[i] = result[i];
    }

    return nums;
}

// Optimal Solution
// Time Complexity - O(N)
// Space Complexity - O(1)

function rearrangeArray3(nums){
    const n = nums.length;
    let posIndex = 0, negIndex = 1;

    while (posIndex < n && negIndex < n) {
        // Move posIndex to the next misplaced positive element
        while (posIndex < n && nums[posIndex] > 0) {
            posIndex += 2;
        }

        // Move negIndex to the next misplaced negative element
        while (negIndex < n && nums[negIndex] < 0) {
            negIndex += 2;
        }

        // Swap the misplaced positive and negative elements
        if (posIndex < n && negIndex < n) {
            [nums[posIndex], nums[negIndex]] = [nums[negIndex], nums[posIndex]];
        }
    }

    return nums;
}

// -Driver code
console.log(rearrangeArray1([3,1,-2,-5,2,-4]));
console.log(rearrangeArray1([-1,1]));
console.log(rearrangeArray1([1,-2,-4,5,9,-10,-11,8]));

console.log(rearrangeArray2([3,1,-2,-5,2,-4]));
console.log(rearrangeArray2([-1,1]));
console.log(rearrangeArray2([1,-2,-4,5,9,-10,-11,8]));

console.log(rearrangeArray3([3,1,-2,-5,2,-4]));
console.log(rearrangeArray3([-1,1]));
console.log(rearrangeArray3([1,-2,-4,5,9,-10,-11,8]));
