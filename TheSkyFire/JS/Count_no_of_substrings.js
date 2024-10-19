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
            } else if (distinctCount > k) {
                break;  // No point in continuing as distinctCount > k
            }
        }
    }
    return count;
}

// - More Optimal Code
// Time Complexity - O(N)
// Space Complexity - O(1)

function checkforKSubstring3(str, k) {
    // Helper function to count substrings with at most k distinct characters
    function countAtMostKDistinct(k) {
        let freq = Array(26).fill(0);
        let count = 0, distinctCount = 0;
        let left = 0;

        for (let right = 0; right < str.length; right++) {
            let indexRight = str.charCodeAt(right) - 97;

            if (freq[indexRight] === 0) {
                distinctCount++;  // A new distinct character
            }
            freq[indexRight]++;  // Increment frequency of the character

            // Shrink the window if distinct character count exceeds k
            while (distinctCount > k) {
                let indexLeft = str.charCodeAt(left) - 97;
                freq[indexLeft]--;
                if (freq[indexLeft] === 0) {
                    distinctCount--;  // One distinct character is removed
                }
                left++;
            }

            // Add the number of substrings ending at `right`
            count += right - left + 1;
        }

        return count;
    }

    // Count of substrings with exactly k distinct characters 
    return countAtMostKDistinct(k) - countAtMostKDistinct(k - 1); // (Important Step to understand why we do this ?)
}

// - Driver code
console.log(checkforKSubstring2("aba", 2)); // Output -> 3
console.log(checkforKSubstring2("abaaca", 1)); // Output -> 7
console.log(checkforKSubstring2("cabbbefffab", 3)); // Output -> 17

console.log(checkforKSubstring3("cabzedaefeb", 4)); // Output -> 10
console.log(checkforKSubstring3("cabbbefffab", 5)); // Output -> 5