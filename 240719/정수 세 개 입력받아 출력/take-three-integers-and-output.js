const fs = require("fs");
let input = fs.readFileSync(0).toString().split("\n");

let mixed = input[0].split(" ");
let a = mixed[0];
let b = mixed[1];
let c = Number(input[1]);


console.log(a,b,c);