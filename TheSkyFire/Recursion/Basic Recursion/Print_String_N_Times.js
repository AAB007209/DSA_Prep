// - Problem Description (Leetcode: Print given string N Times)

// Link - https://www.geeksforgeeks.org/problems/print-gfg-n-times/1

/*
Print given String n times without the loop.
*/

// - Recursion Approach
// Time Complexity - O(N)
// Space Complexity - O(N)

function printNTimes(str, N) {
    if (N === 1) {
        process.stdout.write(`${str}`);
        return;
    }

    printNTimes(str, N - 1);
    process.stdout.write(` ${str}`);
}

function printNTimes2(str, N) {
    if (N > 0) {
        if (N > 1) {
            process.stdout.write(`${str} `);
        } else {
            process.stdout.write(str);
        }
        printNTimes2(str, N - 1);
    }
}

function printNTimes3(str, N) {
    if (N === 0) {
        return;
    }

    process.stdout.write(`${str}`);
    if (N > 1) {
        process.stdout.write(" ");
    }

    printNTimes3(str, N - 1);
}

// - Function call
printNTimes3("JavaScript", 5);