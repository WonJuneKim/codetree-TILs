const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const n = Number(input[0]);
const studentsInput = [];
for (let i = 1; i <= n; i++) {
    studentsInput.push(input[i].split(' '));
}


function cmp (prev, cur) {
    return prev.height-cur.height;
}

class Student {
    constructor (name, height, weight) {
        this.name = name;
        this.height = height;
        this.weight = weight;
    }
}


const students = studentsInput.map(
    ([name, height, weight]) => new Student(name, Number(height), Number(weight))
);

students.sort(cmp);

for(let i =0; i<students.length; i++) {
    let student = students[i];
    console.log(`${student.name} ${student.height} ${student.weight}`);
}

