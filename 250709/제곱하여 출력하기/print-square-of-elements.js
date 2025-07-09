const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");
let n = Number(input[0]);

let arr =  input[1].split(" ").map(Number);

for(let i = 0; i<n; i++) {
    arr[i] *= arr[i];
}


console.log(arr.join(" "));