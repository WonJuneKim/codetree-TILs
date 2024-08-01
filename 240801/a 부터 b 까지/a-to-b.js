const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split(" ");

let a = Number(input[0]);
let b = Number(input[1]);
let result = "";
let i = a;

while(i<=b) {
    if(i%2===1) {
        result += i + " "
        i *= 2;
    } else {
        result += i + " "
        i +=3;
    }
} 

console.log(result);