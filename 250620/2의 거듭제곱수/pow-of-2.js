const fs = require("fs");
let n = Number(fs.readFileSync(0).toString().trim());

let count = 1;

while (true) {
    if (n/2 ===1) {
        console.log(count);
        break;
    }
    n /= 2;
    count++;
}