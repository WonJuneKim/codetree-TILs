const fs = require("fs");
let n = Number(fs.readFileSync(0).toString());

let quotients = [];
let current = n;
let divisor = 1;

while (true) {
    const result = parseInt(current / divisor);
    if(result <= 1)
    break;

    quotients.push(result);
    current = result;
    divisor++;
}

console.log(divisor);
