const { GreenTea } = require("./GreenTea");
const { Sugar } = require("./Sugar");

const tea = new Sugar(new GreenTea());
console.log(tea.getDescription()); // Green Tea + Sugar
console.log(tea.getCost());        // 50
