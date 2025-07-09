const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split(" ").map(Number);

let sumOdd = 0;
let sumEven = 0;
for(let i =0; i<10; i+=2) {
    sumOdd +=input[i];
}

for(let i =1; i<10; i+=2) {
    sumEven +=input[i];
}

if(sumOdd > sumEven) {
    console.log(sumOdd - sumEven);
} else if(sumOdd < sumEven) {
    console.log(sumEven -sumOdd);
}else {
    console.log(0);
}