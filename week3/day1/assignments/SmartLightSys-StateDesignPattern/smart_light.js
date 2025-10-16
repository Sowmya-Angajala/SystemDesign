
class State {
  // Base interface for states. Concrete states override the event handlers they need.
  enter(context) {}
  exit(context) {}
  onUserToggle(context) {}
  onMotionDetected(context) {}
  onMotionStopped(context) {}
  onTimeOfDayChanged(context, isDaytime) {}
  toString() { return this.constructor.name; }
}

/* ---------- Concrete States ---------- */

class OffState extends State {
  enter(context) {
    context.isOn = false;
    context.setBrightness(0);
    console.log("[OffState] Light is OFF.");
  }

  onUserToggle(context) {
    console.log("[OffState] User toggled -> turning ON manually.");
    context.setState(new OnState());
  }

  onMotionDetected(context) {
    console.log("[OffState] Motion detected -> switching to MotionDetectionState.");
    context.setState(new MotionDetectionState());
  }

  onTimeOfDayChanged(context, isDaytime) {
    // remain off but update environment flag
    context.isDaytime = isDaytime;
    console.log(`[OffState] Time changed. isDaytime=${isDaytime}`);
  }
}

class OnState extends State {
  enter(context) {
    context.isOn = true;
    // default brightness when turned on manually (50 if day, 80 if night)
    const defaultBrightness = context.isDaytime ? 50 : 80;
    context.setBrightness(defaultBrightness);
    console.log("[OnState] Light turned ON manually. Brightness:", context.brightness);
  }

  onUserToggle(context) {
    console.log("[OnState] User toggled -> turning OFF.");
    context.setState(new OffState());
  }

  onMotionDetected(context) {
    console.log("[OnState] Motion detected while already ON -> no state change, but will ensure brightness adjustment.");
    // If needed, switch to BrightnessAdjustmentState so brightness logic can execute
    context.setState(new BrightnessAdjustmentState());
  }

  onTimeOfDayChanged(context, isDaytime) {
    context.isDaytime = isDaytime;
    console.log(`[OnState] Time changed. isDaytime=${isDaytime} -> adjusting brightness.`);
    context.setState(new BrightnessAdjustmentState());
  }
}

class MotionDetectionState extends State {
  enter(context) {
    console.log("[MotionDetectionState] Enter: motion triggered.");
    context.isOn = true;
    // When motion triggers the light, we immediately respect brightness adjustment rules
    context.setState(new BrightnessAdjustmentState());
  }

  // motionStopped could be used to auto-turn off after no motion
  onMotionStopped(context) {
    console.log("[MotionDetectionState] Motion stopped -> turning OFF (return to Idle).");
    context.setState(new OffState());
  }

  onUserToggle(context) {
    // if user toggles while motion-detected, let them override to On or Off
    console.log("[MotionDetectionState] User toggled -> go to OnState (user override).");
    context.setState(new OnState());
  }

  onTimeOfDayChanged(context, isDaytime) {
    context.isDaytime = isDaytime;
    console.log(`[MotionDetectionState] Time changed. isDaytime=${isDaytime}`);
    // handing off to BrightnessAdjustmentState is already done on enter; do nothing else
  }
}

class BrightnessAdjustmentState extends State {
  enter(context) {
    // Ensure the light is on when adjusting brightness
    context.isOn = true;
    const newBrightness = context.isDaytime ? context.daytimeBrightness : context.nighttimeBrightness;
    context.setBrightness(newBrightness);
    console.log(`[BrightnessAdjustmentState] Adjusted brightness for ${context.isDaytime ? 'DAY' : 'NIGHT'} -> ${context.brightness}`);
  }

  onUserToggle(context) {
    console.log("[BrightnessAdjustmentState] User toggled -> turning OFF.");
    context.setState(new OffState());
  }

  onMotionStopped(context) {
    // default behaviour: go Off if motion stops and the light wasn't manually turned on.
    // To keep it simple, we'll turn off on motion stop.
    console.log("[BrightnessAdjustmentState] Motion stopped -> turning OFF.");
    context.setState(new OffState());
  }

  onTimeOfDayChanged(context, isDaytime) {
    context.isDaytime = isDaytime;
    const newBrightness = context.isDaytime ? context.daytimeBrightness : context.nighttimeBrightness;
    context.setBrightness(newBrightness);
    console.log(`[BrightnessAdjustmentState] Time changed -> brightness adjusted to ${context.brightness}`);
  }
}

/* Example of a future state — easy to add */
class EnergySaverState extends State {
  enter(context) {
    context.isOn = true;
    context.setBrightness(20); // extremely low brightness
    console.log("[EnergySaverState] Energy saver mode: brightness set to", context.brightness);
  }

  onUserToggle(context) {
    console.log("[EnergySaverState] User toggled -> turning OFF energy saver.");
    context.setState(new OffState());
  }

  // other handlers...
}

/* ---------- Context (SmartLight) ---------- */

class SmartLight {
  constructor({ isDaytime = true, daytimeBrightness = 40, nighttimeBrightness = 90 } = {}) {
    // environment & properties
    this.isDaytime = isDaytime;
    this.daytimeBrightness = daytimeBrightness;   // brightness used in daytime when auto-adjusting
    this.nighttimeBrightness = nighttimeBrightness; // brightness used at night when auto-adjusting

    // runtime properties
    this.isOn = false;
    this.brightness = 0; // 0-100

    // initial state
    this.currentState = new OffState();
    this.currentState.enter(this);
  }

  setState(newState) {
    if (!newState) return;
    console.log(`--- Transition: ${this.currentState.toString()} -> ${newState.toString()} ---`);
    this.currentState.exit && this.currentState.exit(this);
    this.currentState = newState;
    this.currentState.enter(this);
  }

  // Event handlers that clients call
  userToggle() {
    console.log("\n[Event] userToggle()");
    this.currentState.onUserToggle(this);
  }

  motionDetected() {
    console.log("\n[Event] motionDetected()");
    this.currentState.onMotionDetected(this);
  }

  motionStopped() {
    console.log("\n[Event] motionStopped()");
    this.currentState.onMotionStopped(this);
  }

  setTimeOfDay(isDaytime) {
    // isDaytime: boolean true=day, false=night
    console.log(`\n[Event] setTimeOfDay(${isDaytime ? 'DAY' : 'NIGHT'})`);
    this.isDaytime = isDaytime;
    this.currentState.onTimeOfDayChanged(this, isDaytime);
  }

  setBrightness(value) {
    // clamp and apply
    const b = Math.max(0, Math.min(100, Math.round(value)));
    this.brightness = b;
    console.log(`[SmartLight] brightness -> ${this.brightness}`);
  }

  status() {
    return {
      state: this.currentState.toString(),
      isOn: this.isOn,
      brightness: this.brightness,
      isDaytime: this.isDaytime,
    };
  }
}

/* ---------- Simple Simulation Demonstration ---------- */

function demoSequence() {
  console.log("\n=== Smart Light State Pattern Demo ===");
  const light = new SmartLight({ isDaytime: true, daytimeBrightness: 30, nighttimeBrightness: 85 });

  // 1. Motion detected in daytime => should turn ON with reduced brightness
  light.motionDetected();
  console.log("Status:", light.status());

  // 2. Motion stops => light should go Off
  light.motionStopped();
  console.log("Status:", light.status());

  // 3. User toggles ON at night
  light.setTimeOfDay(false); // set to night
  light.userToggle(); // user turns on manually -> OnState with night brightness
  console.log("Status:", light.status());

  // 4. Motion detected while manual ON (no change of on/off but might adjust brightness)
  light.motionDetected();
  console.log("Status:", light.status());

  // 5. User toggles OFF
  light.userToggle();
  console.log("Status:", light.status());

  // 6. Example: put into Energy Saver (future) mode
  console.log("\n[Example] switching to EnergySaverState (future state)");
  light.setState(new EnergySaverState());
  console.log("Status:", light.status());

  // 7. User toggles to turn off energy saver
  light.userToggle();
  console.log("Final Status:", light.status());
}

// Run demo if executed directly
if (require.main === module) {
  demoSequence();
}

module.exports = {
  SmartLight, OffState, OnState, MotionDetectionState: MotionDetectionState, BrightnessAdjustmentState, EnergySaverState
};
