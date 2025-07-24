const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");

let resultArr = Array(5).fill(0);
let aCnt = 0;

for (let i =0; i<3; i++) {
    let patient = input[i].split(" ");

    if(patient[0] === "Y" && (Number(patient[1]) >= 37)) {
        resultArr[0]++;
        aCnt++;
    } else if(patient[0] === "N" && (Number(patient[1]) >= 37)){
        resultArr[1]++;
    } else if (patient[0] === "Y" && (Number(patient[1]) < 37)) {
        resultArr[2]++;
    } else {
        resultArr[3]++;
    }
}

if (aCnt >=2) {
    resultArr[4] = "E";
} else {
    resultArr[4] =null;
}

console.log(resultArr.join(" "));
