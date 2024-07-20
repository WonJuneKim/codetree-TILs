const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split(" ");

let a = Number(input[0]);
let b = Number(input[1]);
let c = Number(input[2]);

let resultA = (a<b && a<c) ? 1 : 0;
let resultB = (a===b & b===c) ? 1 : 0;

console.log(resultA, resultB);