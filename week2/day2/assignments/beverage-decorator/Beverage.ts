// CommonJS style abstract class
abstract class Beverage {
    abstract getDescription(): string;
    abstract getCost(): number;
}

module.exports = Beverage;
