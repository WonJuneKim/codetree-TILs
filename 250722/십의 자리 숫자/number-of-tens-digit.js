const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split(" ").map(Number);

let numArr = Array(10).fill(0);
let i = 0;

while(true) {

    if(input[i] === 0) break;

    let a = parseInt(input[i]/10);
    numArr[a]++;
    i++;

}

for (let i =1; i<=9; i++) {
    console.log(i + " - " + numArr[i]);
}