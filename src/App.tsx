import React, { useState, useRef, useEffect } from 'react';
import { Volume2, Droplets, Wind } from 'lucide-react';
import { FrequencyPlayer } from './components/FrequencyPlayer';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { FAQ } from './components/FAQ';
import { Features } from './components/Features';
import { SEOHead } from './components/SEOHead';

const ControlPanel = React.memo(({ 
  isPlaying,
  isLoading,
  handleStart,
  handleStop,
  frequency,
  setFrequency,
  onFrequencyChange
}: {
  isPlaying: boolean;
  isLoading: boolean;
  handleStart: () => void;
  handleStop: () => void;
  frequency: number;
  setFrequency: (value: number) => void;
  onFrequencyChange: (value: number) => void;
}) => (
  <div className="flex flex-col items-center gap-4 sm:gap-8">
    <div className="w-full max-w-xs">
      <label htmlFor="frequency" className="block text-sm font-medium text-gray-700 mb-2">
        Frequency: {frequency} Hz
      </label>
      <input
        type="range"
        id="frequency"
        min="100"
        max="300"
        value={frequency}
        onChange={(e) => {
          const newFrequency = Number(e.target.value);
          setFrequency(newFrequency);
          onFrequencyChange(newFrequency);
        }}
        className="w-full h-2 bg-blue-200 rounded-lg appearance-none cursor-pointer"
      />
    </div>

    <p className="text-sm text-gray-600 font-medium mb-2">
      Please, turn up the volume on your phone before pressing the "Start Ejection" button for the best result
    </p>

    <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto">
      <button
        onClick={handleStart}
        disabled={isLoading || isPlaying}
        className={`px-6 sm:px-8 py-3 sm:py-4 rounded-full flex items-center justify-center transition-all w-full sm:w-auto text-lg font-semibold ${
          isLoading || isPlaying
            ? 'bg-gray-400 cursor-not-allowed text-gray-100'
            : 'bg-blue-700 hover:bg-blue-800 text-white'
        }`}
        aria-label="Start Ejection"
      >
        {isLoading ? (
          <div className="w-6 h-6 border-4 border-white border-t-transparent rounded-full animate-spin" />
        ) : (
          <span>Start Ejection</span>
        )}
      </button>

      <button
        onClick={handleStop}
        disabled={isLoading || !isPlaying}
        className={`px-6 sm:px-8 py-3 sm:py-4 rounded-full flex items-center justify-center transition-all w-full sm:w-auto text-lg font-semibold ${
          isLoading || !isPlaying
            ? 'bg-gray-400 cursor-not-allowed text-gray-100'
            : 'bg-red-700 hover:bg-red-800 text-white'
        }`}
        aria-label="Stop Ejection"
      >
        <span>Stop Ejection</span>
      </button>
    </div>
  </div>
));

function App() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [frequency, setFrequency] = useState(200);
  const playerRef = useRef<FrequencyPlayer>(new FrequencyPlayer());

  useEffect(() => {
    const cleanup = () => {
      if (playerRef.current) {
        playerRef.current.cleanup();
      }
    };
    
    setTimeout(() => setIsLoading(false), 1000);
    
    return cleanup;
  }, []);

  const handleStart = async () => {
    try {
      await playerRef.current.play(frequency);
      setIsPlaying(true);
    } catch (error) {
      console.error('Error starting audio:', error);
      setIsPlaying(false);
    }
  };

  const handleStop = async () => {
    try {
      await playerRef.current.stop();
      setIsPlaying(false);
    } catch (error) {
      console.error('Error stopping audio:', error);
    }
  };

  const handleFrequencyChange = (newFrequency: number) => {
    if (isPlaying) {
      playerRef.current.setFrequency(newFrequency);
    }
  };

  return (
    <>
      <SEOHead />
      <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
        <Header />
        
        <main className="container mx-auto px-4 py-8">
          <section className="max-w-4xl mx-auto text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-blue-900 mb-6">
              Eject Water & Dust from Your Device
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Quick fix for water-damaged speakers and microphones using advanced sound frequencies
            </p>

            <div className="bg-white rounded-2xl shadow-xl p-8 mb-12">
              <div className="flex flex-col items-center gap-8">
                <ControlPanel 
                  isPlaying={isPlaying}
                  isLoading={isLoading}
                  handleStart={handleStart}
                  handleStop={handleStop}
                  frequency={frequency}
                  setFrequency={setFrequency}
                  onFrequencyChange={handleFrequencyChange}
                />

                <div className="flex flex-wrap justify-center gap-4 text-gray-600">
                  <div className="flex items-center gap-2">
                    <Volume2 className="w-5 h-5" />
                    <span>Water Ejection Sound</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Droplets className="w-5 h-5" />
                    <span>Water Ejection</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Wind className="w-5 h-5" />
                    <span>Dust Removal</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <Features />
          <FAQ />
        </main>

        <Footer />
      </div>
    </>
  );
}

export default App;