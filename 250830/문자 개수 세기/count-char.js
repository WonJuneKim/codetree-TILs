const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");

let str1 = input[0];
let str2 = input[1];

let cnt = 0;

for (let i =0; i<str1.length; i++) {
    if(str1[i] === str2) {
        cnt++;
    }
}

console.log(cnt);