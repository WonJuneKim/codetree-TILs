const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");

let a = input[0];
let b = input[1];
let cnt = 0;

for(let i=0; i<a.length; i++) {
    a = a.slice(-1) + a.slice(0, -1)
    cnt++;
    if(a ===b) break;

    if(cnt=== a.length) {
        cnt = -1;
    }
}

console.log(cnt);