// Problem Description (Leetcode: 1431. Kids with the Greatest Number of Candies)

/*
There are n kids with candies. You are given an integer array candies, where each candies[i] represents the number of candies the ith kid has, and an integer extraCandies, denoting the number of extra candies that you have.

Return a boolean array result of length n, where result[i] is true if, after giving the ith kid all the extraCandies, they will have the greatest number of candies among all the kids, or false otherwise.

Note that multiple kids can have the greatest number of candies.
*/

// Bruteforce Approach
// Time Complexity - O(N*N)
// Space Complexity - O(N)

function greatestNumberOfCandies(candies, extraCandies) {
    const n = candies.length;
    let boolArray = new Array(n).fill(false);
    for (let i = 0; i < n; i++) {
        maxi = candies[i] + extraCandies;
        flag = true;

        for (let j = 0; j < n; j++) {
            if (maxi < candies[j]) {
                flag = false;
                break;
            }
        }
        boolArray[i] = flag;
    }

    return boolArray;
}

// Better Approach
// Time Complexity - O(N)
// Space Complexity - O(N)

function greatestNumberOfCandies2(candies, extraCandies) {
    let maxi = Math.max(...candies);
    const n = candies.length;
    let boolArray = new Array(n).fill(false);

    for (let i = 0; i < n; i++) {
        if (candies[i] + extraCandies >= maxi) {
            boolArray[i] = true;
        }
    }
    return boolArray;
}

// Driver code
// Bruteforce Approach
console.log(greatestNumberOfCandies([2, 3, 5, 1, 3], 3));
console.log(greatestNumberOfCandies([4, 2, 1, 1, 2], 1));
console.log(greatestNumberOfCandies([12, 1, 12], 10));

// Better Approach
console.log(greatestNumberOfCandies2([2, 3, 5, 1, 3], 3));
console.log(greatestNumberOfCandies2([4, 2, 1, 1, 2], 1));
console.log(greatestNumberOfCandies2([12, 1, 12], 10));
