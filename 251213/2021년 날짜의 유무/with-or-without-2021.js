const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
let [m, d] = input[0].split(" ").map(Number);





function isValid(m,d) {
    const daysInMonth = [31, 28, 31, 30,31,30,31,31,30,31,30,31];

    if(m>12) return "No";

    const maxDay =daysInMonth[m-1];
    if(d>maxDay) return "No";

    return "Yes";

}

console.log(isValid(m,d));


