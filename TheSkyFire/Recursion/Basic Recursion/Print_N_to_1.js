// - Print Numbers from N to 1

// - Recursion Approach
// Time Complexity - O(N)
// Space Complexity - O(N)

function print1(N) {
    if (N > 0) {
        process.stdout.write(`${N} `);
        print1(N - 1);
    }
    return;
}

function print2(N) {
    if (N < 1) return;

    process.stdout.write(`${N} `);
    print2(N - 1);
}

print1(5); // 5 4 3 2 1
print2(5); // 5 4 3 2 1

