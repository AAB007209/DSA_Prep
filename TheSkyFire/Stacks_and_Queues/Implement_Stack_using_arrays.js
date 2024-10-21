// - Implementing Stack using Arrays
// Link - https://www.geeksforgeeks.org/problems/implement-stack-using-array/1

class Mystack {
    constructor(){
        this.arr = new Array(1000);
        this.top = -1;
    }

    push(x){
        let index = this.top;
        this.arr[index] = x;
        this.top++;
    }

    pop(){
        if(this.top !== -1){
            this.top--;
            let index = this.arr[this.top];
            delete this.arr[this.top];
            return index;
        }
        return -1;
    }

    peek(){
        if(this.top > 0){
            let peekElement = this.arr[this.top - 1];
            return peekElement;
        }
        return -1;
    }

    top(){
        if(this.top > 0){
            return this.arr[this.top - 1];
        }
        return -1;
    }

    isEmpty(){
        return this.top === -1;
    }

    // Stack is full if the top reaches the arr length
    ifFull(){
        return this.top === this.arr.length;
    }

    // We can also clear the whole stack
    clear() {
        this.arr = new Array(1000); // Reinitialize the array
        this.top = 0; // Reset the top pointer
    }
}

const stack = new Mystack();

// Inserting elements into the stack
stack.push(10);
stack.push(20);

console.log(`\nPeek element at this moment: ${stack.peek()}`);

stack.push(30);

// Returns false because stack is not empty
console.log(`\nChecking whether Stack is empty or not: ${stack.isEmpty()}\n`);

// Removing Elements from the Stack using FILO
console.log(`Popping element: `,stack.pop());
console.log(`Popping element: `,stack.pop());
console.log(`Popping element: `,stack.pop());

console.log(`Returns -1 if we try to pop() when stack is empty: `,stack.pop()); // Would return -1 because no elements in the stack to be removed.

