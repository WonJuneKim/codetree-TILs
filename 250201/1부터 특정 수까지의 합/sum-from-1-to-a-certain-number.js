let fs = require("fs");
let N = fs.readFileSync(0).toString().trim();
let result = 0;

function Sum(n) {
    for(let i=1; i<=n; i++) {
        result += i;
    }
    console.log(Math.floor(result/10));
}

Sum(N);