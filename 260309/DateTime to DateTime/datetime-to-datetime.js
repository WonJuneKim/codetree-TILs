const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [A, B, C] = input[0].split(' ').map(Number);

let startMin = (24 * 60 * 11) + (60 * 11) + 11;

let result = (24 * 60 * A) + (60 * B) + C -startMin;

if(result <0) {
    console.log(-1);
} else {
    console.log(result);
}