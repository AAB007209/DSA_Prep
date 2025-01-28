// - Problem Description (GFG: Reverse a Stack)

// Link - https://www.geeksforgeeks.org/problems/reverse-a-stack/1

/*
You are given a stack St. You have to reverse the stack using recursion.
*/

// - Recursive Approach
// Time Complexity - O(N^2)
// Space Complexity - O(N)

class Stack {
    constructor() {
        this.stack = [];
    }

    // Push an element onto the stack
    push(element) {
        this.stack.push(element);
    }

    // Pop the top element from the stack
    pop() {
        if (this.isEmpty()) {
            throw new Error("Stack underflow - The stack is empty.");
        }
        return this.stack.pop();
    }

    // Peek at the top element without removing it
    peek() {
        if (this.isEmpty()) {
            throw new Error("Stack is empty.");
        }
        return this.stack[this.stack.length - 1];
    }

    // Check if the stack is empty
    isEmpty() {
        return this.stack.length === 0;
    }

    // Print the stack (for debugging)
    printStack() {
        console.log(this.stack);
    }
}

// - Function to insert at bottom of the stack
function insertAtBottom(stack, element){
    if(stack.isEmpty()){
        stack.push(element);
        return;
    }

    let topElement = stack.pop();
    insertAtBottom(stack, element);

    stack.push(topElement);
}

// - Function to reverse the stack
function reverseStack(stack){
    if(stack.isEmpty()){
        return;
    }

    let topElement = stack.pop();

    reverseStack(stack);

    insertAtBottom(stack, topElement);
}

// - Driver code
const stack = new Stack();
stack.push(1);
stack.push(5);
stack.push(2);
stack.push(6);
stack.push(8);
stack.push(3);
stack.push(4);

console.log("Original Stack:");
stack.printStack(); // [1, 5, 2, 6, 8, 3, 4]

reverseStack(stack);

console.log("Reversed Stack:");
stack.printStack(); // [4, 3, 8, 6, 2, 5, 1]
