// - Problem Description (Leetcode: 540. Single Element in a Sorted array)

// Link - https://leetcode.com/problems/single-element-in-a-sorted-array/

/*
You are given a sorted array consisting of only integers where every element appears exactly twice, except for one element which appears exactly once.
Return the single element that appears only once.
Your solution must run in O(log n) time and O(1) space.
*/

// - Bruteforce Approach (Using Map)
// Time Complexity - O(N)
// Space Complexity - O(N)

function singleNonDuplicate1(nums) {
    let n = nums.length;
    let mp = new Map();

    for(let i=0; i<n; i++){
        mp.set(nums[i], (mp.get(nums[i]) + 1) || 1); 
    }

    for(let [key, value] of mp){
        if(value === 1){
            return key;
        }
    }
    return -1;
}

// - Brute Approach 2 (Using Normal Traversal)
// Time Complexity - O(N)
// Space Complexity - O(1)

function singleNonDuplicate2(arr) {
    let n = arr.length;
    if (n === 1) return arr[0];

    for (var i = 0; i < n; i++) {
        // Check for first index
        if (i === 0) {
            if (arr[i] !== arr[i + 1])
                return arr[i];
        }
        // Check for last index
        else if (i === n - 1) {
            if (arr[i] !== arr[i - 1])
                return arr[i];
        }
        else {
            if (arr[i] !== arr[i - 1] && arr[i] !== arr[i + 1])
                return arr[i];
        }
    }

    return -1;
}

// - Brute Approach 3 (Using XOR)
// Time Complexity - O(N)
// Space Complexity - O(1)

function singleNonDuplicate3(arr) {
    let n = arr.length;
    if (n === 1) return arr[0];

    let ans = 0;
    // XOR all the elements
    for (let i = 0; i < n; i++) {
        ans = ans ^ arr[i];
    }
    return ans;
}

// Optimal (Using Binary Search)
// Time Complexity - O(Log N)
// Space Complexity - O(1)

function singleNonDuplicate4(arr) {
    let n = arr.length;

    // Edge Cases
    if (n === 1) return arr[0];
    if (arr[0] !== arr[1]) return arr[0];
    if (arr[n - 1] !== arr[n - 2]) return arr[n - 1];

    let low = 1, high = n - 2;
    while (low <= high) {
        let mid = Math.floor((low + high) / 2);

        // If arr[mid] is the single element:
        if (arr[mid] !== arr[mid + 1] && arr[mid] !== arr[mid - 1]) {
            return arr[mid];
        }

        // We are in the left:
        if ((mid % 2 === 1 && arr[mid] === arr[mid - 1])
                || (mid % 2 === 0 && arr[mid] === arr[mid + 1])) {
            // Eliminate the left half:
            low = mid + 1;
        }
        // We are in the right:
        else {
            // Eliminate the right half:
            high = mid - 1;
        }
    }

    return -1;
}

// - Driver code
// Bruteforce 1 (Using Map)
console.log(singleNonDuplicate1([1,1,2,3,3,4,4,8,8]));
console.log(singleNonDuplicate1([3,3,7,7,10,11,11]));
console.log(singleNonDuplicate1([1,2,2,3,3,10,10]));

// Bruteforce 2 (Using Normal Traversal)
console.log(singleNonDuplicate2([1,1,2,3,3,4,4,8,8]));
console.log(singleNonDuplicate2([3,3,7,7,10,11,11]));
console.log(singleNonDuplicate2([1,2,2,3,3,10,10]));

// Bruteforce 3 (Using XOR)
console.log(singleNonDuplicate3([1,1,2,3,3,4,4,8,8]));
console.log(singleNonDuplicate3([3,3,7,7,10,11,11]));
console.log(singleNonDuplicate3([1,2,2,3,3,10,10]));

// Optimal
console.log(singleNonDuplicate4([1,1,2,3,3,4,4,8,8]));
console.log(singleNonDuplicate4([3,3,7,7,10,11,11]));
console.log(singleNonDuplicate4([1,2,2,3,3,10,10]));

