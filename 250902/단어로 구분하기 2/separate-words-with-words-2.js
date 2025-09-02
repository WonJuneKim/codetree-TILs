const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split(" ");

let n = 0;

for(let i =0 ; i<10; i+=2) {
    console.log(input[i]);
}