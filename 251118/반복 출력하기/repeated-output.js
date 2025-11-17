const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const n = Number(input[0]);

function printNlines(n) {
    for(let i =0; i<n; i++) {
        process.stdout.write("12345^&*()_\n");
    }
}

printNlines(n);