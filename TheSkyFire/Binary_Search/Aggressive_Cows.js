// - Problem Description (SPOJ - Aggressive cows)

// Link - https://www.spoj.com/problems/AGGRCOW/

/*
Farmer John has built a new long barn, with N (2 <= N <= 100,000) stalls. The stalls are located along a straight line at positions x1 ... xN (0 <= xi <= 1,000,000,000).

His C (2 <= C <= N) cows don't like this barn layout and become aggressive towards each other once put into a stall. 
To prevent the cows from hurting each other, FJ wants to assign the cows to the stalls, such that the minimum distance between any two of them is as large as possible. 
What is the largest minimum distance?
*/

// - Bruteforce Approach
// Time Complexity - O(N*logN + (max(stalls) - min(stalls)) * N)
// Space Complexity - O(1)

function canWePlace(stalls, dist, cows){
    let n = stalls.length;
    let cntCows = 1;
    let last = stalls[0];

    for(let i=1; i<n; i++){
        if(stalls[i] - last >= dist){
            cntCows++;
            last = stalls[i];
        }
        if(cntCows >= cows) return true;
    }
    return false;
}

function aggrCow1(stalls, C) {
    stalls.sort((a, b) => a - b);
    let n = stalls.length;
    let limit = stalls[n-1] - stalls[0];

    for(let i=1; i<=limit; i++){
        if(canWePlace(stalls, i, C) === false){
            return i-1;
        }
    }
    return limit;
}

// Optimal Approach
// Time Complexity - O(N*logN + log(max(stalls) - min(stalls)) * N)
// Space Complexity - O(1)

function aggrCow2(stalls, C){
    stalls.sort((a, b) => a - b);
    let n = stalls.length;  
    let low = 1; high = stalls[n-1] - stalls[0];

    while(low <= high){
        let mid = (low + high) >> 1;
        if(canWePlace(stalls, mid, C)){
            low = mid+1;
        }else{
            high = mid-1;
        }
    }
    return high; // Because of Polarity of low and high concept
}

// - Driver code
console.log(aggrCow1([1, 2, 8, 4, 9], 3)); // 3
console.log(aggrCow1([0, 3, 4, 7, 10, 9], 4)); // 3
console.log(aggrCow1([1, 2, 4, 8, 16, 32, 64], 4)); // 15
console.log(aggrCow1([1, 2, 3, 4, 5], 5)); // 1
console.log(aggrCow1([10, 20, 30, 40, 50], 2)); // 40

// Optimal
console.log(aggrCow2([1, 2, 8, 4, 9], 3)); // 3
console.log(aggrCow2([0, 3, 4, 7, 10, 9], 4)); // 3
console.log(aggrCow2([1, 2, 4, 8, 16, 32, 64], 4)); // 15
console.log(aggrCow2([1, 2, 3, 4, 5], 5)); // 1
console.log(aggrCow2([10, 20, 30, 40, 50], 2)); // 40