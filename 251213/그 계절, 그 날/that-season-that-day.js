const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");

const [y, m, d] = input[0].split(" ").map(Number);

function isYunYear(y) {
    if(y %4 ===0 && y%100 ===0 && y%400 ===0) return true;

    if(y %4 ===0 && y%100 ===0) return false;

    if(y%4 ===0) return true;
return false;
}

function isValid(y,m,d) {
    const maxDay = [31, 28,31,30,31,30,31,31,30,31,30,31];
    if(isYunYear(y)) {
        maxDay[1] = 29;
    }

    if(d>maxDay[m-1])return false;

return true;
}

function season(m) {
    if(m>=3 && m<=5) return "Spring";
    else if(m>=6 && m<=8) return "Summer";
    else if(m>=9 && m<=11) return "Fall";
    else return "Winter";
}


if(isValid(y,m,d)) {
    console.log(season(m));

}else {
    console.log(-1);
}
