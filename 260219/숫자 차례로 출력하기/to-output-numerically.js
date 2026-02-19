const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const n = Number(input[0]);

function printNumAsc(n) {
    if(n===0) return;
    
    printNumAsc(n-1);
    process.stdout.write(n+ " ");
}

function printNumDesc(n) {
    if(n===0) return;
    
    process.stdout.write(n+ " ");
    printNumDesc(n-1);
}

printNumAsc(n);
process.stdout.write("\n");
printNumDesc(n);