// - Implement Queue using Stacks (Leetcode: 232)
// Link - https://leetcode.com/problems/implement-queue-using-stacks/description

function MyQueue() {
    this.stack1 = [];
    this.stack2 = [];
};

MyQueue.prototype.push = function(x) {
    this.stack1.push(x);
};

MyQueue.prototype.pop = function() {

    // Transfer all elements from stack1 to stack2 for popping the front element.
    if(this.stack2.length === 0){
        while(this.stack1.length > 0){
            this.stack2.push(this.stack1.pop());
        }
    }
    return this.stack2.pop(); // Popping the element
};

MyQueue.prototype.peek = function() {

    // Transfer all elements from stack1 to stack2 for popping the front element.
    if(this.stack2.length === 0){
         while(this.stack1.length > 0){
            this.stack2.push(this.stack1.pop());
        }
    }
    return this.stack2[this.stack2.length - 1]; 
};

MyQueue.prototype.empty = function() {
    return this.stack1.length === 0 && this.stack2.length === 0;
};

// - Driver Code

// Create a Queue
var queue = new MyQueue();

// Test push operation
console.log("Pushing elements: 1, 2, 3");
queue.push(1);
queue.push(2);
queue.push(3);

// Test peek operation
console.log("Peek element:", queue.peek()); // Should return 1

// Test pop operation
console.log("Popping element:", queue.pop()); // Should return 1
console.log("Peek element after pop:", queue.peek()); // Should return 2

// Test pop operation again
console.log("Popping element:", queue.pop()); // Should return 2
console.log("Peek element after pop:", queue.peek()); // Should return 3

// Test if the queue is empty
console.log("Is queue empty?", queue.empty()); // Should return false

// Pop the last element
console.log("Popping element:", queue.pop()); // Should return 3

// Test if the queue is empty after popping all elements
console.log("Is queue empty?", queue.empty()); // Should return true

// Attempt to pop from an empty queue
console.log("Popping from empty queue:", queue.pop()); // Should handle gracefully, return undefined or null
