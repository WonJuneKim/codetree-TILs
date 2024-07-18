const fs = require("fs");
let input = fs.readFileSync(0).toString().split("\n");

let a = Number(input[0]);
let b = Number(input[1]);
let result = a+b;

console.log(result.toFixed(2));