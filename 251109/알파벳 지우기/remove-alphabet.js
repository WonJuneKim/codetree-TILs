const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");

let a = input[0];
let b = input[1];

let aValue = "";
let bValue = "";

for (let i = 0; i<=a.length; i++) {
    let char = a[i];
    if(char >='0' && char<='9') {
        aValue += char;
    }
    aValue = Number(aValue);
}

for (let i = 0; i<=a.length; i++) {
    let char = b[i];
    if(char >='0' && char<='9') {
        bValue += char;
    }
    bValue = Number(bValue);
}

console.log(aValue+bValue);