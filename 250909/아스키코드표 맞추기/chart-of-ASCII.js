const fs =require("fs");
let input = fs.readFileSync(0).toString().trim().split(" ").map(Number);

let str ="";

for(let i = 0; i<input.length; i++) {
    str += String.fromCharCode(input[i]) + " ";
}

console.log(str);