const fs = require("fs");
let n = Number(fs.readFileSync(0).toString().trim());

let result = "";

for(i=n; i<101; i++) {
    result += (i+ " ");
}

console.log(result);