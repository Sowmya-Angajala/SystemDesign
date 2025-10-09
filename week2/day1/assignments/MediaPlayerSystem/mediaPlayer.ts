// Interface
interface MediaFile {
    play(): void;
}

// Audio file
class AudioFile implements MediaFile {
    play(): void {
        console.log("Playing audio file...");
    }
}

// Video file
class VideoFile implements MediaFile {
    play(): void {
        console.log("Playing video file...");
    }
}

// PDF file
class PDFFile implements MediaFile {
    play(): void {
        console.log("Displaying PDF document...");
    }
}

// Media Player
class MediaPlayer {
    private media: MediaFile;

    constructor(media: MediaFile) {
        this.media = media;
    }

    play(): void {
        this.media.play();
    }

    setMedia(media: MediaFile): void {
        this.media = media;
    }
}

// Test
const audio = new AudioFile();
const video = new VideoFile();
const pdf = new PDFFile();

const player = new MediaPlayer(audio);
player.play();

player.setMedia(video);
player.play();

player.setMedia(pdf);
player.play();
