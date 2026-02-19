const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

let n = Number(input[0]);



function f(n) {
    if(n ===0) return 0;

    return (n%10)*(n%10) +f(parseInt(n/10));
}

console.log(f(n));