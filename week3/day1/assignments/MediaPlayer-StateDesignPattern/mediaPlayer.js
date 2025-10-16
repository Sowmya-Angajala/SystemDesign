
class State {
  play() {
    throw new Error("play() must be implemented");
  }
  pause() {
    throw new Error("pause() must be implemented");
  }
  stop() {
    throw new Error("stop() must be implemented");
  }
}

// ------------------------------
// Concrete States
// ------------------------------
class PlayState extends State {
  constructor(player) {
    super();
    this.player = player;
  }

  play() {
    console.log("Media is already playing.");
  }

  pause() {
    console.log("Pausing media...");
    this.player.setState(this.player.pauseState);
  }

  stop() {
    console.log("Stopping media...");
    this.player.setState(this.player.stopState);
  }
}

class PauseState extends State {
  constructor(player) {
    super();
    this.player = player;
  }

  play() {
    console.log("Resuming media...");
    this.player.setState(this.player.playState);
  }

  pause() {
    console.log("Media is already paused.");
  }

  stop() {
    console.log("Stopping media from pause...");
    this.player.setState(this.player.stopState);
  }
}

class StopState extends State {
  constructor(player) {
    super();
    this.player = player;
  }

  play() {
    console.log("Starting media from the beginning...");
    this.player.setState(this.player.playState);
  }

  pause() {
    console.log("Cannot pause. Media is stopped.");
  }

  stop() {
    console.log("Media is already stopped.");
  }
}

// ------------------------------
// Context Class: MediaPlayer
// ------------------------------
class MediaPlayer {
  constructor() {
    this.playState = new PlayState(this);
    this.pauseState = new PauseState(this);
    this.stopState = new StopState(this);

    // Initial state
    this.currentState = this.stopState;
  }

  setState(state) {
    this.currentState = state;
  }

  play() {
    this.currentState.play();
  }

  pause() {
    this.currentState.pause();
  }

  stop() {
    this.currentState.stop();
  }
}

// ------------------------------
// Usage Example
// ------------------------------
const player = new MediaPlayer();

console.log("\n--- Media Player Simulation ---");
player.play();   // Start playing
player.pause();  // Pause playback
player.play();   // Resume playing
player.stop();   // Stop playback
player.pause();  // Invalid: cannot pause when stopped
player.play();   // Play again from beginning
