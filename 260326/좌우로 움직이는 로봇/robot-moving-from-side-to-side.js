const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, m] = input[0].split(' ').map(Number);
const movesA = input.slice(1, 1 + n);
const movesB = input.slice(1 + n, 1 + n + m);

function buildTimeLine(moves) {
    const timeLine = [0];
    let pos = 0;

    for(const move of moves) {
        const [t,d] = move.split(" ");
        const time = Number(t);

        for(let i =0; i<time; i++) {
            pos += (d=== "R" ? 1 : -1);
            timeLine.push(pos);
        }
    }
    return timeLine;
}

const lineA = buildTimeLine(movesA);
const lineB = buildTimeLine(movesB);

const limitTime = Math.max(lineA.length, lineB.length);

const lastA = lineA[lineA.length-1];
const lastB = lineB[lineB.length-1];

let count = 0;

for(let t = 1; t<limitTime; t++) {
    if (t >= lineA.length && t >= lineB.length) break;

    const prevA = t-1 < lineA.length ? lineA[t-1] : lastA;
    const prevB = t-1 < lineB.length ? lineB[t-1] : lastB;

    const currA = t<lineA.length ? lineA[t] : lastA;
    const currB = t<lineB.length ? lineB[t] : lastB;

    if(prevA !== prevB && currA === currB) {
        count++;
    }
}

console.log(count);