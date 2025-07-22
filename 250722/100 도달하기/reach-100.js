 const fs = require("fs");
 let n = Number(fs.readFileSync(0).toString().trim());

 let arr = [];

arr[0] = 1;
arr[1] = n;

let i = 2;

while (true) {
    arr[i] = arr[i-1] + arr[i-2];

    if (arr[i]>100) {
        break;
    }
    i++;

}

console.log(arr.join(" "));