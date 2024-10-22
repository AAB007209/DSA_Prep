// - Implement Queue using linkedlist
// Link - https://www.geeksforgeeks.org/problems/implement-queue-using-linked-list/1

class QueueNode{
    constructor(a){
        this.data = a;
        this.next = null;
    }
}

class MyQueue{
    constructor(){
        this.front = null;
        this.rear = null;
    }

    push(x){
        const newNode = new QueueNode(x);
        if(this.front === null && this.rear === null){
            this.front = newNode;
            this.rear = newNode;
        }else{
            this.rear.next = newNode;
            this.rear = newNode;
        }
    }

    pop(){
        if(this.front === null){
            return -1;
        }

        const popElement = this.front.data;
        this.front = this.front.next;

        if(this.front === null){
            this.rear = null;
        }

        return popElement;
    }

    peek(){
        if(this.front === null){
            return -1;
        }
        return this.front.data;
    }

    isEmpty(){
        return (this.front === null && this.rear === null);
    }

    size(){
        if(this.front === null) {
            return 0;
        }

        let temp = this.front;
        let count=0;

        while(temp !== null){
            count++;
            temp = temp.next;
        }
        return count;
    }
}

// - Driver Code

const queue = new MyQueue();

queue.push(10);
queue.push(20);
queue.push(30);

console.log(queue.pop());  // Output: 10
console.log(queue.peek()); // Output: 20
console.log(queue.isEmpty()); // Output: false
console.log(queue.size()); // Output: 2

queue.pop();
queue.pop();
console.log(queue.isEmpty()); // Output: true
console.log(queue.size()); // Output: 0
console.log(queue.peek()); // Output: -1
