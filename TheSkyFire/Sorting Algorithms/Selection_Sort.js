// This is the Program for Selection Sort

// Time Complexity - O(N^2)
// Space Complexity - O(1)

function selectionSort(arr) {
    const n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        let smallestIndex = i;
        for (let j = i + 1; j < n; j++) {
            if (arr[j] < arr[smallestIndex]) {
                smallestIndex = j;
            }
        }

        // Swap the smallestIndex element with the first element of the unsorted.
        [arr[i], arr[smallestIndex]] = [arr[smallestIndex], arr[i]];
    }
    return arr;
}

// - Driver Code
console.time("Selection Sort Time");
console.log(selectionSort([4, 1, 2, 5, 3, 8, 6, 7]));
console.timeEnd("Selection Sort Time");
// console.log(selectionSort([100, 30, 50, 10, 20, 40, 90, 80, 70, 60]));