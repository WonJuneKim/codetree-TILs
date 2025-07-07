const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split(" ").map(Number);

let sumVal = 0;
let cnt = 0;

for(let i = 0; i<10; i++) {
    if(input[i] ==0) break;

    sumVal += input[i];
    cnt++;

}

console.log(sumVal, (sumVal/cnt).toFixed(1));