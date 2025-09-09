const fs = require("fs");
let input = fs.readFileSync(0).toString().trim();

let ans = "";

for(let i = 0; i<input.length; i++) {
    let ch = input[i];

    if(ch>="A" && ch<="Z") {
        ans+= ch.toLowerCase();
    } else if(ch>="a" && ch<="z") {
        ans += ch.toUpperCase();
    }
}

console.log(ans);