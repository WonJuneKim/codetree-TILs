let fs = require("fs");
let n = fs.readFileSync(0).toString().trim();

function isMagicNumber(n) {
    return n % 2 === 0 && (parseInt(n[0])+parseInt(n[1])) % 5 === 0;
}

if (isMagicNumber(n)) {
    console.log('Yes');
} else {
    console.log('No');
}