const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");

let index = 0;
let sum = 0;

while (true) {

    let age = Number(input[index]);

    if(parseInt(age/10) !==2) {
        let average = (sum/index).toFixed(2);
        console.log(average);
        break;
    }

    index++;
    sum += age;

}