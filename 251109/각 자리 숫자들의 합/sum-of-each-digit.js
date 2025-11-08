const fs = require("fs");
let n = Number(fs.readFileSync(0).toString().trim());

let nStr = n.toString();
let sum = 0;

for (let elem of nStr) {
    sum += Number(elem);
}

console.log(sum);
