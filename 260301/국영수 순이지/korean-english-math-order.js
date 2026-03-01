const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const rawStudentData = input.slice(1, n + 1);

class Student {
    constructor (name, kor, eng, math) {
        this.name = name;
        this.kor = kor;
        this.eng = eng;
        this.math = math;
    }
}

function cmp(a,b) {
    if(a.kor !== b.kor) return b.kor-a.kor;
    if(a.eng !== b.eng) return b.eng- a.eng;
    return b.math - a.math;
}

const studentData = rawStudentData.map(line => {
    const [name, kor, eng, math] = line.split(" ");
    return new Student(name, kor, eng, math);
});

studentData.sort(cmp);

studentData.forEach(student => {
    console.log(student.name, student.kor, student.eng, student.math);
})
