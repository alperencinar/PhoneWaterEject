export class FrequencyPlayer {
  private audioContext: AudioContext | null = null;
  private oscillator: OscillatorNode | null = null;
  private gainNode: GainNode | null = null;

  constructor() {
    this.initAudio();
  }

  private async initAudio() {
    try {
      this.audioContext = new AudioContext();
      this.gainNode = this.audioContext.createGain();
      this.gainNode.connect(this.audioContext.destination);
      this.gainNode.gain.value = 0;
    } catch (error) {
      console.error('Error initializing audio:', error);
      throw error;
    }
  }

  async play(frequency: number) {
    try {
      if (!this.audioContext || !this.gainNode) {
        await this.initAudio();
      }

      if (!this.audioContext || !this.gainNode) {
        throw new Error('Audio system not initialized');
      }

      await this.audioContext.resume();

      // Create and configure oscillator
      this.oscillator = this.audioContext.createOscillator();
      this.oscillator.type = 'sine';
      this.oscillator.frequency.setValueAtTime(frequency, this.audioContext.currentTime);
      this.oscillator.connect(this.gainNode);

      // Fade in the sound
      this.gainNode.gain.setValueAtTime(0, this.audioContext.currentTime);
      this.gainNode.gain.linearRampToValueAtTime(0.5, this.audioContext.currentTime + 0.1);

      this.oscillator.start();
    } catch (error) {
      console.error('Error starting audio:', error);
      throw error;
    }
  }

  setFrequency(frequency: number) {
    if (this.oscillator && this.audioContext) {
      this.oscillator.frequency.setValueAtTime(frequency, this.audioContext.currentTime);
    }
  }

  async stop() {
    if (!this.audioContext || !this.gainNode || !this.oscillator) return;

    try {
      // Fade out audio
      const fadeOutDuration = 0.1;
      this.gainNode.gain.setValueAtTime(this.gainNode.gain.value, this.audioContext.currentTime);
      this.gainNode.gain.linearRampToValueAtTime(0, this.audioContext.currentTime + fadeOutDuration);

      // Stop the oscillator after fade out
      setTimeout(() => {
        if (this.oscillator) {
          this.oscillator.stop();
          this.oscillator.disconnect();
          this.oscillator = null;
        }
      }, fadeOutDuration * 1000);
    } catch (error) {
      console.error('Error stopping audio:', error);
      if (this.oscillator) {
        this.oscillator.stop();
        this.oscillator.disconnect();
        this.oscillator = null;
      }
    }
  }

  cleanup() {
    try {
      if (this.oscillator) {
        this.oscillator.stop();
        this.oscillator.disconnect();
      }
      if (this.gainNode) {
        this.gainNode.disconnect();
      }
      if (this.audioContext) {
        this.audioContext.close();
      }
      this.oscillator = null;
      this.audioContext = null;
      this.gainNode = null;
    } catch (error) {
      console.error('Error cleaning up audio:', error);
    }
  }
}