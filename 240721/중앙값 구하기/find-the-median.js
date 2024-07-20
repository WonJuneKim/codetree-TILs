const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split(" ");

let a = Number(input[0]);
let b = Number(input[1]);
let c = Number(input[2]);

if (a>b && a>c) {
    if(b>c){
        console.log(b);
    } else {
        console.log(c);
    }
 } else if(a>b && a<c) {
    console.log(a);
 } else if(a<b && b<c) {
    console.log(b);
 } else if(a<b && c<a) {
    console.log(a);
 }