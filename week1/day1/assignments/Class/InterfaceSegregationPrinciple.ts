// Segregated interfaces
interface Printer {
  print(): void;
}

interface Scanner {
  scan(): void;
}

interface Fax {
  fax(): void;
}

// OldPrinter implements only what it needs
class OldPrinter implements Printer {
  print(): void {
    console.log("Printing document...");
  }
}

// SmartPrinter implements all three interfaces
class SmartPrinter implements Printer, Scanner, Fax {
  print(): void {
    console.log("Printing document...");
  }

  scan(): void {
    console.log("Scanning document...");
  }

  fax(): void {
    console.log("Faxing document...");
  }
}

// Example usage
// const oldPrinter = new OldPrinter();
// oldPrinter.print();

// const smartPrinter = new SmartPrinter();
// smartPrinter.print();
// smartPrinter.scan();
// smartPrinter.fax();
