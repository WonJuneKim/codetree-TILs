const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const rects = input.slice(1, 1 + n).map(line => line.split(' ').map(Number));

const OFFSET = 100;
const SIZE = OFFSET * 2 + 1;
//2차원 배열 생성
const sheets = Array.from({length: SIZE }, ()=>Array(SIZE).fill(0));

//좌하단 점이 주어졌으니 나머지는 +8 등으로 조정가능
for(let i = 0; i<n; i++) {
    let [sx, sy] = rects[i];

    sx += OFFSET;
    sy += OFFSET;
    ex = sx + 8;
    ey = sy + 8;

    for(let j = sx; j<ex; j++) {
        for(let k = sy; k<ey; k++) {
            sheets[j][k] =1;
        }
    }
}

let sum = 0;

for(let i =0; i<SIZE; i++) {
    for(let j = 0; j<SIZE; j++) {
        if(sheets[i][j] ===1) {
            sum +=1;
        }
    }
}

console.log(sum);