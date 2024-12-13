// - Problem Description (GFG: Find the Nth root of M)

// Link - https://www.geeksforgeeks.org/problems/find-nth-root-of-m5843/1

/*
You are given 2 numbers n and m, the task is to find n√m (nth root of m). If the root is not integer then returns -1.
*/

// - Bruteforce Approach
// Time Complexity - O(N)
// Space Complexity - O(1)

function nthRoot1(n, m) {
    let i = 1;

    while (Math.pow(i, n) <= m) {
        if (Math.pow(i, n) === m) return i;
        i++;
    }
    return -1;
}

// Optimal Approach
// Time Complexity - O(log N)
// Space Complexity - O(1)

function nthRoot2(n, m){
    let low = 1, high = m;
    while(low <= high){
        let mid = (low + high) >> 1;
        if(Math.pow(mid, n) === m){
            return mid;
        }else if(Math.pow(mid, n) < m){
            low = mid + 1;
        }else{
            high = mid - 1;
        }
    }    
    return -1;
}

// - Driver code
// Bruteforce
console.log(nthRoot1(2, 9));
console.log(nthRoot1(3, 9));

// Optimal 
console.log(nthRoot2(2, 9));
console.log(nthRoot2(3, 9));