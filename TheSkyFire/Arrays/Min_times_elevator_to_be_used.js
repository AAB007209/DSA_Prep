// - Problem Description

/*
N students of Hudson University are currently standing on the ground floor and all of them need to go to the 13th floor to attend Professor Stark's lecture.
Only 1 elevator is currently working and rest are under maintenance.

Professor Stark is very strict about timing and students are worried that they won't be able to reach the class in time.
They want to minimize the number of trips the elevator needs to make.

Inside the elevator, at max, two students are allowed and with a total weight less than or equal to K, at a time.
W[i] represents the weight of the ith student.

Determine the minimum number of trips the elevator needs to make.
*/

// - Two Pointer Approach
// Time Complexity - O(N*logN)
// Space Complexity - O(1)

function elevator(N, K, W) {
    W.sort((a, b) => a - b);

    let trips = 0;
    let left = 0;
    let right = W.length - 1;

    while (left <= right) {
        if (W[left] + W[right] <= K) {
            left++;
        }

        right--;
        trips++;
    }
    return trips;
}

// - Driver code
const testCases = [
    { N: 5, K: 100, W: [30, 80, 40, 60, 20], expected: 3 },
    { N: 4, K: 200, W: [50, 150, 60, 80], expected: 2 },
    { N: 3, K: 90, W: [20, 50, 40], expected: 2 },
    { N: 6, K: 150, W: [70, 80, 40, 50, 20, 60], expected: 3 },
];

testCases.forEach(({ N, K, W, expected }, index) => {
    const result = elevator(N, K, W);
    console.log(`Test Case ${index + 1}: Expected ${expected}, Got ${result}`);
});