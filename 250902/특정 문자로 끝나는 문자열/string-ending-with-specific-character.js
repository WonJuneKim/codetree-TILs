const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");

let n = input.length;
let str = input[n-1];
let cnt = 0;

for(let i = 0; i<n-1; i++) {
    let strLength = input[i].length;

    if(input[i][strLength-1] === str) {
        console.log(input[i]);
        cnt++;
    }
}

if(cnt === 0) {
    console.log("None");
}