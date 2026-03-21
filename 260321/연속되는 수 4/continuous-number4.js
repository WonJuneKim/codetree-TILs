const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const arr = input.slice(1, 1 + n).map(Number);

let ans = 1;
let cnt = 1;

for(let i=1; i<n; i++) {
    if(arr[n] > arr[n-1]) {
        cnt++;
    } else {
        cnt = 1;
    }

    ans = Math.max(ans, cnt);
}

console.log(ans);