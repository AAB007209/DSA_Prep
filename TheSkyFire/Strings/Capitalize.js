// - Problem Description (GFG)

// Link - https://www.geeksforgeeks.org/java-program-convert-first-character-uppercase-sentence/

/*
Given a string s, the task is to convert the first letter of each word in the string to uppercase. 

Note: Letters other than the first one must be converted to lowercase.
*/

// - Using Built-in Method
// Time Complexity - O(N)
// Space Complexity - O(N)

function convert1(str) {

    let result = ""; // For storing the final string
    let ch = " "; // For Tracking spaces

    for (let i = 0; i < str.length; i++) {

        // This is true for first character
        // This checks if the previous char was space and the current is a lowercase char of the word
        if (ch === " " && str.charAt(i) !== " ") {
            result = result.concat(str.charAt(i).toUpperCase());
        }

        // Converting all other characters to lowercase
        else {
            result = result.concat(str.charAt(i).toLowerCase());
        }
        ch = str.charAt(i); // Updating the "ch"
    }

    return result.trim();
}

// - Using Iterative Method
// Time Complexity - O(N)
// Space Complexity - O(1)

function convert2(s) {
    // Create a char array of given String
    let ch = s.split("");
    for (let i = 0; i < s.length; i++) {

        // If first character of a word is found
        if ((s[i] != ' ') && (i == 0 || s[i - 1] == ' ')) {

            // If it is in lower-case Convert into Upper-case
            if (ch[i] >= 'a' && ch[i] <= 'z') {

                ch[i] = String.fromCharCode(ch[i].charCodeAt(0) -
                    'a'.charCodeAt(0) + 'A'.charCodeAt(0));
            }
        }

        // If apart from first character Any other char is in Upper-case
        else if (ch[i] >= 'A' && ch[i] <= 'Z') {
            // Convert into Lower-Case
            ch[i] = String.fromCharCode(ch[i].charCodeAt(0) + 'a'.charCodeAt(0) - 'A'.charCodeAt(0));
        }
    }

    // Convert the char array to equivalent String
    let st = (ch).join("");
    return st;
}

// - Driver code
// console.log(convert1("gEEks fOr GeeKs"));
console.log(convert2("the quick Brown fox jumps over The lazy dog"));