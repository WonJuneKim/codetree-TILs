const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split(" ");

let a = Number(input[0]);
let b = Number(input[1]);

if(a>=b) {
    let temp = a;
    b =a;
    a =temp;
}
let sumVal = 0;

for (let i=a; i<=b; i++) {
    if(i%5 === 0){
        sumVal += i;
    }
}

console.log(sumVal);