let fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split(" ");

let A = Number(input[0]);
let B = Number(input[1]);

function contains369(n) {
    let s = n.toString();
    for (let i=0; i<s.length; i++) {
        if(s[i] ==='3' || s[i] ==='6' || s[i] === '9') {
            return true;
        }
    }
    return false;
}

function isMultipleOf3(num) {
    return num % 3 === 0;
}

let count = 0;
for (let i = A; i <= B; i++) {
    if (contains369(i) || isMultipleOf3(i)) {
        count++;
    }
}

console.log(count);