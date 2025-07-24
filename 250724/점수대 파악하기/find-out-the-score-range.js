const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split(" ").map(Number);

let numArr = Array(11).fill(0);

let i = 0;

while(input[i] !== 0) {
    let tenCount = parseInt(input[i]/10);

    numArr[tenCount]++;
    i++;
}

for(let j =10; j>=1; j--) {
    console.log(j*10 + " - " + numArr[j]);
}