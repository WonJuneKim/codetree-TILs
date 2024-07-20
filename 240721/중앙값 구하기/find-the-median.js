const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split(" ");

let a = Number(input[0]);
let b = Number(input[1]);
let c = Number(input[2]);

let middle = (a+b+c)/3;

if (a===middle) {
    console.log(a);
} else {
    if (b===middle){
        console.log(b);
    } else {
        console.log(c);
    }
}