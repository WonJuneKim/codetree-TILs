const fs = require("fs");
let input = fs.readFileSync(0).toString().trim();

let n = input.length;

input = input.slice(0,1) + "a" + input.slice(2,n-2) + "a" + input.slice(n-1);

console.log(input);