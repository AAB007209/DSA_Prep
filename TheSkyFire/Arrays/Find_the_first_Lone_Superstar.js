// - Problem Description

/*
All the Bollywood superstars from the likes of Shah Rukh to Amitabh are lining up to entertain our Crio warriors.
However due to certain security concerns they also brought their body doubles with them.
A superstar can accompany any number of body doubles they want. Each superstar is represented by an integer, and all body doubles have the same integer representing them as the superstart.

We have to find the first superstar who came to entertain Crio warriors without a body double. If all the superstars have arrived with a body double then print -1.
*/

// - Map Frequency Count Approach
// Time Complexity - O(N)
// Space Complexity - O(N)

function firstUniqueInteger(n, arr) {
    let map = new Map();

    for (let i = 0; i < n; i++) {
        if (map.has(arr[i])) {
            map.set(arr[i], map.get(arr[i]) + 1);
        } else {
            map.set(arr[i], 1);
        }
    }

    for (let pair of map) {
        if (pair[1] === 1) {
            return pair[0];
        }
    }
    return -1;
}

// - Driver Code

console.log(firstUniqueInteger(4, [9, 6, 7, 6])); // Output -> 9
