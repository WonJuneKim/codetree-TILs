const fs= require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");
let n = Number(input[0]);

let i=1;

while (i<=n) {
    let x = Number(input[i]);
    if (x % 2 === 1 && x%3 ===0) {
        console.log(x);
    }
    i += 1;
}