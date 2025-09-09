const fs = require("fs");
let input = fs.readFileSync(0).toString().trim();

let str = "";

for(let i = 0; i<input.length; i++) {
    let ch = input[i];

    if(ch >=0 && ch <=9) {
        str += input[i];
    } else if (ch >="A" && ch<="Z") {
        str += input[i].toLowerCase();
    } else if (ch >="a" && ch <="z") {
        str+= input[i];
    }
}

console.log(str);