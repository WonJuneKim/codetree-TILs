const fs = require('fs');

let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let sums = [];

for (let i =0; i<input.length; i++) {
    let numbers = input[i].split(' ').map(Number);
    let sum = 0;
    for(let j=0; j<numbers.length; j++) {
        sum += numbers[j];
    }
    sums.push(sum);
}

sums.forEach(sum => console.log(sum));