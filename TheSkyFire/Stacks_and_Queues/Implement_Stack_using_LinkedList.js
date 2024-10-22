// - Implement Stack using LinkedList
// Link - https://www.geeksforgeeks.org/problems/implement-stack-using-linked-list/1

class StackNode{
    constructor(a){
        this.data = a;
        this.next = null;
    }
}

class MyStack {
    constructor() {
        this.top = null; 
    }

    push(a) {
        const newNode = new StackNode(a);
        newNode.next = this.top;
        this.top = newNode;
    }

    pop() {
        if(this.top === null){
            return -1;
        }
        
        const firstNode = this.top;
        this.top = this.top.next;
        return firstNode.data;
    }

    peek(){
        if(this.top === null){
            return -1;
        }

        return this.top.data;
    }

    isEmpty(){
        return this.top === null;
    }

    size(){
        if(this.top === null){
            return 0;
        }
        let count = 0;
        let temp = this.top;
        while(temp !== null){
            count++;
            temp = temp.next;
        }
        return count;
    }
}

// - Driver Code

// Create a new stack
const stack = new MyStack();

// Test isEmpty on an empty stack
console.log("Is stack empty?", stack.isEmpty());  // Output: true

// Push elements onto the stack
stack.push(10);
stack.push(20);
stack.push(30);

// Test size of the stack
console.log("Stack size:", stack.size());  // Output: 3

// Peek the top element
console.log("Top element:", stack.peek());  // Output: 30

// Pop elements from the stack
console.log("Popped element:", stack.pop());  // Output: 30
console.log("Popped element:", stack.pop());  // Output: 20

// Test size after popping elements
console.log("Stack size after popping:", stack.size());  // Output: 1

// Peek the top element again
console.log("Top element after popping:", stack.peek());  // Output: 10

// Pop the last element
console.log("Popped element:", stack.pop());  // Output: 10

// Test isEmpty on an empty stack
console.log("Is stack empty after popping all elements?", stack.isEmpty());  // Output: true

// Try to pop from an empty stack
console.log("Popped element from empty stack:", stack.pop());  // Output: -1

// Try to peek into an empty stack
console.log("Peek into empty stack:", stack.peek());  // Output: -1
