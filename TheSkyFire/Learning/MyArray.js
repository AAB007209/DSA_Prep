// - Custom Array and some of the Important Functionalities

class MyArray {
    constructor() {
        this.length = 0;
        this.data = {};
    }

    push(item) {
        this.data[this.length] = item;
        this.length++;
        return this.length;
    }

    get(index) {
        return this.data[index];
    }

    pop() {
        const lastItem = this.data[this.length - 1];
        delete this.data[this.length - 1];
        this.length--;
        return lastItem;
    }

    shift() {
        const firstItem = this.data[0];

        for (let i = 0; i < this.length; i++) {
            this.data[i] = this.data[i + 1];
        }

        delete this.data[this.length - 1];
        this.length--;
        return firstItem;
    }

    deleteByIndex(index) {
        const item = this.data[index];
        for (let i = index; i < this.length - 1; i++) {
            this.data[i] = this.data[i + 1];
        }
        delete this.data[this.length - 1];
        this.length--;
        return item;
    }
}

const myNewArray = new MyArray();
// console.log(myNewArray);

// -> Below is the push() method
myNewArray.push("Apple");
myNewArray.push("Mango");
myNewArray.push("Orange");

// -> Below is the pop() method
// console.log(myNewArray.pop()); // Removes Orange if executed

// -> Below is the get() method
// console.log(myNewArray.get(0)); // Get the index element we want

// -> Below is the shift() method
// console.log(myNewArray);
// console.log(`The first element removed(shifted) is:`, myNewArray.shift());
// console.log(myNewArray);

// -> Below is the deleteByIndex() method
console.log(`Deleted Item:`, myNewArray.deleteByIndex(1));
console.log(myNewArray);
