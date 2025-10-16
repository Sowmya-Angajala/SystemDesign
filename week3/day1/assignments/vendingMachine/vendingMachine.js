// --- State Interface (Conceptual) ---
class State {
  insertCoin(machine) {}
  makeSelection(machine) {}
  dispense(machine) {}
}

// --- Concrete States ---
class IdleState extends State {
  insertCoin(machine) {
    console.log(" Coin inserted. Moving to Processing state.");
    machine.setState(machine.processingState);
  }

  makeSelection(machine) {
    console.log(" Please insert a coin first.");
  }

  dispense(machine) {
    console.log(" Cannot dispense. No selection made.");
  }
}

class ProcessingState extends State {
  insertCoin(machine) {
    console.log(" Coin already inserted. Please make a selection.");
  }

  makeSelection(machine) {
    console.log(" Selection made. Moving to Dispensing state.");
    machine.setState(machine.dispensingState);
  }

  dispense(machine) {
    console.log(" Please make a selection first.");
  }
}

class DispensingState extends State {
  insertCoin(machine) {
    console.log(" Please wait, currently dispensing item.");
  }

  makeSelection(machine) {
    console.log(" Already dispensing, please wait.");
  }

  dispense(machine) {
    console.log(" Dispensing item...");
    console.log(" Returning to Idle state.");
    machine.setState(machine.idleState);
  }
}

// --- Context Class ---
class VendingMachine {
  constructor() {
    this.idleState = new IdleState();
    this.processingState = new ProcessingState();
    this.dispensingState = new DispensingState();

    this.currentState = this.idleState;
  }

  setState(state) {
    this.currentState = state;
  }

  insertCoin() {
    this.currentState.insertCoin(this);
  }

  makeSelection() {
    this.currentState.makeSelection(this);
  }

  dispense() {
    this.currentState.dispense(this);
  }
}

// --- Test the Vending Machine ---
const machine = new VendingMachine();

machine.insertCoin();    // Idle → Processing
machine.makeSelection(); // Processing → Dispensing
machine.dispense();      // Dispensing → Idle
