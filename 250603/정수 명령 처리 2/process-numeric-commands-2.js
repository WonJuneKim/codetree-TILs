const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const commands = input.slice(1, n + 1);

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

const queue = new Queue;


for (let i=1; i<=n; i++) {
    queue.commands[i]
}