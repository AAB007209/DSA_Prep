// - Problem Description (Leetcode: Minimum Number of days to make M bouquets)

// Link - https://leetcode.com/problems/minimum-number-of-days-to-make-m-bouquets/description

/*
You are given an integer array bloomDay, an integer m and an integer k.
You want to make m bouquets. To make a bouquet, you need to use k adjacent flowers from the garden.
The garden consists of n flowers, the ith flower will bloom in the bloomDay[i] and then can be used in exactly one bouquet.
Return the minimum number of days you need to wait to be able to make m bouquets from the garden. If it is impossible to make m bouquets return -1.
*/

// - Bruteforce Approach
// Time Complexity - O((max(arr) - min(arr) + 1) * N)
// Space Complexity - O(1)
function possible(bloomDay, day, m, k) {
    let count = 0;
    let n = bloomDay.length;
    let bouquets = 0;

    for (let i = 0; i < n; i++) {
        if (bloomDay[i] <= day) {
            count++;
        } else {
            bouquets += Math.floor(count / k);
            count = 0;
        }
    }
    bouquets += Math.floor(count / k);
    return bouquets >= m;
}

function minDays1(bloomDay, m, k) {
    let val = m * k;
    let n = bloomDay.length;
    if (val > n) return -1;

    let mini = Math.min(...bloomDay);
    let maxi = Math.max(...bloomDay);

    for (let i = mini; i <= maxi; i++) {
        if (possible(bloomDay, i, m, k)) {
            return i;
        }
    }
    return -1;
}

// Optimal Approach
// Time Complexity - O(log(max(arr) - min(arr) + 1) * N)
// Space Complexity - O(1)

function minDays2(bloomDay, m, k) {
    let val = m * k;
    let n = bloomDay.length;
    if (val > n) return -1;

    let mini = Math.min(...bloomDay);
    let maxi = Math.max(...bloomDay);

    let low = mini, high = maxi;

    while (low <= high) {
        let mid = (low + high) >> 1;
        if (possible(bloomDay, mid, m, k)) {
            high = mid - 1;
        } else {
            low = mid + 1;
        }
    }

    return low;
}

// - Driver code
// Bruteforce
console.log(minDays1([1, 10, 3, 10, 2], 3, 1));
console.log(minDays1([1, 10, 3, 10, 2], 3, 2));
console.log(minDays1([7, 7, 7, 7, 12, 7, 7], 2, 3));

// Optimal
console.log(minDays1([1, 10, 3, 10, 2], 3, 1));
console.log(minDays1([1, 10, 3, 10, 2], 3, 2));
console.log(minDays1([7, 7, 7, 7, 12, 7, 7], 2, 3));
