// - Naive Algorithm for Pattern Searching - GFG link - https://www.geeksforgeeks.org/naive-algorithm-for-pattern-searching/
// Time Complexity - O(N^2)
// Space Complexity - O(1)

function naiveAlgorithm(txt, pat) {
    const M = pat.length;
    const N = txt.length;

    let arr = [];

    for (let i = 0; i <= N - M; i++) {
        let j = 0;

        // For current index i check for pattern matching
        while (j < M && txt[i + j] === pat[j]) {
            j++;
        }

        if (j === M) {
            arr.push(i);
        }
    }
    return arr;
}

// Example 1
const txt1 = "AABAACAADAABAABA";
const pat1 = "AABA";
console.log("Example 1:");
let answer = naiveAlgorithm(txt1, pat1);
console.log(answer);

// Example 2
const txt2 = "agd";
const pat2 = "g";
console.log("\nExample 2:");
let answer2 = naiveAlgorithm(txt2, pat2);
console.log(answer2);