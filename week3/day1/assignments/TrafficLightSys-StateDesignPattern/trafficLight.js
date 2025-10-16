// Define the base State interface
class State {
  constructor(trafficLight) {
    this.trafficLight = trafficLight;
  }

  change() {
    throw new Error("change() must be implemented in the subclass");
  }

  getColor() {
    throw new Error("getColor() must be implemented in the subclass");
  }
}

// Red State
class RedState extends State {
  change() {
    console.log("Red → Green");
    this.trafficLight.setState(this.trafficLight.greenState);
  }

  getColor() {
    return "Red - STOP ";
  }
}

// Green State
class GreenState extends State {
  change() {
    console.log("Green → Yellow");
    this.trafficLight.setState(this.trafficLight.yellowState);
  }

  getColor() {
    return "Green - GO ";
  }
}

// Yellow State
class YellowState extends State {
  change() {
    console.log("Yellow → Red");
    this.trafficLight.setState(this.trafficLight.redState);
  }

  getColor() {
    return "Yellow - SLOW DOWN ";
  }
}

// Traffic Light Context
class TrafficLight {
  constructor() {
    // Instantiate all possible states
    this.redState = new RedState(this);
    this.greenState = new GreenState(this);
    this.yellowState = new YellowState(this);

    // Start with Red State
    this.currentState = this.redState;
  }

  setState(state) {
    this.currentState = state;
  }

  change() {
    this.currentState.change();
  }

  showState() {
    console.log(`Current State: ${this.currentState.getColor()}`);
  }
}

// --- DEMO ---
const trafficLight = new TrafficLight();

// Simulate continuous light changes
function simulateTrafficLight() {
  trafficLight.showState();
  setTimeout(() => {
    trafficLight.change();
    simulateTrafficLight();
  }, 2000); // 2 seconds per state
}

simulateTrafficLight();
