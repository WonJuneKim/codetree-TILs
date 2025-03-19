const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const commands = input.slice(1);

let arr= [];
let output = [];

for(let i =0; i<n; i++){
    const parts = commands[i].split(' ');
    const cmd = parts[0];


if(cmd === 'push_back') {
    arr.push(Number(parts[1]));
} else if(cmd === 'pop_back') {
    arr.pop();
} else if(cmd === 'size') {
    output.push(arr.length);
} else if (cmd ==='get'){
    output.push(arr[Number(parts[1]) - 1]);
}
}

console.log(output.join('\n'));