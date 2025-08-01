const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");

let arr2d = [];

for (let i = 0; i<4; i++) {
    arr2d.push(input[i].split(" ").map(Number));
    
}

let sumVal = 0;

for (let i =0; i<4; i++) {
    for (let j = 0; j<i+1; j++) {
        sumVal += arr2d[i][j];

    }
}

console.log(sumVal);