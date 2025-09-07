const fs = require("fs");
let input = fs.readFileSync(0).toString().trim();

let a = input[0];
let n = input[1];
let ans ="";
 
for(let i = 0; i<input.length; i++) {
    if(input[i] ===n) {
        ans +=a;
    } else {
        ans +=input[i];
    }

}

console.log(ans);