const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");

let arr1 = input[0].split(" ");
let arr2 = input[1].split(" ");

let ageA = Number(arr1[0]);
let genderA = arr1[1];
let ageB = Number(arr2[0]);
let genderB = arr2[1];

if ((ageA >=19 && genderA ==="M") ||(ageB >=19 && genderB ==="M") ) {
    console.log(1);
} else {
    console.log(0);
}