// - Problem Description (Leetcode: 155. Min Stack)
// Link - https://leetcode.com/problems/min-stack/description

/*

Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.

Implement the MinStack class:

1. MinStack() initializes the stack object.
2. void push(int val) pushes the element val onto the stack.
3. void pop() removes the element on the top of the stack.
4. int top() gets the top element of the stack.
5. int getMin() retrieves the minimum element in the stack.
6. You must implement a solution with O(1) time complexity for each function.

*/

function MinStack() {
    this.stack = [];
};

MinStack.prototype.push = function(val) {
    let min_val = this.getMin();
    if(min_val === null || min_val > val){
        min_val = val;
    }

    this.stack.push([val, min_val]);
};


MinStack.prototype.pop = function() {
    this.stack.pop();
};

MinStack.prototype.top = function() {
    return this.stack.length ? this.stack[this.stack.length - 1][0] : null;
};

MinStack.prototype.getMin = function() {
    return this.stack.length ? this.stack[this.stack.length - 1][1] : null; 
};

// Driver code
const minStack = new MinStack();

// Testing push()
minStack.push(5);
console.log(`Top: ${minStack.top()}`); // Expected: 5
console.log(`Min: ${minStack.getMin()}`); // Expected: 5

minStack.push(3);
console.log(`Top: ${minStack.top()}`); // Expected: 3
console.log(`Min: ${minStack.getMin()}`); // Expected: 3

minStack.push(7);
console.log(`Top: ${minStack.top()}`); // Expected: 7
console.log(`Min: ${minStack.getMin()}`); // Expected: 3

minStack.push(2);
console.log(`Top: ${minStack.top()}`); // Expected: 2
console.log(`Min: ${minStack.getMin()}`); // Expected: 2

// Testing pop()
minStack.pop();
console.log(`Top after pop: ${minStack.top()}`); // Expected: 7
console.log(`Min after pop: ${minStack.getMin()}`); // Expected: 3

minStack.pop();
console.log(`Top after pop: ${minStack.top()}`); // Expected: 3
console.log(`Min after pop: ${minStack.getMin()}`); // Expected: 3