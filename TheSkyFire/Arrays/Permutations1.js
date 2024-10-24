// - Problem Description (Crio)

/*
Given a collection of distinct integers, return all possible permutations.

Constraints:
1 <= N <= 8
*/

// - Heap Algorithm
// Time Complexity - O(N!)
// Space Complexity - O(N)

function permutations(arr) {
    const output = [];

    const swapInPlace = (arrToSwap, indexA, indexB) => {
        const temp = arrToSwap[indexA];
        arrToSwap[indexA] = arrToSwap[indexB];
        arrToSwap[indexB] = temp;
    };

    const generate = (n, heapArr) => {
        if (n === 1) { // Base case for the recursive calls.
            output.push(heapArr.slice()); // .slice() because it creates a shallow copy of the heapArr.
            return;
        }

        generate(n - 1, heapArr);

        for (let i = 0; i < n - 1; i++) {
            if (n % 2 === 0) {
                swapInPlace(heapArr, i, n - 1);
            } else {
                swapInPlace(heapArr, 0, n - 1);
            }

            generate(n - 1, heapArr);
        }
    };

    generate(arr.length, arr.slice()); // .slice() creates a shallow copy of the arr.

    return output;
}

// - Driver Code
console.log(permutations([1, 2, 3]));

// - Output
/*
[
    [1, 2, 3],
    [2, 1, 3],
    [3, 1, 2],
    [1, 3, 2],
    [2, 3, 1],
    [3, 2, 1]
]
*/
