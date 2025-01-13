// - Problem Description (Leetcode: 402. Remove K Digits)

// Link - https://leetcode.com/problems/remove-k-digits/description/

/*
Given string num representing a non-negative integer num, and an integer k, return the smallest possible integer after removing k digits from num
*/

// - Bruteforce Approach
// Time Complexity - 
// Space Complexity - 

// - Below code doesn't work for "10001", k=4
// function removeKdigits(num, k) {
//     const n = num.length;
//     let mini = Number.MAX_SAFE_INTEGER;
//     for (let i = 0; i < n - k + 1; i++) { 
//         let otherPart = num.slice(0, i) + num.slice(i + k);
//         mini = Math.min(mini, otherPart);
//     }
//     return mini;
// }

// Stack Approach
// Time Complexity - O(N)
// Space Complexity - O(N)

function removeKdigits(num, k) {
    const n = num.length;
    const stack = [];

    // Iterate through the digits
    for (let i = 0; i < n; i++) {
        // Remove digits from the stack if they are greater than the current digit
        // and we still need to remove more digits (k > 0)
        while (stack.length > 0 && k > 0 && stack[stack.length - 1] > num[i]) {
            stack.pop();
            k--;
        }

        // Push the current digit to the stack
        stack.push(num[i]);
    }

    // If there are still digits to remove, remove them from the end
    while (k > 0) {
        stack.pop();
        k--;
    }

    // Build the result and remove leading zeros
    let result = stack.join('').replace(/^0+/, '');

    // Return "0" if the result is empty
    return result.length === 0 ? "0" : result;
}

// Driver code
console.log(removeKdigits("1432219", 3)); // Output: "1219"
console.log(removeKdigits("10200", 1)); // Output: "200"
console.log(removeKdigits("10", 2)); // Output: "0"
console.log(removeKdigits("10001", 4)); // Output: "0"
console.log(removeKdigits("112", 1)); // Expected output: "11"
