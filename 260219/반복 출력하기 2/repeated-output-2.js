const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);

function printStr(n) {
    if (n===0) return;

    console.log("HelloWorld");
    printStr(n-1);
}


printStr(n);