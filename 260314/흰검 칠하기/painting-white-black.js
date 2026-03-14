const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const commands = input.slice(1).map(line => line.split(' '));

//카운터를 두개 만들어야함

const OFFSET = 100000;
const SIZE = 200001;

//a 는 마지막으로 칠한 색을 기록하는 용도
const a = Array(SIZE).fill(0);
//각 배열은 해당 타일에 검, 흰 덧칠 횟수
const white = Array(SIZE).fill(0);
const black = Array(SIZE).fill(0);
let b= 0, w= 0, g=0;
let cur = OFFSET;

for(let i =1; i<=n; i++) {
    let [x, c] = input[i].split(" ");
    x = Number(x);

    if(c ==="L") {
        while (x>0) {
            a[cur] =1;
            white[cur] +=1;
            x -=1;

            if(x) {
                cur -= 1;
            }
        }
        } else {
            while(x>0) {
                a[cur] = 2;
                black[cur] +=1;
                x -=1;

                if(x) {
                    cur +=1;
                }
            }
        }
    }

for(let i =0; i<SIZE; i++) {
    if(black[i] >=2  && white[i] >=2) {
        g+=1;
    }
    else if (a[i] ===1) {
        w +=1;
    } else if (a[i] ===2) {
        b+=1;
    }
}

console.log(w,b,g);