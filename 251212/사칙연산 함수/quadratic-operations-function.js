const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

let [a, o, c] = input[0].split(" ");
a = Number(a);
c = Number(c);

function sum(a, b) {
    return a+b;
}

function subtract(a, b) {
    return a > b ? a-b : b-a;
}

function multiply(a, b) {
    return a*b;
}

function divide(a,b) {
    return a > b ? a / b : b / a;
}
let result = "";
if(o ==="+") {
    result = sum(a, c);
} else if(o === "-") {
    result = subtract(a,c);
} else if(o === "/") {
    result = divide(a,c);
} else if(o === "*") {
    result = multiply(a,c);
} else {
    result = "False";
}

console.log(a+ " " +o+ " "+c+ " " + "=" +" "+ result);