const fs = require("fs");
let input = fs.readFileSync(0).toString().trim();

let l  = input.length;

console.log(input);

for(let i = 0; i<l; i++) {
    input = input.slice(-1)+input.slice(0,-1);
    console.log(input);
}