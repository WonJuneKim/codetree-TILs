const fs = require("fs");
let input = fs.readFileSync(0).toString().trim();

let n = input.length;
let ans = input.slice(0,1) + input.slice(2, n-2) + input.slice(n-1);

console.log(ans);