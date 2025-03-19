// - Problem Description (Leetcode: 121. Best Time to Buy and Sell Stock)

// Link - https://leetcode.com/problems/best-time-to-buy-and-sell-stock/

/*
You are given an array prices where prices[i] is the price of a given stock on the ith day.
You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.
*/

// Time Complexity - O(N)
// Space Complexity - O(1)

// - Approach 1
function maxProfit1(prices) {
    let mini = Number.MAX_SAFE_INTEGER;
    let profit = 0;
    for(let i=0; i<prices.length; i++){
        mini = Math.min(mini, prices[i]);
        profit = Math.max(profit, prices[i] - mini);
    }

    return profit;
}

// - Approach 2
function maxProfit2(prices){
    let b = Infinity;
    let mP = 0;
    for( let i = 0; i < prices.length; i++ ){
        if(prices[i] < b){
            b = prices[i];
        }
        let cP = prices[i] - b;
        if(cP > mP){
            mP = cP;
        }
    }
    return mP;
}

// - Approach 3
function maxProfit3(prices){
    let i=prices[0],j=0,m=0,profit=0;
    for(let k=0;k<prices.length;k++)
        {
            if(prices[k]<i)
                i=prices[k];
            else
            {
                j=prices[k];
                m = j-i;
            }
            profit=Math.max(profit,m);
        }
    return profit;
}

// - Driver code
console.log(maxProfit1([7,1,5,3,6,4])); // Expected output: 5 (Buy at 1, Sell at 6)
console.log(maxProfit2([7,6,4,3,1])); // Expected output: 0 (No profit possible)

console.log(maxProfit3([2, 4, 1])); // Expected output: 2 (Buy at 2, Sell at 4)
console.log(maxProfit3([3, 2, 6, 5, 0, 3])); // Expected output: 4 (Buy at 2, Sell at 6)
console.log(maxProfit3([1, 2, 3, 4, 5])); // Expected output: 4 (Buy at 1, Sell at 5)