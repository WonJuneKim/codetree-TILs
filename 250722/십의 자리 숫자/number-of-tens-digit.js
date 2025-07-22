const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split(" ").map(Number);

let numArr = Array(10).fill(0);

for (let i = 0; i<input.length; i++) {
    let a = parseInt(input[i]/10);
    
    numArr[a]++;
}

for (let i =1; i<=9; i++) {
    console.log(i + " - " + numArr[i]);
}