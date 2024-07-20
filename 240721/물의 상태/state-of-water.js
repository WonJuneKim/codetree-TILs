const fs = require("fs");
let input = fs.readFileSync(0).toString().trim();

let n = Number(input);

if (n>=100) {
    console.log("vapor");
} else if (n<0) {
    console.log("ice");
} else {
    console.log("water");
}