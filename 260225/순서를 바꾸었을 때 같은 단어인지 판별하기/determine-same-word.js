const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const str1 = input[0];
const str2 = input[1];

const sortedA = [...str1].sort().join("");
const sortedB = [...str2].sort().join("");

function checkSame(x,y) {
    const xLength = x.length;
    const yLength = y.length;

    if(xLength !== yLength) return "No";

    for(let i=0; i<xLength; i++) {
        if(x[i] !== y[i]) return "No";
    }

    return "Yes";
}

console.log(checkSame(sortedA, sortedB));