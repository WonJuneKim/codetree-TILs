const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input.shift());
const studentData = input.map(line => line.split(' '));

class Student {
  constructor(name, kor, eng, math) {
    this.name = name;
    this.kor = kor;
    this.eng = eng;
    this.math = math;
    this.total = kor + eng + math;
  }
}

const students = studentData.map(
  ([name, kor, eng, math]) =>
    new Student(name, Number(kor), Number(eng), Number(math))
);

students.sort((a, b) => a.total - b.total);

students.forEach(({ name, kor, eng, math }) => {
  console.log(name, kor, eng, math);
});