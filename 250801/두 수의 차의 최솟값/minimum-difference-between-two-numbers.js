const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");

let n = Number(input[0]);
let arr = input[1].split(" ").map(Number);

let minVal = arr[1] - arr[0];

for(let i =0; i<n; i++) {
    for(let j = i+1; j<n; j++) {
        let minDiff = arr[j] - arr[i];

        if(minVal > minDiff) {
            minVal = minDiff;
        }
        
    }
}

console.log(minVal);