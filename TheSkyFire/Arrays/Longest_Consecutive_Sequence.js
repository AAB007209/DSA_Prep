// - Problem Description (Leetcode: 128. Longest Consecutive Sequence)
// Link - https://leetcode.com/problems/longest-consecutive-sequence

/*
Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence.

You must write an algorithm that runs in O(n) time.
*/

// - Bruteforce Approach
// Time Complexity - O(N * log N)
// Space Complexity - O(1)

function longestConsecutiveSequence1(nums) {
    const sorted = nums.sort((a, b) => a - b);
    let longest = 0;
    let currLength = 0;

    for (let i = 1; i < sorted.length; i++) {
        let currLength = 1;

        if (sorted[i] === sorted[i - 1]) continue;

        while (sorted[i] - sorted[i - 1] === 1) {
            currLength++;
            i++;
        }

        if (currLength > longest) {
            longest = currLength;
        }

        // - One more alternative
        // // Check if current number is consecutive
        // if (sorted[i] - sorted[i - 1] === 1) {
        //     currLength++;
        // } else {
        //     // Reset current length
        //     longest = Math.max(longest, currLength);
        //     currLength = 1;
        // }

    }
    return longest;
}

// - Optimal Approach (Using HashSet)
// Time Complexity - O(N)
// Space Complexity - O(N)

function longestConsecutiveSequence2(nums) {
    if (nums.length <= 1) return nums.length;
    const numSet = new Set(nums);
    let longest = 0;

    for (let n of nums) {
        if (!numSet.has(n - 1)) { // Only runs if it is the first number of the sequence
            let length = 1;

            while (numSet.has(n + length)) {
                length++;
            }

            if (length > longest) { // Updating Longest length sequence
                longest = length;
            }
        }
    }
    return longest;
}


// - Driver Code

console.log(longestConsecutiveSequence1([100, 4, 200, 1, 3, 2])); // Output -> 4
console.log(longestConsecutiveSequence1([0, 3, 7, 2, 5, 8, 4, 6, 0, 1])); // Output -> 9

console.log(longestConsecutiveSequence2([101, 103, 104, 102, 5, 3, 4, 2, 0, 1])); // Output -> 6
console.log(longestConsecutiveSequence2([0, 0, 0, 0, 0, 1, 1, 1, 1])); // Output -> 2

