const fs = require("fs");
let arr = fs.readFileSync(0).toString().trim().split(" ").map(Number);

let sumVal = 0;

for (let i =0; i<8; i++) {
    sumVal += arr[i];
}

let average = (sumVal/8).toFixed(1);

console.log(average);