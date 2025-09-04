const fs = require("fs");
let input = fs.readFileSync(0).toString().trim();

for (let elem of input) {
    console.log(elem);
}