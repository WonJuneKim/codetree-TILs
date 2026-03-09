const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

class Student {
    constructor(name, height, weight) {
        this.name = name;
        this.height = height;
        this.weight = weight;
    }
}

const students = [];
for (let i = 0; i < 5; i++) {
  const [name, heightStr, weightStr] = input[i].split(' ');
  const height = Number(heightStr);
  const weight = Number(weightStr);
  students.push(new Student(name, height, weight));
}

function cmpName(a,b) {
    if(a.name > b.name) return 1;
    if(a.name < b.name) return -1;
    return 0;
}


function cmpHeight(a,b) {
    return b.height - a.height;
}

const byName = [...students];
const byHeight = [...students];


byName.sort(cmpName);
console.log("name");
byName.forEach(student=> {
    console.log(`${student.name} ${student.height} ${student.weight}`);
})

console.log();
byHeight.sort(cmpHeight);
console.log("height");
byHeight.forEach(student => {
   console.log(`${student.name} ${student.height} ${student.weight}`);
})


