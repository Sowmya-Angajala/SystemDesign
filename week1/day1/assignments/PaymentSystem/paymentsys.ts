// PaymentStrategy Interface
interface PaymentStrategy {
  pay(amount: number): void;
}

// Concrete Strategies
class CardPayment implements PaymentStrategy {
  pay(amount: number): void {
    console.log(`Processing card payment of ₹${amount}`);
  }
}

class UPIPayment implements PaymentStrategy {
  pay(amount: number): void {
    console.log(`Processing UPI payment of ₹${amount}`);
  }
}

class BitcoinPayment implements PaymentStrategy {
  pay(amount: number): void {
    console.log(`Processing Bitcoin payment of ₹${amount}`);
  }
}

// Context Class
class Payment {
  private strategy: PaymentStrategy;

  constructor(strategy: PaymentStrategy) {
    this.strategy = strategy;
  }

  setStrategy(strategy: PaymentStrategy): void {
    this.strategy = strategy;
  }

  process(amount: number): void {
    this.strategy.pay(amount);
  }
}

// Usage
const payment = new Payment(new CardPayment());
payment.process(1000); // Processing card payment of ₹1000

payment.setStrategy(new BitcoinPayment());
payment.process(2000); // Processing Bitcoin payment of ₹2000
