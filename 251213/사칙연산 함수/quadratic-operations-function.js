const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

let [a, o, c] = input[0].split(" ");
a = Number(a);
c = Number(c);

function sum(a, b) {
    return a+b;
}

function subtract(a, b) {
    return a -b;
}

function multiply(a, b) {
    return a*b;
}

function divide(a,b) {
    if (b ===0) return null;
    return a/b;
}

let result;

switch (o) {
    case "+":
    result = sum(a,c);
    break;

    case "-":
    result= subtract(a,c);
    break;

    case "*":
    result= multiply(a,c);
    break;

    case "/":
    result = parseInt(divide(a,c));
    break;

}

if(result === undefined) {
    console.log("False");
} else {
    console.log(`${a} ${o} ${c} = ${result}`);
}