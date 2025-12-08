const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split(" ");
let n = Number(input[0]);
let m = Number(input[1]);
// 최대 공약수

function gcd(a, b) {
    const limit = (a < b) ? a : b;
    let result = 1;

    for (let i=1; i<=limit; i++) {
        if(n%i ===0 && m%i ===0) {
            result = i;
        }
    }
    process.stdout.write(result+ "\n");
}

gcd(n, m);