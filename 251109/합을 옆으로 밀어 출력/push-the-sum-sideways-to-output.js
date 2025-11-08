const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");

let n = input[0];
let sum = 0;

for (let i = 1; i<=n; i++) {
    sum += Number(input[i]);
}

let sumStr = sum.toString();

if(sumStr >='10') {
    sumStr = sumStr.slice(1) +sumStr[0];
}

console.log(sumStr);

