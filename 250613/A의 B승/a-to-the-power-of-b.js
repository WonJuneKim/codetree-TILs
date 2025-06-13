const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split(" ");

let a = Number(input[0]);
let b = Number(input[1]);

let answer = 1;

for (let i = 1; i<=b; i++) {
    answer *= a;
}

console.log(answer);