// - Problem Description (Crio)
/*
Write a program that takes a list of words arr[] as input and returns the most occuring word in arr[].
It is guaranteed that if there are multiple words with the same frequency, the program should return the lexicographically minimum string among them.
*/

// - Simple Approach
// Time Complexity - O(N)
// Space Complexity - O(N)

function maxRepeatingWord(N, arr) {
    const wordCountMap = new Map();

    for (let word of arr) {
        wordCountMap.set(word, (wordCountMap.get(word) || 0) + 1);
    }

    let mostFrequent = "";
    let maxCount = 0;

    wordCountMap.forEach((count, word) => {

        // (word < mostFrequent) case is for the Lexicographically returning the word

        if (count > maxCount || (count === maxCount && word < mostFrequent)) {
            maxCount = count;
            mostFrequent = word;
        }
    })
    return mostFrequent;
}

// - Driver code
const arr = ["apple", "banana", "apple", "orange", "banana", "apple"];
const N = arr.length;

const result = maxRepeatingWord(N, arr);
console.log("The most frequent word is:", result); // apple is the most frequent one