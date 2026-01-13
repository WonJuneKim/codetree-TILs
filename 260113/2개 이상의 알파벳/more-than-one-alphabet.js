const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const A = input[0];

function hasDiffChar(value) {
    let a = value[0];
    for(let i =1; i<value.length; i++) {
        if(value[i] !== a) return "Yes";
    }
    return "No";
}

console.log(hasDiffChar(A));