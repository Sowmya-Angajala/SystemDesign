const Beverage = require("./Beverage");

class Sugar extends Beverage {
    beverage: any;

    constructor(beverage: any) {
        super();
        this.beverage = beverage;
    }

    getDescription() {
        return this.beverage.getDescription() + " + Sugar";
    }

    getCost() {
        return this.beverage.getCost() + 10;
    }
}

module.exports = { Sugar };
