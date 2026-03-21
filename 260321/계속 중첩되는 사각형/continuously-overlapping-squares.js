const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const n = Number(input[0]);
const rectangles = [];
for (let i = 1; i <= n; i++) {
    const [x1, y1, x2, y2] = input[i].split(' ').map(Number);
    rectangles.push([x1, y1, x2, y2]);
}

const OFFSET = 100;
const SIZE = OFFSET * 2 + 1;

const grid = Array.from({length:SIZE}, ()=>Array(SIZE).fill(0));

for(let i =0; i<n; i++) {
    let [x1,y1,x2,y2] = rectangles[i];
    x1+= OFFSET;
    y1+= OFFSET;
    x2+= OFFSET;
    y2+= OFFSET;

    for(let j=x1; j<x2; j++) {
        for(let k = y1; k<y2; k++) {
            //1은 빨, 2는 파
            if(i%2 ===0) grid[j][k] =1;
            else grid[j][k]=2;
        }
    }
}

let cnt = 0;
for(let i =0; i<SIZE; i++) {
    for(let j = 0; j<SIZE; j++) {
        if(grid[i][j] ===2) cnt++;
    }
}

console.log(cnt);