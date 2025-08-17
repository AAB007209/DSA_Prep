// Problem Description (Leetcode: 345. Reverse Vowels of a String)

/*
Given a string s, reverse only all the vowels in the string and return it.

The vowels are 'a', 'e', 'i', 'o', and 'u', and they can appear in both lower and upper cases, more than once.
*/

// Bruteforce Approach
// Time Complexity - O(N)
// Space Complexity - O(N)

function reverseVowels(s) {
    const vowels = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']);
    const vowelIndices = [];
    const vowelsFound = [];

    // Collect indices and vowels
    for (let i = 0; i < s.length; i++) {
        if (vowels.has(s[i])) {
            vowelIndices.push(i);
            vowelsFound.push(s[i]);
        }
    }

    // Reverse the array of vowels found
    vowelsFound.reverse();

    // Convert string to array to mutate characters
    const chars = s.split('');

    // Replace vowels in original positions with reversed vowels
    for (let j = 0; j < vowelIndices.length; j++) {
        chars[vowelIndices[j]] = vowelsFound[j];
    }

    // Join array back to string
    return chars.join('');
}

// Better code (Two Pointers)
// Time Complexity - O(N)
// Space Complexity - O(N)

function reverseVowels2(s) {
    let left = 0, right = s.length - 1;
    const vowels = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']);

    let chars = s.split('');
    while (left < right) {
        if (!vowels.has(chars[left])) {
            left++;
        } else if (!vowels.has(chars[right])) {
            right--;
        } else {
            [chars[left], chars[right]] = [chars[right], chars[left]];
            left++;
            right--;
        }
    }

    return chars.join('');
}

// Driver code:
console.log(reverseVowels("hello"));    // Output: "holle"
console.log(reverseVowels("leetcode")); // Output: "leotcede"
console.log(reverseVowels("IceCreAm")); // Output: "AceCreIm"

console.log(reverseVowels2("hello"));    // Output: "holle"
console.log(reverseVowels2("leetcode")); // Output: "leotcede"
console.log(reverseVowels("IceCreAm")); // Output: "AceCreIm"


/*
NOTE: If strings were mutable, the two-pointer approach could be O(1) space as you could swap in place. 
But in JavaScript, creating the array means O(n) space.

So, time complexity is the same, but the two-pointer method is usually more space-efficient and faster in practice because it avoids extra arrays and multiple passes.
*/