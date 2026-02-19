const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");
const [n, m] = input[0].split(" ").map(Number);
const A = input[1].split(" ").map(Number);


function calculate(m) {
    let sum = 0;

    while (m>1) {
        sum += A[m];
        if(m===1) break;
        if(m%2 !==0) {
            m -= 1;
            sum+= A[m];
        } else {
            m /=2;
            sum+= A[m];
        }
    }
    return sum;
}

console.log(calculate(m));
