// - Problem Description (Coding Ninjas: Painter's Parition)

// Link - https://www.naukri.com/code360/problems/painter-s-partition-problem_1089557

/*
Given an array/list of length ‘n’, where the array/list represents the boards and each element of the given array/list represents the length of each board. Some ‘k’ numbers of painters are available to paint these boards. Consider that each unit of a board takes 1 unit of time to paint.

You are supposed to return the area of the minimum time to get this job done of painting all the ‘n’ boards under a constraint that any painter will only paint the continuous sections of boards.
*/

// - Bruteforce Approach (Linear Search)
// Time Complexity - O(N * (sum(nums[])-max(nums[])+1))
// Space Complexity - O(1)

// - Optimaal Approach (Binary Search)
// Time Complexity - O(N * log(sum(nums[])-max(nums[])+1))
// Space Complexity - O(1)

var findLargestMinDistance = function (boards, k) {
    function helper(arr, k) {
        let n = arr.length;
        let subCount = 1, subSum = 0;
        for (let i = 0; i < n; i++) {
            if (subSum + arr[i] <= k) {
                subSum += arr[i];
            } else {
                subCount++;
                subSum = arr[i];
            }
        }
        return subCount;
    }

    let m = boards.length;
    if (k > m) return -1;
    let low = Math.max(...boards);
    let high = boards.reduce((a, b) => a + b, 0);

    // - Linear Approach
    // for(let i=low; i<=high; i++){
    //     if(helper(boards, i) === k){
    //         return i;
    //     }
    // }

    // - Binary Approach
    while (low <= high) {
        let mid = (low + high) >> 1;

        if (helper(boards, mid) <= k) {
            high = mid - 1;
        } else {
            low = mid + 1;
        }
    }

    return low;
};

// - Driver code
console.log(findLargestMinDistance([7, 2, 5, 10, 8], 2)); // 18
console.log(findLargestMinDistance([1, 2, 3, 4, 5], 2)); // 9
console.log(findLargestMinDistance([2, 1, 5, 6, 2, 3], 2)); // 11
console.log(findLargestMinDistance([10, 20, 30, 40], 2)); // 60