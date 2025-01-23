// - Problem Description (GFG: Print 1 to N Without Loop )

// Link - https://www.geeksforgeeks.org/problems/print-1-to-n-without-using-loops-1587115620/1

/*
Print numbers from 1 to n without the help of loops. You only need to complete the function printNos() that takes n as a parameter and prints the number from 1 to n recursively.

Note: Don't print any newline, it will be added by the driver code.
*/

// - Recursion Approach
// Time Complexity - O(N)
// Space Complexity - O(N)

function printNumbers(N) {
    if (N > 0) {
        printNumbers(N - 1);
        process.stdout.write(`${N} `);
    }
}

function printNumbers2(N) {
    if (N === 1) {
        process.stdout.write(`${N}`);
    }

    printNumbers2(N - 1);
    process.stdout.write(`${N} `);
}

function printNumbers3(N) {
    if (N === 0) return;

    printNumbers3(N - 1);
    process.stdout.write(`${N} `);
}

printNumbers3(5);
// printNumbers2(10);
// printNumbers3(64);