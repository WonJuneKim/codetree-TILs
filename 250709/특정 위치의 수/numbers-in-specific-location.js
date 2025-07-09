const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split(" ").map(Number);


const sum = input[2] + input[4] + input[9];

console.log(sum);