const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split('\n');

let n = input[0]
let sumVal = 0;
let cnt = 0;

for (let i = 1; i <= n; i++) {
    let a = Number(input[i]);
        sumVal += a;
        cnt +=1;
}

console.log(sumVal, (sumVal/cnt).toFixed(1));