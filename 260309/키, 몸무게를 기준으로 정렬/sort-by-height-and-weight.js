const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

class Person {
    constructor(name, height, weight) {
        this.name = name;
        this.height = height;
        this.weight = weight;
    }
}

const n = Number(input[0]);
const records = [];
for (let i = 1; i <= n; i++) {
  const [name, height, weight] = input[i].split(" ");
  records.push(new Person(name, Number(height), Number(weight)));
}

function cmp(a,b) {
    if(a.height !== b.height) return a.height - b.height;

    return b.weight - a.weight;
}

records.sort(cmp);

records.forEach(person => {
    console.log(`${person.name} ${person.height} ${person.weight}`);
})



