const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split(" ");

function isPrime(n) {
    for (let i = 2; i<n; i++) {
        if(n%i === 0)
        return false;
    }
    return true;
}

let a = Number(input[0]);
let b = Number(input[1]);

let sum = 0;
for (let i=a; i<=b; i++) {
    if(isPrime(i)) {
        sum += i;
    }
}

console.log(sum);