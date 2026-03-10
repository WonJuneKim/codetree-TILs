const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const n = Number(input[0]);

let digits = [];
let m =n;

while (true) {
    if(m<2) {
        digits.push(m);
        break;
    }

    digits.push(m%2);
    m = Math.floor(m/2);
}

let binaryNumber = '';
for(let i =digits.length-1; i>=0; i--) {
    binaryNumber += digits[i];
}

console.log(binaryNumber);