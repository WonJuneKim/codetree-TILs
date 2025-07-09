const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split(" ").map(Number);

let sumEven = 0;
let sumVal = 0;
let cnt =0;

for (let i = 1; i<10; i+=2) {
    sumEven += input[i];
}

for(let i =2; i<10; i+=3)  {
    sumVal += input[i];
    cnt++;

}

console.log(sumEven,(sumVal/cnt).toFixed(1));