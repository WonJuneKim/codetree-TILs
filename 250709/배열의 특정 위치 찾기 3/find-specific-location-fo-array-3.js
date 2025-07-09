const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split(" ").map(Number);
let n = input.length;


for (let i = 0; i<n; i++) {
    if(input[i] ===0) {
        console.log(input[i-1] + input[i-2] + input[i-3]);
        break;
    }
}