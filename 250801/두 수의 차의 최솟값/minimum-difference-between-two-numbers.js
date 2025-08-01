const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");

let n = Number(input[0]);
let arr = input[1].split(" ").map(Number);

let minVal = arr[1] - arr[0];

for(let i = 2; i<n; i++) {
    if(minVal > arr[i] - arr[i-1]) {
        minVal = arr[i] - arr[i-1];
    }
}

console.log(minVal);