// - Problem Description (Leetcode: 1011: Capacity to Ship Packages within D Days)

// Link - https://leetcode.com/problems/capacity-to-ship-packages-within-d-days/description/

/*
A conveyor belt has packages that must be shipped from one port to another within days days.
The ith package on the conveyor belt has a weight of weights[i]. Each day, we load the ship with packages on the conveyor belt (in the order given by weights). We may not load more weight than the maximum weight capacity of the ship.
Return the least weight capacity of the ship that will result in all the packages on the conveyor belt being shipped within days days.
*/

// - Bruteforce Approach - Linear Search
// Time Complexity - O((Sum(weights) - max(weights) + 1) * N)
// Space Complexity - O(1)

function calculateDays(weights, capacity) {
    let days = 1, load = 0, n = weights.length;
    for (let i = 0; i < n; i++) {
        if (load + weights[i] > capacity) {
            days += 1;
            load = weights[i];
        } else {
            load += weights[i];
        }
    }
    return days;
}

function shipWithinDays1(weights, days) {
    let maxi = Math.max(...weights);
    let sum = weights.reduce((acc, weight) => acc + weight, 0);

    for (let i = maxi; i <= sum; i++) {
        if (calculateDays(weights, i) <= days) {
            return i;
        }
    }
    return -1;
}

// - Optimal Approach - Binary Search on Answers
// Time Complexity - O(log(Sum(weights) - max(weights) + 1) * N)
// Space Complexity - O(1)

function shipWithinDays2(weights, days) {
    let low = Math.max(...weights);
    let high = weights.reduce((acc, weight) => acc + weight, 0);

    while (low <= high) {
        let mid = (low + high) >> 1;
        let reqDays = calculateDays(weights, mid);

        if (reqDays <= days) {
            high = mid - 1;
        } else {
            low = mid + 1;
        }
    }
    return low;
}

// - Driver Code
console.log(shipWithinDays1([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 5)); // 15
console.log(shipWithinDays1([3, 2, 2, 4, 1, 4], 3)); // 6
console.log(shipWithinDays1([1, 2, 3, 1, 1], 4)); // 3

// Optimal
console.log(shipWithinDays2([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 5)); // 15
console.log(shipWithinDays2([3, 2, 2, 4, 1, 4], 3)); // 6
console.log(shipWithinDays2([1, 2, 3, 1, 1], 4)); // 3