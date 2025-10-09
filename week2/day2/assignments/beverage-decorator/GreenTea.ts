const Beverage = require("./Beverage");

class GreenTea extends Beverage {
    getDescription() {
        return "Green Tea";
    }

    getCost() {
        return 40;
    }
}

module.exports = { GreenTea };
