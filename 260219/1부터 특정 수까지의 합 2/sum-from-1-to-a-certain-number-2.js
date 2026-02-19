const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const n = Number(input);

function sumToN(n) {
    if(n===1) return 1;
    
    return sumToN(n-1) +n;
}

console.log(sumToN(n));