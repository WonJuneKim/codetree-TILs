const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const personLines = input.slice(1, n + 1);

class Person {
    constructor(name, addr, city) {
        this.name = name;
        this.addr= addr;
        this.city = city;
    }
}

const people = [];

for(let i = 0; i<n; i++) {
    const [name, addr, city] = personLines[i].split(" ");
    people.push(new Person(name, addr, city));
}

people.sort((a,b) =>{
    if(a.name>b.name) return 1;
    if(a.name<b.name) return -1;
    return 0;
})

console.log(`name ${people[n-1].name}`);
console.log(`addr ${people[n-1].addr}`);
console.log(`city ${people[n-1].city}`);