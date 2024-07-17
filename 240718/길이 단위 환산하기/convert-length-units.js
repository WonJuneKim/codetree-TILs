const fs = require("fs");

let ft = fs.readFileSync(0).toString();

ft = Number(ft);

result = ft * 30.48;

console.log(result.toFixed(1));