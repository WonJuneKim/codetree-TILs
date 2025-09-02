const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");

let n = 4;
let arr = new Array(n);
for(let i = 0; i <n; i++) {
    arr[i] = input[i];
}

for(let i = 3; i>=0; i--) {
    console.log(arr[i]);
}