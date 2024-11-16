// - Problem Description (Leetcode: 18. 4Sum)
// Link - https://leetcode.com/problems/4sum/description

/*
Given an array nums of n integers, return an array of all the unique quadruplets [nums[a], nums[b], nums[c], nums[d]] such that:

* 0 <= a, b, c, d < n
* a, b, c, and d are distinct.
* nums[a] + nums[b] + nums[c] + nums[d] == target

You may return the answer in any order.
*/

// - Bruteforce Approach
// Time Complexity - O(N^4)
// Space Complexity - O(N^4)

function fourSum1(nums, target) {
    let n = nums.length;
    let set = new Set();

    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            for (let k = j + 1; k < n; k++) {
                for (let l = k + 1; l < n; l++) {
                    let sum = nums[i] + nums[j] + nums[k] + nums[l];

                    if (sum === target) {
                        let temp = [nums[i], nums[j], nums[k], nums[l]];
                        temp.sort((a, b) => a - b);
                        set.add(temp);
                    }
                }
            }
        }
    }

    let ans = Array.from(set);
    return ans;
}

// - Better Approach
// Time Complexity - O(N^3)
// Space Complexity - O(N^4)

function fourSum2(nums, target) {
    let n = nums.length;
    let set = new Set();

    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            let hashset = new Set();
            for (let k = j + 1; k < n; k++) {
                let sum = nums[i] + nums[j];
                sum += nums[k];
                let fourth = target - sum;
                if (hashset.has(fourth)) {
                    let temp = [nums[i], nums[j], nums[k], fourth];
                    temp.sort((a, b) => a - b);
                    set.add(temp);
                }
                hashset.add(nums[k]);
            }
        }
    }

    let ans = Array.from(set);
    return ans;
}

// - Optimal Approach
// Time Complexity - O(N^3)
// Space Complexity - O(1)

function fourSum3(nums, target) {
    let n = nums.length;
    let ans = [];

    nums.sort((a, b) => a - b);

    for (let i = 0; i < n; i++) {
        // avoid duplicates for i
        if (i > 0 && nums[i] === nums[i - 1]) continue;

        for (let j = i + 1; j < n; j++) {
            // avoid duplicates for j
            if (j > i + 1 && nums[j] === nums[j - 1]) continue;

            let k = j + 1;
            let l = n - 1;

            while (k < l) {
                let sum = nums[i] + nums[j] + nums[k] + nums[l];
                if (sum === target) {
                    let temp = [nums[i], nums[j], nums[k], nums[l]];
                    ans.push(temp);
                    k++;
                    l--;

                    // skip duplicates for k
                    while (k < l && nums[k] === nums[k - 1]) k++;

                    // skip duplicates for l
                    while (k < l && nums[l] === nums[l + 1]) l--;
                } else if (sum < target) {
                    k++;
                } else {
                    l--;
                }
            }
        }
    }

    return ans;
}

// - Driver code

console.log(fourSum1([1, 0, -1, 0, -2, 2], 0));
console.log(fourSum2([4, 3, 3, 4, 4, 2, 1, 2, 1, 1], 9));
console.log(fourSum3([-3, -1, 0, 2, 4, 5], 0));
console.log(fourSum3([2, 2, 2, 2, 2], 8));

/*
Outputs of the above:

Output 1 : [ [ -1, 0, 0, 1 ], [ -2, -1, 1, 2 ], [ -2, 0, 0, 2 ] ]

Output 2 : [
  [ 1, 1, 3, 4 ], [ 1, 1, 3, 4 ],
  [ 1, 1, 3, 4 ], [ 1, 1, 3, 4 ],
  [ 1, 2, 2, 4 ], [ 1, 2, 2, 4 ],
  [ 1, 2, 2, 4 ], [ 1, 2, 3, 3 ],
  [ 1, 2, 3, 3 ], [ 1, 2, 3, 3 ],
  [ 1, 2, 3, 3 ], [ 1, 1, 3, 4 ],
  [ 1, 1, 3, 4 ], [ 1, 1, 3, 4 ],
  [ 1, 1, 3, 4 ], [ 1, 1, 3, 4 ],
  [ 1, 1, 3, 4 ], [ 1, 1, 3, 4 ],
  [ 1, 1, 3, 4 ], [ 1, 2, 2, 4 ],
  [ 1, 2, 2, 4 ], [ 1, 2, 2, 4 ],
  [ 1, 2, 2, 4 ], [ 1, 2, 2, 4 ],
  [ 1, 2, 2, 4 ]
]

Output 3 : [ [ -3, -1, 0, 4 ] ]

Output 4 : [ [ 2, 2, 2, 2 ] ]

*/