const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");

let index= 0;

while (true) {
    let prod = Number(input[index].split(" ")[0]) *  Number(input[index].split(" ")[1]);
    let text = input[index].split(" ")[2];

    console.log(prod);
    index++;

    if (text ==="C") {
        break;
    }

}