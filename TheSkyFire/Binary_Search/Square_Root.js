// - Problem Description (GFG: Square Root)

// Link - https://www.geeksforgeeks.org/problems/square-root/0

/*
Given an integer n, find the square root of n. If n is not a perfect square, then return the floor value.

Floor value of any number is the greatest Integer which is less than or equal to that number
*/

// - Bruteforce Approach (Linear Search)
// Time Complexity - O(N)   
// Space Complexity - O(1)

function floorSqrt1(n) {
    let ans = 0;

    for (let i = 1; i <= n; i++) {
        let val = i * i;
        if (val <= n) {
            ans = i;
        } else {
            break;
        }
    }
    return ans;
}

// - Optimal Approach (In-built function and Binary Search
// Time Complexity - O(Log N)   
// Space Complexity - O(1)

function floorSqrt2(n) {
    let ans = Math.floor(Math.sqrt(n));
    return ans;
}

// Without using Inbuilt function
function floorSqrt3(n) {
    let low = 1, high = n;

    while (low <= high) {
        let mid = Math.floor((low + high) / 2);
        let val = mid * mid;
        if (val <= n) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }
    return high;
}

// - Driver code
console.log(floorSqrt1(5)); // 2
console.log(floorSqrt2(5)); // 2
console.log(floorSqrt3(5)); // 2

console.log(floorSqrt1(4)); // 2
console.log(floorSqrt2(4)); // 2
console.log(floorSqrt3(4)); // 2

console.log(floorSqrt1(65)); // 8
console.log(floorSqrt2(65)); // 8
console.log(floorSqrt3(65)); // 8