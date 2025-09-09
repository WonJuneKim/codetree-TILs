const fs = require("fs");
let input = fs.readFileSync(0).toString().trim();

let ans = "";

for (let i =0; i<input.length; i++) {
    if(input[i] ==="e") {
        ans = input.slice(0, i) + input.slice(i+1);
        break;
    }
}

console.log(ans);