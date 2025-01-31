const fs = require("fs");
let N = Number(fs.readFileSync(0).toString().trim());

const sampleLine = "12345^&*()_";

function printNlines() {
    for (let i=0; i<N; i++) {
        console.log(sampleLine);
    }
}

printNlines(N);
