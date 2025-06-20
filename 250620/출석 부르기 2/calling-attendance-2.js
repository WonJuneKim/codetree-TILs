const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");


let index = 0;

while (true) {
    let name = input[index];
    index++;

    if(name === '1') {
        console.log("John");
    }
    else if(name === '2') {
        console.log("Tom");
    }
    else if(name ==='3') {
        console.log("Paul");
    }
    else if(name ==='4') {
        console.log("Sam");
    }
    else {
        console.log("Vacancy");
        break;
    }
}