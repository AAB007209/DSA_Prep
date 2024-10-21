// - Implementing Queue using Arrays (GeeksforGeeks)
// Link - https://www.geeksforgeeks.org/problems/implement-queue-using-array/1

class MyQueue {
    constructor(){
		this.front = 0;
		this.rear = 0;
		this.arr = new Array(100005);
	}
	
	//Function to push an element x in a queue. (enqueue)
	enqueue(x)
	{
	    this.arr[this.rear] = x;
        this.rear++;
	} 

    //Function to pop an element from queue and return that element. (dequeue)
	dequeue()
	{
		if(this.front !== this.rear){
            let index = this.arr[this.front];
            delete this.arr[this.front];
            this.front++;
            return index;
        }
        return -1;
	} 

    isEmpty(){
        return this.front === this.rear;
    }

    isFull() {
        return this.rear === this.arr.length;
    }

    size(){
        return this.rear - this.front;
    }

    peek() {
        if (!this.isEmpty()) {
            return this.arr[this.front]; // Return the front element
        }
        return -1; // If queue is empty return -1;
    }

    rear() {
        if (!this.isEmpty()) {
            return this.arr[this.rear - 1];
        }
        return -1;
    }

    clear() {
        this.front = 0;
        this.rear = 0;
        this.arr = [];
    }
}

// - Driver code

const queue = new MyQueue();

queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);

console.log(queue.peek());    // Output: 10 (front element)
console.log(queue.rear);    // Output: 30 (rear element)
console.log(queue.size());    // Output: 3
console.log(queue.dequeue()); // Output: 10 (remove front)
console.log(queue.peek());    // Output: 20 (new front after dequeue)
console.log(queue.isEmpty()); // Output: false
queue.clear();
console.log(queue.isEmpty()); // Output: true
