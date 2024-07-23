const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split(" ");

let a = Number(input[0]);
let b = Number(input[1]);

let result = "0.";

for (i=1; i<=20; i++) {
    result += parseInt(a*10/b);
    a = parseInt(a*10%b);
}

console.log(result);