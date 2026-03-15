const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const rectA = input[0].split(' ').map(Number);
const rectB = input[1].split(' ').map(Number);
const rectM = input[2].split(' ').map(Number);

const OFFSET = 1000;
const SIZE = OFFSET * 2 + 1;

const sheets = Array.from({length : SIZE}, ()=>Array(SIZE).fill(0));

function Change(arr, n) {
    const [a,b, x,y] = arr;
    const sx = a+ OFFSET;
    const sy = b+ OFFSET;
    const ex = x + OFFSET;
    const ey = y+ OFFSET;

    for(let i = sx; i<ex; i++) {
        for(let j=sy; j<ey; j++) {
            sheets[i][j] = n;
        }
    }
}

Change(rectA, 1);
Change(rectB, 1);
Change(rectM, 0);

let count = 0;

for(let i =0; i<SIZE; i++) {
    for(let j =0; j<SIZE; j++) {
        if(sheets[i][j] ===1) count++;
    }
}

console.log(count);