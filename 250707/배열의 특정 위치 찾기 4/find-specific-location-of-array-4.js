const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split(" ").map(Number);

let sum = 0;
let cnt = 0;

for (let i =0; i<10; i++) {
    if(input[i] ===0) break;

    if((input[i]%2)===0) {
        sum += input[i];
        cnt++;
    }
}

console.log(cnt, sum);