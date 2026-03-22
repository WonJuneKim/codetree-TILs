const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const [n, m] = input[0].split(' ').map(Number);
let line = 1;
const movesA = [];
for (let i = 0; i < n; i++) {
    const [d, t] = input[line++].split(' ');
    movesA.push([d, Number(t)]);
}
const movesB = [];
for (let i = 0; i < m; i++) {
    const [d, t] = input[line++].split(' ');
    movesB.push([d, Number(t)]);
}

function buildTimeline(moves) {
    const timeLine =[0];
    let pos = 0;

    for(const [d, t] of moves) {
        for(let i =0; i<t; i++) {
            pos += (d==="R" ? 1 : -1);
            timeLine.push(pos);
        }
    }

    return timeLine;
}

const lineA = buildTimeline(movesA);
const lineB = buildTimeline(movesB);

const maxTime = Math.max(lineA.length, lineB.length);

let lastA = lineA[lineA.length-1];
let lastB = lineB[lineB.length-1];

for(let t =1; t<maxTime; t++) {
    const posA = t<lineA.length ? lineA[t] : lastA;
    const posB = t<lineB.length ? lineB[t] : lastB;

    if(posA===posB) {
        console.log(t);
        return;
    }
}

console.log(-1);
