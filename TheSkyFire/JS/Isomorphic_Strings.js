// - Problem Description - (Leetcode: 205. Isomorphic Strings) (Easy)
// Link -https://leetcode.com/problems/isomorphic-strings/description

/*
-> Given two strings s and t, determine if they are isomorphic.
-> Two strings s and t are isomorphic if the characters in s can be replaced to get t.
-> All occurrences of a character must be replaced with another character while preserving the order of characters. No two characters may map to the same character, but a character may map to itself.
*/

// - Using Maps Approach
// Time Complexity - O(N)
// Space Complexity - O(1)

function isIsomorphic1(s, t) {
    if (s.length !== t.length) return false;

    const sMap = new Map();
    const tMap = new Map();

    for (let i = 0; i < s.length; i++) {
        const sChar = s[i];
        const tChar = t[i];

        if (!sMap.has(sChar)) {
            sMap.set(sChar, tChar);
        } else if (sMap.get(sChar) !== tChar) {
            return false;
        }

        if (!tMap.has(tChar)) {
            tMap.set(tChar, sChar);
        } else if (tMap.get(tChar) !== sChar) {
            return false;
        }
    }

    return true;
};


// - Using Arrays Approach (More Optimal)
// Time Complexity - O(N)
// Space Complexity - O(1)

function isIsomorphic2(s, t) {
    if (s.length !== t.length) return false;

    let sMap = new Array(256).fill(0);
    let tMap = new Array(256).fill(0);

    for (let i = 0; i < s.length; i++) {
        let sChar = s.charCodeAt(i)
        let tChar = t.charCodeAt(i)

        if (sMap[sChar] != tMap[tChar]) return false;

        sMap[sChar] = i + 1; // Incrementing the value using (i+1) because we are using zero indexing 
        tMap[tChar] = i + 1;
    }
    return true;
}

// Driver Code
const s1 = "egg";
const t1 = "add";

const s2 = "foo";
const t2 = "bar";

const s3 = "paper";
const t3 = "title";

console.log(`Isomorphic:`, isIsomorphic1(s1, t1)); // Output: true
console.log(`Isomorphic:`, isIsomorphic2(s2, t2)); // Output: false
console.log(`Isomorphic:`, isIsomorphic2(s3, t3)); // Output: true
