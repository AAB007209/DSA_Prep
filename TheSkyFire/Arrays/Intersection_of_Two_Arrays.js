// - Problem Description (Leetcode: 349. Intersection of Two Arrays)
// Link - https://leetcode.com/problems/intersection-of-two-arrays/description

/*
Given two integer arrays nums1 and nums2, return an array of their 
intersection. Each element in the result must be unique and you may return the result in any order.
*/

// - Bruteforce Approach
// Time Complexity - O(N + M)
// Space Complexity - O(N + min(N, M))

function intersectionOfTwoArrays(nums1, nums2) {
    const s1 = new Set(nums1);
    const s2 = new Set();

    for (const element of nums2) {
        if (s1.has(element)) {
            s2.add(element);
        }
    }
    return Array.from(s2);
}

// - Driver code
console.log(intersectionOfTwoArrays([1, 2, 2, 1], [2, 2])); // Output -> [2]
console.log(intersectionOfTwoArrays([4, 9, 5], [9, 4, 9, 8, 4])); // Output -> [9, 4]
