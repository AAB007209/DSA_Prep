// Problem Description (Leetcode: 605. Can Place Flowers)

/*
You have a long flowerbed in which some of the plots are planted, and some are not. However, flowers cannot be planted in adjacent plots.

Given an integer array flowerbed containing 0's and 1's, where 0 means empty and 1 means not empty, and an integer n, 
return true if n new flowers can be planted in the flowerbed without violating the no-adjacent-flowers rule and false otherwise
*/

// Bruteforce Approach (Using Backtracking) [To be learnt later]
// Time Complexity - O(combinations(m, n) * n)
// Space Complexity - O(N)

// Optimal Approach
// Time Complexity - O(N)
// Space Complexity - O(1)

function canPlaceFlowers(flowerbed, n) {
    let i = 0;
    let len = flowerbed.length;

    while (i < len) {
        if (
            flowerbed[i] === 0 &&
            (i === 0 || flowerbed[i - 1] === 0) &&
            (i === len - 1 || flowerbed[i + 1] === 0)
        ) {
            flowerbed[i] = 1; // Plant flower
            n--;              // One less to plant
            i += 2;           // Skip next spot
        } else {
            i += 1;           // Move to next spot
        }
    }

    return n <= 0;
}

// Driver code
console.log(canPlaceFlowers([0, 0, 0, 0, 0], 5));
console.log(canPlaceFlowers([1, 0, 0, 0, 1], 1));
console.log(canPlaceFlowers([1, 0, 0, 0, 1], 2));