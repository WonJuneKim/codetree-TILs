const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split(" ");

let a = input[0];
let b = Number(input[1]);

a = a.charCodeAt(0);
b = String.fromCharCode(b);

console.log(a, b);