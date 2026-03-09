const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

class Student {
    constructor (height, weight, number) {
        this.height = height;
        this.weight = weight;
        this.number = number;
    }
}

const n = Number(input[0]);
const students = [];
for (let i = 1; i <= n; i++) {
    const [height, weight] = input[i].split(" ").map(Number);
    students.push(new Student(height, weight, i));
}

function cmp(a,b) {
    if(a.height !== b.height) return b.height - a.height;
    if(a.weight !== b.weight) return b.weight - a.weight;

    return a.number - b.number;
}

students.sort(cmp);

for(let i = 0; i<n; i++) {
    console.log(students[i].height, students[i].weight, students[i].number);
}