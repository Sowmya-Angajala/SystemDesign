// ATM States
class ATMState {
  insertCard() {
    console.log("Operation not allowed in current state");
  }

  enterPin() {
    console.log("Operation not allowed in current state");
  }

  withdrawCash() {
    console.log("Operation not allowed in current state");
  }

  dispenseCash() {
    console.log("Operation not allowed in current state");
  }
}

// Idle State
class IdleState extends ATMState {
  constructor(atm) {
    super();
    this.atm = atm;
  }

  insertCard() {
    console.log("Card inserted. Please enter your PIN.");
    this.atm.setState(this.atm.cardInsertedState);
  }
}

// Card Inserted State
class CardInsertedState extends ATMState {
  constructor(atm) {
    super();
    this.atm = atm;
  }

  enterPin(pin) {
    if (pin === this.atm.correctPin) {
      console.log("PIN verified successfully.");
      this.atm.setState(this.atm.authenticatedState);
    } else {
      console.log("Incorrect PIN. Card ejected.");
      this.atm.setState(this.atm.idleState);
    }
  }
}

// Authenticated State
class AuthenticatedState extends ATMState {
  constructor(atm) {
    super();
    this.atm = atm;
  }

  withdrawCash(amount) {
    if (amount <= this.atm.balance) {
      console.log(`Withdrawing ₹${amount}...`);
      this.atm.balance -= amount;
      this.atm.setState(this.atm.dispensingCashState);
    } else {
      console.log("Insufficient balance.");
    }
  }
}

// Dispensing Cash State
class DispensingCashState extends ATMState {
  constructor(atm) {
    super();
    this.atm = atm;
  }

  dispenseCash() {
    console.log("Cash dispensed. Please take your card.");
    this.atm.setState(this.atm.idleState);
  }
}

// ATM Context
class ATM {
  constructor() {
    this.idleState = new IdleState(this);
    this.cardInsertedState = new CardInsertedState(this);
    this.authenticatedState = new AuthenticatedState(this);
    this.dispensingCashState = new DispensingCashState(this);

    this.correctPin = 1234;
    this.balance = 10000;
    this.state = this.idleState;
  }

  setState(state) {
    this.state = state;
  }

  insertCard() {
    this.state.insertCard();
  }

  enterPin(pin) {
    this.state.enterPin(pin);
  }

  withdrawCash(amount) {
    this.state.withdrawCash(amount);
  }

  dispenseCash() {
    this.state.dispenseCash();
  }
}

// ---- Testing ----
const atm = new ATM();

atm.insertCard();        // Card inserted → Move to CardInserted
atm.enterPin(1234);      // Correct PIN → Move to Authenticated
atm.withdrawCash(2000);  // Withdraw cash → Move to DispensingCash
atm.dispenseCash();      // Dispense → Back to Idle
