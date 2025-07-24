const fs = require("fs");
let input = fs.readFileSync(0).toString().trim();

let charArr = ["L", "E", "B", "R", "O", "S"];

let idx = -1;

for (let i=0; i<6; i++) {
    if(charArr[i] === input) {
        idx = i;
    }
}

if(idx === -1) {
    console.log("None");
} else {
    console.log(idx);
}