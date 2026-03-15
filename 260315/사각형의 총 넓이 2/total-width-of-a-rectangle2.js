const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const rects = input.slice(1, n + 1).map(line => line.split(' ').map(Number));

const OFFSET = 100;
const SIZE = 2* OFFSET;
const sheets = Array.from({length: SIZE}, ()=>Array(SIZE).fill(0));

for(let [x,y,a,b] of rects) {
    const sx = x + OFFSET;
    const sy = y + OFFSET;
    const ex = a + OFFSET;
    const ey = b + OFFSET;

    for(let i =sx; i<ex; i++) {
        for(let j = sy; j<ey; j++) {
            sheets[i][j] =1;
        }
    }
}

let sum =0;

for(let i =0; i<SIZE; i++) {
    for(let j =0; j<SIZE; j++) {
        if(sheets[i][j] === 1) sum++;
    }
}

console.log(sum);