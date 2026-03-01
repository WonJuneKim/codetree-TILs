const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const forecasts = input.slice(1, n + 1).map(line => line.split(' '));

class Data {
    constructor (date, day, weather) {
        this.date = date;
        this.day = day;
        this.weather = weather;
    }
}

const datas = forecasts.map(
    ([date, day, weather]) => new Data(date, day, weather)
);

const rainyDay = datas
.filter (data => data.weather ==="Rain")
.sort((a,b) => (a.date < b.date ? -1 : 1));

const earliestRainy = rainyDay[0];

console.log(`${earliestRainy.date} ${earliestRainy.day} ${earliestRainy.weather}`);
