const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [A, B] = input[0].split(" ").map(Number);

function isDigitSumEven(n) {
    const digits = String(n).split("").map(Number);
    const sum = digits.reduce((acc,cur) => acc+cur, 0);
    return sum% 2 ===0;
}

function isPrime(n) {
    if(n<2) return false;
    for(let i =2; i<n; i++) {
        if(n%i ===0) return false;
    }
    return true;
}

let cnt = 0;
for(let n = A; n<=B; n++) {
    if(isPrime(n) && isDigitSumEven(n)) {
        cnt++;
    }
}

console.log(cnt);