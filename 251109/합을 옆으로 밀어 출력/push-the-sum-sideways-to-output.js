const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");

let sum = 0;

for (let elem of input) {
    sum += Number(elem);
}

let sumStr = sum.toString();

if(sumStr >='10') {
    sumStr = sumStr.slice(1) +sumStr[0];
}

console.log(sumStr);

