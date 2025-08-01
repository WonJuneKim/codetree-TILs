const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");

let n = 5;
for(let i = 0; i<n; i++) {
    let arr = input[i].toUpperCase();

    console.log(arr);
}