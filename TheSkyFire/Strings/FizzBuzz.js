// - Problem Description (Leetcode: 412: Fizz Buzz)
// Link - https://leetcode.com/problems/fizz-buzz/description

/*
Given an integer n, return a string array answer (1-indexed) where:

answer[i] == "FizzBuzz" if i is divisible by 3 and 5.
answer[i] == "Fizz" if i is divisible by 3.
answer[i] == "Buzz" if i is divisible by 5.
answer[i] == i (as a string) if none of the above conditions are true.
*/

// - Bruteforce Approach
// Time Complexity - O(N
// Space Complexity - O(1)

function fizzbuzz1(n) {
    let result = [];
    for (let i = 1; i <= n; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            result.push("FizzBuzz");
        } else if (i % 3 === 0) {
            result.push("Fizz");
        } else if (i % 5 === 0) {
            result.push("Buzz");
        } else {
            result.push(i.toString());
        }
    }
    return result;
}

// - Bruteforce little modified Approach
// Time Complexity - O(N)
// Space Complexity - O(1)

function fizzbuzz2(n) {
    let result = [];
    let i = 1, fizz = 0, buzz = 0;
    while (i <= n) {

        fizz++;
        buzz++;

        if (fizz === 3 && buzz === 5) {
            result.push("FizzBuzz");
            fizz = buzz = 0;
        }
        else if (fizz === 3) {
            result.push("Fizz");
            fizz = 0;
        }
        else if (buzz === 5) {
            result.push("Buzz");
            buzz = 0;
        }
        else {
            result.push(i.toString());
        }
        i++;
    }
    return result;
}


// - Using Ternary Operator Approach
// Time Complexity - O(N)
// Space Complexity - O(1)

function fizzbuzz3(n) {
    let result = [];
    for (let i = 1; i <= n; i++) {
        result.push(
            (i % 15 === 0) ? "FizzBuzz" :
                (i % 5 === 0) ? "Buzz" :
                    (i % 3 === 0) ? "Fizz" :
                        i.toString()
        );
    }
    return result;
}


// Driver Code
console.log(fizzbuzz1(15));
console.log(fizzbuzz2(20));
console.log(fizzbuzz3(30));