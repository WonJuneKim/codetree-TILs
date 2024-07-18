const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("-");

let xxxx = Number(input[1]);
let yyyy = Number(input[2]);

console.log(`010-${yyyy}-${xxxx}`);