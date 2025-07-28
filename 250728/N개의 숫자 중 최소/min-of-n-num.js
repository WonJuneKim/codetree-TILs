const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");

let n = Number(input[0]);
let arr = input[1].split(" ").map(Number);

let minVal = arr[0];

let minCnt = 0;

for (let i =0; i<n; i++) {
    if(minVal > arr[i]) {
        minVal = arr[i];
    }
}

for(let i = 0; i<n; i++) {
    if(arr[i] === minVal) {
        minCnt++;
    }
}

console.log(minVal, minCnt);
