const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const n = Number(input[0]);

let count = 0;

function f(n) {
    if(n===1) {
        return count;
    }


    let remainder = n % 10;
    if(remainder %2 === 0) {
        count++;
        return f(parseInt(n/2));
    }
    else {
        count++;
        return f(parseInt(n/3));
    }
}

console.log(f(n));