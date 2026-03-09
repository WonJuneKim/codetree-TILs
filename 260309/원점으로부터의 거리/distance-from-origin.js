const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const points = input.slice(1).map(line => line.trim().split(' ').map(Number));

const pointsWithIdx = points.map((p,i) => [p[0], p[1], i+1]);

pointsWithIdx.sort((a,b) => {
    const distA = Math.abs(a[0]) + Math.abs(a[1]);
    const distB = Math.abs(b[0]) + Math.abs(b[1]);

    if(distA === distB) return a[2] - b[2];

    return distA - distB;
    })

    pointsWithIdx.forEach(point =>{
        console.log(point[2]);
    })