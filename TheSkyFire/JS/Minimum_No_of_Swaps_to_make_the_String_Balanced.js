// - Problem Description (Leetcode: 1963. Minimum Number of Swaps to Make the String Balanced)

/*
You are given a 0-indexed string s of even length n. The string consists of exactly n / 2 opening brackets '[' and n / 2 closing brackets ']'.

A string is called balanced if and only if:

* It is the empty string, or
* It can be written as AB, where both A and B are balanced strings, or
* It can be written as [C], where C is a balanced string.
You may swap the brackets at any two indices any number of times.

Return the minimum number of swaps to make s balanced.
*/

// - Bruteforce Solution
// Time Complexity - O(N^2)
// Space Complexity - O(N) -> N is string length passed

function minSwaps1(str) {
    let imbalance = 0;
    let swaps = 0;
    let chars = str.split("");

    for (let i = 0; i < chars.length; i++) {
        if (chars[i] === '[') {
            imbalance++; // Increment imbalance for open bracket
        } else if (chars[i] === ']') {
            imbalance--; // Decrement for close bracket
        }

        // If there's more closing brackets than opening at any point
        if (imbalance < 0) {
            // Find the next unmatched '[' after the current position and swap it
            for (let j = i + 1; j < chars.length; j++) {
                if (chars[j] === '[') {
                    // Swap the unmatched '[' with the current ']'
                    [chars[i], chars[j]] = [chars[j], chars[i]];
                    swaps++; // Increase swap count
                    imbalance = 1; // Reset imbalance after swapping
                    break;
                }
            }
        }
    }
    return swaps;
}

// - Optimal Solution
// Time Complexity - O(N)
// Space Complexity - O(1)

function minSwaps2(str) {
    let openBrackets = 0;
    let closeBrackets = 0;

    for (let i = 0; i < str.length; i++) {
        if (str[i] === "[") {
            openBrackets++;
        }
        else {
            if (openBrackets > 0) {
                openBrackets--;
                closeBrackets--;
            }
            else {
                closeBrackets++;
            }
        }
    }

    let ans = Math.ceil(Math.max(openBrackets, closeBrackets) / 2);
    return ans;
};


// Driver Code

console.log(minSwaps1("[[][]]")); // Output: 0
console.log(minSwaps2("][[["));   // Output: 2
console.log(minSwaps1("][[]]"));  // Output: 1
console.log(minSwaps2("]["));  // Output: 1

