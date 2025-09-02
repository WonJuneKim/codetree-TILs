const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split(" ");

let n = 10;
for (let i = 0; i<n; i++) {
    console.log(input[i]);
}