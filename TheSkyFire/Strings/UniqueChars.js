// - Problem Description - To find the unique characters from the given string.

// Time Complexity - O(N)
// Space Complexity - O(N)

function unique(str) {
    let set = new Set();
    for (let i = 0; i < str.length; i++) {
        if (set.has(str[i])) {
            set.delete(str[i]);
        } else {
            set.add(str[i]);
        }
    }

    (set.size !== 0) ? console.log("[" + [...set].join(",") + "]") : console.log("No Unique Characters");
}

unique("ababcd"); // [c,d]
unique("aa"); // No Unique Characters