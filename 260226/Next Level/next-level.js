const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [user_id, levelStr] = input[0].split(' ');
const user_level = parseInt(levelStr);

class Profile {
    constructor(id="codetree", level = 10) {
        this.id = id;
        this.level = level;
    }
}

const defaultUser = new Profile();

const inputUser = new Profile(user_id, user_level);


console.log(`user ${defaultUser.id} lv ${defaultUser.level}`);
console.log(`user ${inputUser.id} lv ${inputUser.level}`);