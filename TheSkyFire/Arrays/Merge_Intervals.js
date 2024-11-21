// - Problem Description (Leetcode: 56. Merge Intervals)

// Link - https://leetcode.com/problems/merge-intervals

/*
Given an array of intervals where intervals[i] = [starti, endi], merge all overlapping intervals, and return an array of the non-overlapping intervals that cover all the intervals in the input.
*/

// - Bruteforce Approach
// Time Complexity - O(2N + N*logN)
// Space Complexity - O(N)

function mergeIntervals1(intervals) {
    let n = intervals.length;
    intervals.sort((a, b) => {
        if (a[0] !== b[0]) {
            return a[0] - b[0];
        }

        return a[1] - b[1];
    });

    let ans = [];

    for (let i = 0; i < n; i++) {
        let start = intervals[i][0];
        let end = intervals[i][1];

        if (ans.length && end <= ans[ans.length - 1][1]) {
            continue;
        }

        for (let j = i + 1; j < n; j++) {
            if (intervals[j][0] <= end) {
                end = Math.max(end, intervals[j][1]);
            } else {
                break;
            }
        }
        ans.push([start, end]);
    }

    return ans;
}

// - Optimal Solution
// Time Complexity - O(N + N*logN)
// Space Complexity - O(N)

function mergeIntervals2(intervals) {
    let n = intervals.length;
    intervals.sort((a, b) => {
        if (a[0] !== b[0]) {
            return a[0] - b[0];
        }

        return a[1] - b[1];
    });

    let ans = [];

    for (let i = 0; i < n; i++) {
        if (!ans.length || intervals[i][0] > ans[ans.length - 1][1]) {
            ans.push(intervals[i]);
        }
        else {
            ans[ans.length - 1][1] = Math.max(ans[ans.length - 1][1], intervals[i][1]);
        }
    }

    return ans;
}

// - Driver Code
console.log(mergeIntervals1([[15, 18], [2, 6], [2, 4], [1, 3], [8, 10]])); // [ [ 1, 6 ], [ 8, 10 ], [ 15, 18 ] ]
console.log(mergeIntervals2([[1, 4], [4, 5], [5, 10]])); // [ [ 1, 10 ] ]
console.log(mergeIntervals2([[1, 2], [3, 4], [5, 6]])); // [ [1, 2], [3, 4], [5, 6] ]


/*
-> Learning
- How to sort with second element when first one is equal in pairs.

    intervals.sort((a, b) => {
        if (a[0] !== b[0]) {
            return a[0] - b[0];
        }
        return a[1] - b[1];
    });
*/