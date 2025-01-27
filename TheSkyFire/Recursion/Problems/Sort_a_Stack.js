/*
- Sort a Stack using Recursion
*/

// - Recursive Approach
// Time Complexity - O(N^2)
// Space Complexity - O(N)

class Stack {
    constructor() {
        this.stack = []; // Internal array to store stack elements
    }

    // Push an element to the top of the stack
    push(element) {
        this.stack.push(element);
    }

    // Pop the top element from the stack and return it
    pop() {
        if (this.isEmpty()) {
            throw new Error("Stack underflow - The stack is empty.");
        }
        return this.stack.pop();
    }

    // Peek the top element without removing it
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

    // Get the size of the stack
    size() {
        return this.stack.length;
    }

    // Get all elements as an array
    getItems() {
        return [...this.stack];
    }
}


function sortStack(stack) {
    if (stack.size() <= 1) {
        return stack;
    }

    let topElem = stack.pop();
    sortStack(stack);
    insert(stack, topElem);

    return stack;
}

function insert(stack, topElem) {
    if (stack.isEmpty() || stack.peek() <= topElem) {
        stack.push(topElem);
        return stack;
    }

    let val = stack.pop();
    insert(stack, topElem);

    stack.push(val);
}

// - Driver code
let st = new Stack();
st.push(5);
st.push(3);
st.push(1);
st.push(0);
st.push(2);
st.push(4);

sortStack(st);
console.log(st.getItems());