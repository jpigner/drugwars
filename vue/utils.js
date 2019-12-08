class Utils {
    constructor() {
        this.valueRange = [
            { name: "Cocaine", max: 30000, min: 15000, units: 2 },
            { name: "Heroin", max: 14000, min: 5000, units: 5 },
            { name: "Acid", max: 4500, min: 1000, units: 10 },
            { name: "Weed", max: 900, min: 300, units: 25 },
            { name: "Speed", max: 250, min: 70, units: 50 },
            { name: "Ludes", max: 60, min: 10, units: 100 }];
    }

    randomRange(end, start) {
        return Math.floor((Math.random() * end) + start);
    }
}