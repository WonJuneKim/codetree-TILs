const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");

let sumVal = 0;
let cnt = 0;

for (let i = 1; i <= 10; i++) {
    let a = Number(input[i]);
    if (a>=0 && a<=200) {
        sumVal += a;
        cnt++;
    }
}

console.log(sumVal, (sumVal/cnt).toFixed(1));