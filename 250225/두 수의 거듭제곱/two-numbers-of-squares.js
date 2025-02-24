const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split(" ");

let a = Number(input[0]);
let b = Number(input[1]);

function calculate(a,b) {
    return a**b;
}

console.log(calculate(a,b));