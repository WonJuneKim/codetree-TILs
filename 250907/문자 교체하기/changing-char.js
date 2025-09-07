const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split(" ");

let a = input[0];
let b = input[1];

let str = a.slice(0,2);

b = str + b.slice(2);

console.log(b);