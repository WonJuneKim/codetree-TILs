const fs = require("fs");

const input = fs.readFileSync(0).toString().trim().split('\n');

const codenames = [];
const scores = [];

for (let i = 0; i < input.length; i++) {
    const [codename, score] = input[i].split(' ');
    
    codenames.push(codename);
    scores.push(parseInt(score, 10));
}

class Agent {
    constructor(codename, score) {
        this.codename = codename;
        this.score = score;
    }
}

const agents = [];
for (let i =0; i<5; i++) {
    agents.push(new Agent(codenames[i], scores[i]));
}

let minAgent = agents[0];

for(let i =0; i<agents.length; i++){
    if(agents[i].score <minAgent.score) {
        minAgent = agents[i];
    }
}

console.log(minAgent.codename, minAgent.score);