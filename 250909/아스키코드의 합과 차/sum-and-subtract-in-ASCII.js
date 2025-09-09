const fs = require("fs");
let input = fs.readFileSync(0).toString().trim();

let [a, b] = input.split(" ");

a = a.charCodeAt(0);
b = b.charCodeAt(0);


if(a>b) {
    console.log(a+b, a-b);
} else {
    console.log(a+b, b-a);
}