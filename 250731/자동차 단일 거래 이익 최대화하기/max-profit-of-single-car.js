const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");

let n = Number(input[0]);
let arr = input[1].split(" ").map(Number);

let gain = 0;



for(let i = 0; i<n; i++) {
    for(let j = 1; j<n; j++) {
        if(j<i) {
            continue;
        }

        else if((arr[j]-arr[i]) >gain) {
            gain = arr[j]-arr[i];
        }
    }
}

console.log(gain);