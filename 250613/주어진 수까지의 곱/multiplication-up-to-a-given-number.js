const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split(" ");

let a = input[0];
let b = input[1];

let prod =1;

for (let i=a; i<=b; i++) {
    prod *= i;
}

console.log(prod);

