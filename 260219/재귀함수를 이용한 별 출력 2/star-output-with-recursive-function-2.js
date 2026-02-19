const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
let n = Number(input[0]);

function printStar(n) {
    let result = "";
    
    if(n ===0) return;

    for(let i = 0; i<n; i++) {
        result+= "*" + " ";
    }
    
    console.log(result);
    printStar(n-1);
    console.log(result);
}

printStar(n);
