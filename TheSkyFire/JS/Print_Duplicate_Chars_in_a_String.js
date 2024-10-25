// - Problem Description

/*
For a given string S, the objective is to display each duplicated character along with its frequency in the provided string.The output should list the characters in lexicographical order.
*/

// - Map Frequency count Approach
// Time Complexity - O(N * log N)
// Space Complexity - O(N)

function moreThanOnceDSAUNIQ(str) {
    let map = new Map();

    for (let i = 0; i < str.length; i++) {
        if (map.has(str[i])) {
            map.set(str[i], map.get(str[i]) + 1);
        } else {
            map.set(str[i], 1);
        }
    }

    const filteredChars = Array.from(map)
        .filter(([char, freq]) => freq > 1)
        .map(([char, freq]) => char);

    filteredChars.sort();

    filteredChars.forEach(char => {
        console.log(`${char} ${map.get(char)}`);
    })

    return;
}

// - Driver code
const testCases = [
    { str: "programming", description: "Test case with repeated letters" },
    { str: "hello world", description: "Test case with spaces and repeated letters" },
    { str: "abcde", description: "Test case with unique letters" },
    { str: "mississippi", description: "Test case with multiple repeated letters" },
    { str: "data structures and algorithms", description: "Test case with spaces and multiple words" },
];

testCases.forEach(({ str, description }, index) => {
    console.log(`\nTest Case ${index + 1}: ${description}`);
    console.log(`Input: "${str}"`);
    console.log(`Characters with frequency > 1:`);
    moreThanOnceDSAUNIQ(str);
});


// ------ Output --------

/*

Test Case 1: Test case with repeated letters
Input: "programming"
Characters with frequency > 1:
g 2
m 2
r 2

Test Case 2: Test case with spaces and repeated letters
Input: "hello world"
Characters with frequency > 1:
l 3
o 2

Test Case 3: Test case with unique letters
Input: "abcde"
Characters with frequency > 1:

Test Case 4: Test case with multiple repeated letters
Input: "mississippi"
Characters with frequency > 1:
i 4
p 2
s 4

Test Case 5: Test case with spaces and multiple words
Input: "data structures and algorithms"
Characters with frequency > 1:
  3
a 4
d 2
r 3
s 3
t 4
u 2

// Here in the above we can see blank space 3 in the first line it is because we have 3 white spaces in the input
*/