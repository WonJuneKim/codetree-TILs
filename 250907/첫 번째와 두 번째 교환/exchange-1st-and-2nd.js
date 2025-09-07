const fs = require("fs");
let input = fs.readFileSync(0).toString().trim();

let a = input[0];
let b = input[1];
let result = "";

for(let i =0; i<input.length; i++) {
    if(input[i] ===a) {
        result += b;
    }

    else if(input[i] ===b) {
        result += a;
    } else {
        result += input[i];
    }
}

console.log(result);