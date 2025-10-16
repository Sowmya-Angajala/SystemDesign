// Device Interface
class Device {
  specifications() {
    throw new Error("This method should be overridden!");
  }
}

// Concrete Devices for Apple
class AppleLaptop extends Device {
  specifications() {
    console.log("Apple Laptop: MacBook Pro, 16GB RAM, M1 Chip, 512GB SSD");
  }
}

class ApplePhone extends Device {
  specifications() {
    console.log("Apple Phone: iPhone 14, 128GB Storage, A15 Bionic Chip");
  }
}

// Concrete Devices for Samsung
class SamsungLaptop extends Device {
  specifications() {
    console.log("Samsung Laptop: Galaxy Book, 16GB RAM, Intel i7, 1TB SSD");
  }
}

class SamsungPhone extends Device {
  specifications() {
    console.log("Samsung Phone: Galaxy S23, 256GB Storage, Snapdragon 8 Gen 2");
  }
}

// Abstract Factory
class DeviceFactory {
  createDevice(type) {
    throw new Error("This method should be overridden!");
  }
}

// Concrete Factory: Apple
class AppleFactory extends DeviceFactory {
  createDevice(type) {
    if (type === "Laptop") {
      return new AppleLaptop();
    } else if (type === "Phone") {
      return new ApplePhone();
    } else {
      throw new Error("Unknown device type for Apple");
    }
  }
}

// Concrete Factory: Samsung
class SamsungFactory extends DeviceFactory {
  createDevice(type) {
    if (type === "Laptop") {
      return new SamsungLaptop();
    } else if (type === "Phone") {
      return new SamsungPhone();
    } else {
      throw new Error("Unknown device type for Samsung");
    }
  }
}

// ===== Main Function =====
function main() {
  const appleFactory = new AppleFactory();
  const samsungFactory = new SamsungFactory();

  const appleLaptop = appleFactory.createDevice("Laptop");
  const samsungPhone = samsungFactory.createDevice("Phone");

  appleLaptop.specifications(); // Apple Laptop specs
  samsungPhone.specifications(); // Samsung Phone specs
}

// Run the demonstration
main();
