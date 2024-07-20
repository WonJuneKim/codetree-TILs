const fs = require("fs");
let m = Number(fs.readFileSync(0).toString().trim());

if (m<=2 || m>=12) {
    console.log("Winter");
} else if(m>=9) {
    console.log("Fall");
} else if (m>=6) {
    console.log("Summer");
} else{
    console.log("Spring");
}