class Queue {
    constructor() {
        this.q = [];
        this.head = -1;
        this.tail = -1;
    }

    push(item) {
        this.q.push(item);
        this.tail++;
    }

    empty() {
        return (this.head === this.tail);
    }

    size() {
        return (this.tail - this.head);
    }

    pop() {
        if (this.empty()) {
            throw new Error("Queue is empty");
        }
        return this.q[++this.head];
    }
    
    front() {
        if (this.empty()) {
            throw new Error("Queue is empty");
        }
        return this.q[this.head+1];
    }
}

const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const q = new Queue;

const commands = input.slice(1, n + 1);
commands.forEach(command => {
    if (command.startsWith("push")) {
        const x = Number(command.split(" ")[1]);
        q.push(x);
    } else if (command === "pop") {
        console.log(q.pop());
    } else if (command === "size") {
        console.log(q.size());
    } else if (command === "empty") {
        console.log(q.empty() ? 1 : 0);
    } else {
        console.log(q.front());
    }  
});