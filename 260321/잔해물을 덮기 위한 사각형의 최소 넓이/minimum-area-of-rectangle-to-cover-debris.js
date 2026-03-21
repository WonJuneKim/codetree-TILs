const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const rect1 = input[0].split(' ').map(Number);
const rect2 = input[1].split(' ').map(Number);

const OFFSET = 1000;
const SIZE = OFFSET * 2 + 1;

const grid = Array.from({length: SIZE}, ()=> Array(SIZE).fill(0));

let [a,b,x,y] = rect1;

a += OFFSET;
b += OFFSET;
x += OFFSET;
y += OFFSET;

for(let i = a; i<x; i++) {
    for(let j = b; j<y; j++) {
        grid[i][j] = 1;
    }
}

let [sx, sy, ex, ey] = rect2;

sx += OFFSET;
sy += OFFSET;
ex += OFFSET;
ey += OFFSET;

for(let i =sx; i<ex; i++) {
    for(let j = sy; j<ey; j++) {
        grid[i][j] = 0;
    }
}

//0이 아닌 칸의 행의 최소 최대 번호, 열의 최소 최대 번호

let minX = SIZE, maxX = -1, minY = SIZE, maxY= -1;

for(let i =0; i<SIZE; i++) {
    for(let j =0; j<SIZE; j++) {
        if(grid[i][j]===1) {
            if(i<minX) minX = i;

            if(i>maxX) maxX = i;

            if(j<minY) minY = j;

            if(j>maxY) maxY = j;
        }
    }
}

console.log((maxX-minX+1)*(maxY-minY+1));