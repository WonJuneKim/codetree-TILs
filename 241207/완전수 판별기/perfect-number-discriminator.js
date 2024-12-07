const fs = require("fs");
let n = Number(fs.readFileSync(0).toString().trim());

function isPerfectNumber(num) {
    if (num <= 1) return false;
    let sum = 0;

    for (let i = 1; i <= Math.floor(num / 2); i++) {
        if (num % i === 0) {
            sum += i;
        }
    }

    return sum === num;
}

if (isPerfectNumber(n)) {
    console.log('P');
} else {
    console.log('N');
}