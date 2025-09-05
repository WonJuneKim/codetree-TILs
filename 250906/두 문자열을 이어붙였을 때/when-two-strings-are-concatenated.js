const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");

let a = input[0];
let b = input[1];

let str1 = a+b;
let str2 = b+a;

if(str1 === str2) {
    console.log("true");
}else {
    console.log("false");
}