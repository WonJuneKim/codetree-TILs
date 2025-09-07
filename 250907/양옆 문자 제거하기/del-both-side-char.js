const fs = require("fs");
let input = fs.readFileSync(0).toString().trim();

let n = input.length;
let ans = input.slice(0,2) + input.slice(3, n-2) + input.slice(n-1);

console.log(ans);