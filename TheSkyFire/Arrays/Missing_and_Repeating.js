// - Problem Description (GFG: Missing and Repeating)

// Link - https://www.geeksforgeeks.org/problems/find-missing-and-repeating2512/1

/*
Given an unsorted array arr of positive integers. One number a from the set [1, 2,....,n] is missing and one number b occurs twice in the array. Find numbers a and b.

Note: The test cases are generated such that there always exists one missing and one repeating number within the range [1,n].
*/

// - Bruteforce Approach
// Time Complexity - O(N^2)
// Space Complexity - O(1)

function missingAndRepeating1(arr) {
    const n = arr.length;
    let repeating = -1, missing = -1;

    for (let i = 1; i <= n; i++) {
        let cnt = 0;
        for (let j = 0; j < n; j++) {
            if (arr[j] == i) cnt++;
        }

        if (cnt == 2) repeating = i;
        else if (cnt == 0) missing = i;

        if (repeating != -1 && missing != -1) break;
    }

    return [repeating, missing];
}

// - Better Approach
// Time Complexity - O(N)
// Space Complexity - O(N)

function missingAndRepeating2(arr) {
    let freq = new Array(arr.length + 1).fill(0);
    let ans = [];
    for (let i = 0; i < arr.length; i++) {
        freq[arr[i]]++;
    }

    let repeating = -1, missing = -1;
    for (let i = 1; i <= arr.length; i++) {
        if (freq[i] > 1) {
            repeating = i;
        }

        if (freq[i] === 0) {
            missing = i;
        }
    }
    ans.push(repeating);
    ans.push(missing);
    return ans;
}

// - Optimal Approach (Using Math: Forming linear Equations)
// Time Complexity - O(N)
// Space Complexity - O(1)

function missingAndRepeating3(arr) {
    const n = arr.length;

    // Find Sn and S2n: (Sn - Sum of N natural numbers. S2n - Sum of Squares of N natural numbers)
    const SN = (n * (n + 1)) / 2;
    const S2N = (n * (n + 1) * (2 * n + 1)) / 6;

    // Calculate S and S2:
    let S = 0, S2 = 0;
    for (let i = 0; i < n; i++) {
        S += arr[i];
        S2 += arr[i] * arr[i];
    }

    //S-Sn = X-Y:
    const val1 = S - SN;

    // S2-S2n = X^2-Y^2:
    let val2 = S2 - S2N;

    //Find X+Y = (X^2-Y^2)/(X-Y):
    val2 = val2 / val1;

    //Find X and Y: X = ((X+Y)+(X-Y))/2 and Y = X-(X-Y),
    // Here, X-Y = val1 and X+Y = val2:
    const x = (val1 + val2) / 2;
    const y = x - val1;

    return [x, y];
}

// - Driver code
console.log(missingAndRepeating1([2, 2])); // Output - [2, 1]
console.log(missingAndRepeating2([1, 3, 3])); // Output - [3, 2]
console.log(missingAndRepeating3([4, 3, 6, 2, 1, 1])); // Output - [1, 5]


// We have one more Optimal solution which is using XOR but its little difficult to understand at this point. Will add later.