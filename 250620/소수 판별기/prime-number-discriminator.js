const fs = require("fs");
let n = Number(fs.readFileSync(0).toString().trim());

let satisfied = true;

for (let i = 2; i<n; i++) {
    if (n%i ===0) {
        satisfied = false;
    }
}

if(satisfied === true) {
    console.log("P");
}
else {
    console.log("C");
}