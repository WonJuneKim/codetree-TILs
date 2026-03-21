const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const arr = input.slice(1, n + 1).map(Number);

let max = 1;
let cnt = 1;
for(let i=1; i<n; i++) {
    if(arr[i]=== arr[i-1]) {
        cnt ++;
        if(cnt >max) {
            max = cnt;
        }
    } else {
        cnt = 1;
    }
}

console.log(max);