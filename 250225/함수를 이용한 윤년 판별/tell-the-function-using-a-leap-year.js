const fs = require("fs");
let y = fs.readFileSync(0).toString().trim();

function isSpecialYear(n) {
    if (n%100 === 0 && n%400 !== 0) return 'false';

    if(n%4 ===0) return 'true'; 
    
    else return 'false';
}

console.log(isSpecialYear(y));