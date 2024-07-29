const fs = require("fs");
let input = fs.readFileSync(0).toString().trim();

let n = Number(input);

let result ="";
for (let i=n; i<=100; i++) {
    if(i<60) {
        result += "F" + " ";
    } else if(i<70) {
       result += "D" + " ";
    } else if(i<80) {
        result += "C" + " ";
    } else if(i<90) {
       result += "B" + " ";
    } else {
        result += "A" + " ";
    }
}

console.log(result);