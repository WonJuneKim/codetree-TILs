const fs = require("fs");
let n = Number(fs.readFileSync(0).toString().trim());

let str = "";

for (let i = n; i>=1; i--) {
    str= "";
    for (let j = i; j>=1; j--) {
        str += "* ";
    }
    console.log(str);
}