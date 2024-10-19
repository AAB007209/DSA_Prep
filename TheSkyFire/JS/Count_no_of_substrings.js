// - Problem Description (GFG: Count number of Substrings)
// Link - https://www.geeksforgeeks.org/problems/count-number-of-substrings4528/1?utm_source=youtube&utm_medium=collab_striver_ytdescription&utm_campaign=count-number-of-substrings

/*
Given a string of lowercase alphabets, count all possible substrings (not necessarily distinct) that have exactly k distinct characters.
*/

// - Bruteforce Approach
// Time Complexity - O(N^3)
// Space Complexity - O(N^2) > for storing Substrings.

function checkforKSubstring1(str, k) {
    let arr = Array(26).fill(0);
    let counter = 0;

    for (let i = 0; i < str.length; i++) {
        let index = str.charCodeAt(i) - 97;
        arr[index]++;
    }

    for (let i = 0; i < 26; i++) {
        if (arr[i] > 0) {
            counter++;
        }
    }

    return (counter === k) ? true : false;
}

function generateAllSubstrings(str) {
    let substrings = [];
    for (let i = 0; i < str.length; i++) {
        for (let j = i; j <= str.length; j++) {
            substrings.push(str.slice(i, j));
        }
    }
    return substrings;
}

let k = 2;
let count = 0;
const result = generateAllSubstrings("aba");
// console.log(result);

for (let str of result) {
    if (str.length >= k) {
        let answer = checkforKSubstring1(str, k);
        if (answer) {
            count++;
        }
    }
}

// console.log(count);

// - Optimal Solution (Sliding Window Concept)
// Time Complexity - O(N^2)
// Space Complexity - O(1)

function checkforKSubstring2(str, k) {
    let n = str.length;
    let count = 0;

    for (let i = 0; i < n; i++) {
        let freq = Array(26).fill(0);
        let distinctCount = 0;

        for (let j = i; j < n; j++) {
            let index = str.charCodeAt(j) - 97;
            if (freq[index] === 0) {
                distinctCount++; // A new distinct char is found.
            }
            freq[index]++; // Updating that char index count.

            // If distinct char count >= k then we count that substring
            if (distinctCount === k) {
                count++;
            }
        }
    }
    return count;
}

// - Driver code
console.log(checkforKSubstring2("aba", 2)); // Output -> 3
console.log(checkforKSubstring2("abaaca", 1)); // Output -> 7
console.log(checkforKSubstring2("cabbbefffab", 3)); // Output -> 17