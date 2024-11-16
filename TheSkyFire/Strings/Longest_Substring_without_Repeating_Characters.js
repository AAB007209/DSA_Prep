// - Problem Description (Leetcode: 3. Longest Substring Without Repeating Characters)

// Given a string s, find the length of the longest substring without repeating characters.

/** 
1. Bruteforce Appraoch
2. Sliding window + Set
3. Sliding Window + Hashing
4. Sliding Window + Hashing - The last position where each character was seen
**/

// - Bruteforce Approach
// Time Complexity - O(N^3)
// Space Complexity - O(N) 

function lengthOfLongestSubstring1(str) {
    let longestSubstr = "";

    // Helper function to check if a substring has all unique characters
    const hasUniqueChars = (s) => {
        let charSet = new Set();
        for (let char of s) {
            if (charSet.has(char)) {
                return false; // Found a repeated character
            }
            charSet.add(char);
        }
        return true; // true if all characters are unique
    };

    // Generate all substrings and check for uniqueness
    for (let i = 0; i < str.length; i++) {
        for (let j = i + 1; j <= str.length; j++) {
            let substr = str.slice(i, j);
            if (hasUniqueChars(substr) && substr.length > longestSubstr.length) {
                longestSubstr = substr;
            }
        }
    }

    return longestSubstr.length;
}

// - Sliding Window + Set Approach
// Time Complexity - O(N)
// Space Complexity - O(1)

function lengthOfLongestSubstring2(s) {
    let maxi = 0;
    let left = 0;
    let charSet = new Set();

    for (let right = 0; right < s.length; right++) {
        while (charSet.has(s[right])) {
            charSet.delete(s[left]);
            left++;
        }

        charSet.add(s[right]);
        maxi = Math.max(maxi, right - left + 1);
    }

    return maxi;
};

// - Sliding Window + Hashing Approach
// Time Complexity - O(N)
// Space Complexity - O(1)

function lengthOfLongestSubstring3(s) {
    let maxi = 0;
    let left = 0;
    let count = {}; // Dictionary acting as Hashmap

    for (let right = 0; right < s.length; right++) {
        let c = s[right];
        count[c] = (count[c] || 0) + 1; // If present +1 else initialize with 1;

        // If frequency of any char is > 1 decrease the left until we decrease that char frequency to 1
        while (count[c] > 1) {
            count[s[left]] -= 1;
            left += 1;
        }

        maxi = Math.max(maxi, right - left + 1);
    }

    return maxi;
};

// - Using Hashmap for tracking last seen of the repeating character
// Time Complexity - O(N)
// Space Complexity - O(1)

function lengthOfLongestSubstring4(s) {
    let maxi = 0;
    let left = 0;
    let lastSeen = {}; // Hashmap to store last seen char with its index.

    for (let right = 0; right < s.length; right++) {
        let c = s.charAt(right);

        // If lastSeen is still within the Window we move +1 place of that index where it was lastSeen
        if (c in lastSeen && lastSeen[c] >= left) {
            left = lastSeen[c] + 1;
        }

        maxi = Math.max(maxi, right - left + 1);
        lastSeen[c] = right;
    }

    return maxi;
};

// Driver Codes
console.log(lengthOfLongestSubstring1("ababbabccb")); // Output -> 3 (abc)
console.log(lengthOfLongestSubstring2("bbbbbb")); // Output -> 1 (b)
console.log(lengthOfLongestSubstring3("abcdeabcdefffggh")); // Output -> 6 (abcdef)
console.log(lengthOfLongestSubstring4("abababcdabde")); // Output -> 5 (abcd)