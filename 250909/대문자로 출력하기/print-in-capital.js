const fs = require("fs");
let input = fs.readFileSync(0).toString().trim();

let str = "";

for (let i =0; i<input.length; i++) {
    let ch = input[i];
    if(ch >="A" && ch <="Z") {
        str += ch;
    } else if(ch >="a" && ch <="z") {
        str += ch.toUpperCase();
    }
}

console.log(str);