const fs = require("fs");
let input = fs.readFileSync(0).toString().trim();

let ans = "";

ans = input.slice(1) + input[0];

console.log(ans);