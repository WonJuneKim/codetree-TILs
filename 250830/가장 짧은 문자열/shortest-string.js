const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");

let max = input[0].length;
let min = input[0].length;

for (let i = 0; i<=2; i++) {
    
    if(input[i].length > max) {
        max = input[i].length;
    }

    if(input[i].length <min) {
        min = input[i].length;
    }
}

console.log(max-min);