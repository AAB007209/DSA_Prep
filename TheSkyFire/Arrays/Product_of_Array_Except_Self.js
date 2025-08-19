// Problem Description (Leetcode: 238. Product of Array Except Self)
// Link - https://leetcode.com/problems/product-of-array-except-self

/*
Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].

The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

You must write an algorithm that runs in O(n) time and without using the division operation.
*/

// - Bruteforce Approach
// Time Complexity - O(N^2)
// Space Complexity - O(1)

function productExceptSelf(nums) {
    const n = nums.length;
    let answer = new Array(n).fill(1);

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (i !== j) {
                answer[i] *= nums[j];
            }
        }
    }

    return answer;
}

// - Optimal Approach (Using Prefix and Suffix Array - Without using Division Operation)
// Time Complexity - O(N)
// Space Complexity - O(N)

function productExceptSelf2(nums) {
    const n = nums.length;
    const prefProduct = new Array(n).fill(1);
    const suffProduct = new Array(n).fill(1);
    const answer = new Array(n);

    // Constructing the prefProduct array
    for (let i = 1; i < n; i++) {
        prefProduct[i] = nums[i - 1] * prefProduct[i - 1];
    }

    // Constructing the suffProduct array
    for (let j = n - 2; j >= 0; j--) {
        suffProduct[j] = nums[j + 1] * suffProduct[j + 1];
    }

    // Constructing the Answer array using prefProduct and suffProduct Array
    for (let i = 0; i < n; i++) {
        answer[i] = prefProduct[i] * suffProduct[i];
    }

    return answer;
}

// - Optimal Appraoch (Using Division)
// Time Complexity - O(N)
// Space Complexity - O(1) (Excluding Output Array size, Only Auxiliary Space)

/* Notes

The idea is to handle two special cases of the input array: when it contains zero(s) and when it doesn't.

If the array has no zeros, product of array at any index (excluding itself) can be calculated by dividing the total product of all elements by the current element. 

However, division by zero is undefined, so if there are zeros in the array, the logic changes. If there is exactly one zero, the product for that index will be the product of all other non-zero elements, while the elements in rest of the indices will be zero. 
If there are more than one zero, the product for all indices will be zero, since multiplying by zero results in zero.

*/

function productExceptSelf3(nums) {
    let zeros = 0, idx = -1, prod = 1, n = nums.length;

    // Count the zeros and track the index of the zero
    for (let i = 0; i < n; i++) {
        if (nums[i] === 0) {
            zeros++;
            idx = i;
        }
        else {
            prod *= nums[i];
        }
    }

    let answer = new Array(nums.length).fill(0);

    // If no zeros, calculate the product of all elements
    if (zeros === 0) {
        for (let i = 0; i < n; i++) {
            answer[i] = Math.floor(prod / nums[i]);
        }
    }

    // If one zero, set product only at the zero's index.
    else if (zeros === 1) {
        answer[idx] = prod;
    }

    return answer;
}

// - Driver code
console.log(productExceptSelf([1, 2, 3, 4])); // Output: [ 24, 12, 8, 6 ]
console.log(productExceptSelf([-1, 1, 0, -3, 3])); // Output: [ -0, 0, 9, -0, 0 ]

console.log(productExceptSelf2([1, 2, 3, 4])); // Output: [ 24, 12, 8, 6 ]
console.log(productExceptSelf2([-1, 1, 0, -3, 3])); // Output: [ -0, 0, 9, -0, 0 ]

console.log(productExceptSelf3([1, 2, 3, 4])); // Output: [ 24, 12, 8, 6 ]
console.log(productExceptSelf3([-1, 1, 0, -3, 3])); // Output: [ -0, 0, 9, -0, 0 ]
