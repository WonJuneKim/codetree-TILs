const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");

let n = Number(input[0]);
let arr = input[1].split(" ").map(Number);

let cnt = 0;
let idx = -1;

for(let i =0; i<n; i++) {
    if(cnt === 3) {
        console.log(idx+1);
        break;
    }

    if(arr[i] ===2) {
        cnt ++;
        idx = i;
    }
}