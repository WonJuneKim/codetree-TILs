const fs = require("fs");

let input = fs.readFileSync(0).toString().trim().split(" ");

let a = Number(input[0]);
let b = Number(input[1]);

if (a%2 ===0) {
    a += 1;
}

let result = "";

for(let i = a; i<=b; i+=2) {
    result += (i+" ");    
}

console.log(result);