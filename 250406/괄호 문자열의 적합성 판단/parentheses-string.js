const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const bracketStr = input[0];

class Stack {
    constructor() {
        this.items = [];
    }

    push(item) {
        this.items.push(item);
    }

    empty() {
        return this.items.length ===0;
    }

    size() {
        return this.items.length;
    }

    pop() {
        if (this.empty()) {
            throw new Error("Stack is empty");
        }

        return this.items.pop();
    }

    top() {
        if(this.empty()) {
            throw new Error("Stack is empty")
        }

        return this.items[this.items.length -1];
    }
}

const stack = new Stack();
let isValid = true;

for (const char of bracketStr) {
    if(char === '(') {
        stack.push(char);
    } else if (char === ')') {
        if (stack.empty()) {
            isValid = false;
            break;
        }
        stack.pop();
    }
}

if (!stack.empty()) {
    isValid = false;
}

console.log(isValid ? "Yes " : "No");