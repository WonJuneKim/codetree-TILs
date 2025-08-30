const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");

let str1 = input[0];
let str2 = input[1];

let str = "";

for (let i= 0; i<str1.length; i++) {
    if(str1[i] !== " ") {
        str += str1[i];
    }
}

for (let i= 0; i<str2.length; i++) {
    if(str2[i] !== " ") {
        str += str2[i];
    }
}

console.log(str);