// - Problem Description (Leetcode: 229. Majority Element 2)
// Link - https://leetcode.com/problems/majority-element-ii/description

/*
Given an integer array of size n, find all elements that appear more than ⌊ n/3 ⌋ times.
*/

// - Bruteforce Approach
// Time Complexity - O(N^2)
// Space Complexity - O(1)

function majorityElement1(nums) {
    const n = nums.length; // size of the array
    const ls = []; // list of answers

    for (let i = 0; i < n; i++) {
        // selected element is v[i]:
        // checking if v[i] is not already a part of the answer
        if (ls.length == 0 || ls[0] != nums[i]) {
            let cnt = 0;
            for (let j = 0; j < n; j++) {
                // counting the frequency of v[i]
                if (nums[j] == nums[i]) {
                    cnt++;
                }
            }

            // check if frequency is greater than n/3:
            if (cnt > Math.floor(n / 3))
                ls.push(nums[i]);
        }

        // This condition is because in an Array Atmost we will have 2 elements with the condition n/3 satified.
        if (ls.length == 2) break;
    }

    return ls;
}

// - Better Solution
// Time Complexity - O(N)
// Space Complexity - O(N)

function majorityElement2(nums) {
    if (nums.length === 1) {
        return nums;
    }

    let n = nums.length;
    let map = new Map();
    let arr = [];
    for (let i = 0; i < n; i++) {
        map.set(nums[i], (map.get(nums[i]) || 0) + 1);
    }

    let condition = Math.floor(n / 3) + 1;
    for (let [key, value] of map) {
        if (value >= condition) {
            arr.push(key);
        }
    }

    return arr;
}

// - Optimal Solution (Yet to be understood and updated)
// Time Complexity - O(N)
// Space Complexity - O(1)

// - Driver code
console.log(majorityElement1([11, 33, 33, 11, 33, 11])); // [11, 33]
console.log(majorityElement2([3, 2, 3])); // [3]
console.log(majorityElement1([1])); // [1]
console.log(majorityElement2([1, 2])); // [1, 2]