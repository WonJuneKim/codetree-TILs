const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");

for (let i =0; i<input.length; i++) {
    if (input[i] === "END") break;

    console.log(input[i].split("").reverse().join(""));
}