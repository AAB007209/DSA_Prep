// - Problem Description (Crio)
/*
Given a string "str", find the length of the longest word in the string str.
*/

// - Simple Approach
// Time Complexity - O(N)
// Space Complexity - O(N)

function longestWord(str) {
    let maxiString = "";
    const splitStr = str.split(" ");

    for (let i = 0; i < splitStr.length; i++) {
        if (splitStr[i].length > maxiString.length) {
            maxiString = splitStr[i];
        }
    }
    return maxiString;
}

// - Driver Code
console.log(longestWord("I am a good person")); // Output -> person
console.log(longestWord("I am a good person with good knowledge in JS")); // Output -> knowledge 
