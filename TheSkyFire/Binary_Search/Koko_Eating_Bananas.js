// - Problem Description (Leetcode: 875. Koko Eating Bananas)

// Link - https://leetcode.com/problems/koko-eating-bananas/

/*
Koko loves to eat bananas. There are n piles of bananas, the ith pile has piles[i] bananas. The guards have gone and will come back in h hours.

Koko can decide her bananas-per-hour eating speed of k. Each hour, she chooses some pile of bananas and eats k bananas from that pile. If the pile has less than k bananas, she eats all of them instead and will not eat any more bananas during this hour.

Koko likes to eat slowly but still wants to finish eating all the bananas before the guards return.

Return the minimum integer k such that she can eat all the bananas within h hours.
*/

// - Bruteforce Approach
// Time Complexity - O(N^2)
// Space Complexity - O(1)

function calculateTotalHours(piles, hourly){
    let totalH = 0;
    let n = piles.length;

    for(let i=0; i<n; i++){
        totalH += Math.ceil(piles[i] / hourly);
    }
    return totalH;
}

function minEatingSpeed1(piles, h) {
    let maxi = Math.max(...piles);

    for(let i=1; i<=maxi; i++){
        let reqTime = calculateTotalHours(piles, i);
        if(reqTime <= h){
            return i;
        }
    }
    return maxi;
}

// - Optimal Approach
// Time Complexity - O(N * log N)
// Space Complexity - O(1)

function minEatingSpeed2(piles, h) {
    let maxi = Math.max(...piles);
    let low = 1, high = maxi;
    while(low <= high){
        let mid = (low + high) >> 1;
        let totalH = calculateTotalHours(piles, mid);
        if(totalH <= h) high = mid - 1;
        else low = mid+1;
    }
    return low;
}

// - Driver code
// Bruteforce
// console.log(minEatingSpeed1([7, 15, 6, 4], 8));
// console.log(minEatingSpeed1([3, 6, 7, 11], 8));
// console.log(minEatingSpeed1([30,11,23,4,20], 5));
// console.log(minEatingSpeed1([30,11,23,4,20], 6));

// Optimal
console.log(minEatingSpeed2([7, 15, 6, 4], 8));
console.log(minEatingSpeed2([3, 6, 7, 11], 8));
console.log(minEatingSpeed2([30,11,23,4,20], 5));
console.log(minEatingSpeed2([30,11,23,4,20], 6));