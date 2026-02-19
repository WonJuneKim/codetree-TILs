const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");
const [n, m] = input[0].split(" ").map(Number);
const A = input[1].split(" ").map(Number);


function calculate(x,arr) {
    let sum = 0;

    while (x>=1) {
        sum += arr[x-1];

        if(x%2 !==0) {
            x -= 1;
        } else {
            x /=2;

        }
    }
    return sum;
}

console.log(calculate(m,A));
