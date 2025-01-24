// - Problem Description (Leetcode: 50. Pow(x, n))

// Link - https://leetcode.com/problems/powx-n/description/

/*
Implement pow(x, n), which calculates x raised to the power n (i.e., xn).
*/

// - Recursive Approach
// Time Complexity - O(N)
// Space Complexity - O(N)

function powX(x, n) {
    if (n === 0) return 1;

    return x * powX(x, n - 1);
}

// - Recursive Approach
// Time Complexity - O(log N)
// Space Complexity - O(log N)

function powX2(x, n) {
    if (n === 0) return 1;

    else if (n % 2 === 0) {
        let y = powX2(x, n / 2);
        return y * y;
    }

    else if (n % 2 === 1) {
        return x * powX2(x, n - 1);
    }
}

// Below is the Solution for Leetcode
var myPow = function (x, n) {
    if (n > 0) {
        return powX2(x, n);
    } else {
        return 1 / powX2(x, Math.abs(n));
    }
};

// - Driver code
console.log(myPow(2, 10)); // Output: 1024
console.log(myPow(5, 10)); // Output: 9765625
console.log(myPow(4, 8)); // Output: 65536