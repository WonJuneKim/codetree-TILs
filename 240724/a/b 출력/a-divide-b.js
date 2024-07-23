const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split(" ");

let a = Number(input[0]);
let b = Number(input[1]);

let result= 0;


for (i=1; i<=20; i++) {
    result += parseInt(a/b)*(0.1**(i-1));
    a = parseInt((a%b)*10);
    console.log(result);
}