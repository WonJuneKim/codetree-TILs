const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const s = input[0];

let arr = [...s];
arr.sort();

let sortedStr = arr.join("");
console.log(sortedStr);