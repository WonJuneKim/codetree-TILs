const fs= require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");
let n = Number(input[0]);
let cnt = 0;
let i=0;
while (i<n) {
    if (i % 2 === 1 && i%3 ===0) {
        console.log(i);
        i = Number(input[i+1]);
    }
}