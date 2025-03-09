// This is the Program for Insertion Sort

// Time Complexity - O(N^2)
// Space Complexity - O(1)

function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        let curr = arr[i];
        let prev = i - 1;

        while (prev >= 0 && arr[prev] > curr) {
            arr[prev + 1] = arr[prev];
            prev--;
        }

        arr[prev + 1] = curr;
    }
    return arr;
}

// - Driver code
console.time("Insertion Sort Time");
console.log(insertionSort([4, 1, 3, 5, 2]));
console.timeEnd("Insertion Sort Time");
// console.log(insertionSort([100, 40, 10, 20, 30, 50, 90, 80, 70, 60]));