const fs =require("fs");
let input = fs.readFileSync(0).toString().trim().split(" ");

let [a, b] = input;

let ab = a+b;
let ba = b+a;

let result = Number(ab) + Number(ba);

console.log(result);