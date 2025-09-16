const fs = require("fs");

let input = fs.readFileSync(0).toString().trim().split(" ");

let [a, b] = input;
let str1= "";
let str2 = "";
let i = 0;
let j = 0;

while(true) {
    if(a[i]>=0 && a[i] <=9) {
        str1 += a[i];
        i++;
        continue;
    } else{
        break;
    }
}

while(true) {
    if(b[j] >=0 && b[j] <=9) {
        str2 += b[j];
        j++;
        continue;
    } else{
        break;
    }
}

console.log(Number(str1) + Number(str2));