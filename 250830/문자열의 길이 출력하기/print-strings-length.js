const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");

let a = input[0].length;
let b = input[1].length;

console.log(a+b);