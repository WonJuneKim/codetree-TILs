const fs = require("fs");
let input = fs.readFileSync(0).toString().trim();

let length = input.length;

let existsA = "No";
let existsB = "No";

for(let i= 0; i<length-1; i++) {
    if(input[i] ==="e" && input[i+1]==="e") {
        existsA = "Yes";
    }

    if(input[i] ==="a" && input[i+1] ==="b") {
        existsB = "Yes";
    }
}

console.log(existsA, existsB);