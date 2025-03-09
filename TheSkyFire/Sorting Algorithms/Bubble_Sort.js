// This is the Program for Bubble Sort

// Time Complexity - O(N^2)
// Space Complexity - O(1)

function bubbleSort(arr) {
    const n = arr.length;
    let flag = true;
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
                flag = false;
            }
        }
        if (flag === true) {
            console.log("Array is already Sorted");
            return arr;
        }
    }
    return arr;
}

// - Driver code
console.time("Bubble Sort Time");
console.log(bubbleSort([4, 1, 3, 5, 2]));
console.timeEnd("Bubble Sort Time");

// console.log(bubbleSort([1, 2, 3, 4, 5]));