const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");

let str = input[0];
let ans = "";

for (let i = 1; i<input.length; i++) {
    if(str.length ===1) break;
    let n = Number(input[i]);

    if(n >= str.length) {
        ans = str.slice(0, str.length-1);
    } else {
        ans = str.slice(0, n) + str.slice(n+1);
    }
    str = ans;
    console.log(str);
}