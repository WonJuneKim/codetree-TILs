const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n")

let str = input[0];
let num = Number(input[1]);

let n = str.length;
let answer = "";

for(let i = n-1; i>=n-num; i--) {
    answer += str[i];
}

console.log(answer);