const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split(" ");

let c = input[0];
let n = input[1];
let result = "";

if (c==="A") {
    for(let i=1; i<=n; i++) {
        result += (i+ " ");
    }
} else {
    for(let i=n; i>=n; i-- ) {
        result  += (i+ " ");
    }
}

console.log(result);