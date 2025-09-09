const fs = require("fs");
let input = fs.readFileSync(0).toString().trim();

let sum = 0;

for(let i =0; i<input.length; i++) {
    if(input[i] >=0 && input[i] <=9) {
        sum += Number(input[i]);
    }
}

console.log(sum);