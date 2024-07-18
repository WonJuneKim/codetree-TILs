const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split(".");

let yyyy = Number(input[0]);
let mm = Number(input[1]);
let dd = Number(input[2]);

console.log(`${mm}-${dd}-${yyyy}`);