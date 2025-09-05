const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");

let str = input[0];
let target = input[1];

let ans = str.indexOf(target);

console.log(ans);