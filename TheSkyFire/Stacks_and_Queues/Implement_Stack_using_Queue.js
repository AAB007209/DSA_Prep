// - Implement Stack using Queue (Leetcode: 225)
// Link - https://leetcode.com/problems/implement-stack-using-queues/description

function MyStack(){
    this.queue1 = [];
    this.queue2 = [];
};

// - This is using two queues Approach
MyStack.prototype.push = function(x) {
    this.queue2.push(x);

    // Comes into picture after first insertion is done.
    while(this.queue1.length > 0){
        this.queue2.push(this.queue1.shift());
    }

    // References are interchanged to make the queue2 
    [this.queue1, this.queue2] = [this.queue2, this.queue1];
};


MyStack.prototype.pop = function() {
    if(this.queue1.length === 0) return null;
    return this.queue1.shift();
};


MyStack.prototype.top = function() {
    if (this.queue1.length === 0) {
        return null;
    }
    return this.queue1[0]; 
};

MyStack.prototype.empty = function() {
    return this.queue1.length === 0;
};

// - Below code is using only one queue Approach
function MyStack2(){
    this.queue = [];
}

MyStack2.prototype.push = function(x){
    this.queue.push(x); // Push into the queue

    // We rotate the queue to maintain its stack principle order
    for(let i=0; i<this.queue.length - 1; i++){
        this.queue.push(this.queue.shift()); // Move the front element to the back of the queue.
    }
}

MyStack2.prototype.pop = function(){
    return this.queue.shift();
}

MyStack2.prototype.top = function(){
    return this.queue[0];
}

MyStack2.prototype.empty = function(){
    return this.queue.length === 0;
}

// - Driver code
const stack = new MyStack2();
stack.push(1);
stack.push(2);
stack.push(3);
console.log(stack.top()); // Output: 3 (top element)
console.log(stack.pop()); // Output: 3 (remove top element)
console.log(stack.pop()); // Output: 2
console.log(stack.empty()); // Output: false
console.log(stack.pop()); // Output: 1
console.log(stack.empty()); // Output: true