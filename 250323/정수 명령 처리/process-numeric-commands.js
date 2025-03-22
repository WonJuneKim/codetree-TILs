const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

class Stack {
    constructor() {
        this.items = [];
    }

    push(item) {
        this.items.push(item);
    }

    empty() {
        return this.items.length === 0;
    }

    size() {
        return this.items.length;
    }

    pop() {
        if(this.empty()) {
            throw new Error("Stack is empty");
        }

        return this.items.pop();
    }

    top() {
        if (this.empty()) {
            throw new Error("Stack is empty");
        }

        return this.items[this.items.length -1];
    }
}

const n = Number(input[0]);
const s = new Stack();

for(let i = 1; i <=n; i++) {
    const command = input[i];

    if(command.startsWith("push")) {
        const x = Number(command.split(" ")[1]);
        s.push(x);
    } else if (command.startsWith("pop")) {
        console.log(s.pop());
    } else if (command ==="size") {
        console.log(s.size());
    } else if (command ==="empty") {
        console.log(s.empty()? 1: 0);
    } else {
        console.log(s.top());
    }
}