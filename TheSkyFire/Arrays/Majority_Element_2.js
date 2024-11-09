// - Problem Description (Leetcode: 229. Majority Element 2)
// Link - https://leetcode.com/problems/majority-element-ii/description

/*
Given an integer array of size n, find all elements that appear more than ⌊ n/3 ⌋ times.
*/

// - Bruteforce Approach
// Time Complexity - O(N^2)
// Space Complexity - O(1)

function majorityElement1(nums) {
    const n = nums.length; // size of the array
    const ls = []; // list of answers

    for (let i = 0; i < n; i++) {
        // selected element is v[i]:
        // checking if v[i] is not already a part of the answer
        if (ls.length == 0 || ls[0] != nums[i]) {
            let cnt = 0;
            for (let j = 0; j < n; j++) {
                // counting the frequency of v[i]
                if (nums[j] == nums[i]) {
                    cnt++;
                }
            }

            // check if frequency is greater than n/3:
            if (cnt > Math.floor(n / 3))
                ls.push(nums[i]);
        }

        // This condition is because in an Array Atmost we will have 2 elements with the condition n/3 satified.
        if (ls.length == 2) break;
    }

    return ls;
}

// - Better Solution
// Time Complexity - O(N)
// Space Complexity - O(N)

function majorityElement2(nums) {
    if (nums.length === 1) {
        return nums;
    }

    let n = nums.length;
    let map = new Map();
    let arr = [];
    for (let i = 0; i < n; i++) {
        map.set(nums[i], (map.get(nums[i]) || 0) + 1);
    }

    let condition = Math.floor(n / 3) + 1;
    for (let [key, value] of map) {
        if (value >= condition) {
            arr.push(key);
        }
    }

    return arr;
}

// - Optimal Solution (Modified Moore's Voting Algorithm)
// Time Complexity - O(N)
// Space Complexity - O(1)

function majorityElement3(nums) {
    let n = nums.length;
    if (n === 1) {
        return nums;
    }

    let cnt1 = 0, cnt2 = 0;
    let el1 = Number.MIN_VALUE;
    let el2 = Number.MIN_VALUE;
    let arr = [];

    for (let i = 0; i < n; i++) {
        if (cnt1 === 0 && el2 !== nums[i]) {
            cnt1 = 1;
            el1 = nums[i];
        }
        else if (cnt2 === 0 && el1 !== nums[i]) {
            cnt2 = 1;
            el2 = nums[i];
        }
        else if (nums[i] === el1) {
            cnt1++;
        }
        else if (nums[i] === el2) {
            cnt2++;
        }
        else {
            cnt1--;
            cnt2--;
        }
    }

    cnt1 = 0, cnt2 = 0;
    for (let i = 0; i < n; i++) {
        if (nums[i] === el1) {
            cnt1++;
        }
        if (nums[i] === el2) {
            cnt2++;
        }
    }

    let condition = Math.floor(n / 3);
    if (cnt1 > condition) arr.push(el1);
    if (cnt2 > condition) arr.push(el2);
    return arr;
}

// - Driver code
console.log(majorityElement1([11, 33, 33, 11, 33, 11])); // [11, 33]
console.log(majorityElement1([1])); // [1]

console.log(majorityElement2([3, 2, 3])); // [3]
console.log(majorityElement2([1, 2])); // [1, 2]

console.log(majorityElement3([2, 1, 1, 3, 1, 4, 5, 6])); // [1]
console.log(majorityElement3([1, 3, 3, 4, 3, 6])); // [3]





// - New Learning
/*
- We can also use Object as Map to store the Frequencies of the elements: O(N), O(N);

var majorityElement = function(nums) {

    if(nums.length === 1){
        return nums;
    }

    obj = {}
    for(i of nums){
        if(!obj[i]){
            obj[i]=1
        }else{
            obj[i]++
        }
    }
    v=[]
    for(const i in obj){
        if(obj[i]>Math.floor(nums.length/3)){
         v.push(Number(i))
        }
    }
    return v
};

*/