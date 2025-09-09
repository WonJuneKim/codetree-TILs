const fs = require("fs");
let input = fs.readFileSync(0).toString().trim();

let a = input.charCodeAt(0)+1;

if (input ==="z") {
    console.log("a");
} else{
    console.log(String.fromCharCode(a));

}


