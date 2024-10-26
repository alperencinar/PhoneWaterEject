import React, { useState, useCallback, useEffect } from 'react';
import { Vibrate } from 'lucide-react';

export const VibrationControl: React.FC = () => {
  const [isVibrating, setIsVibrating] = useState(false);
  const [vibrationInterval, setVibrationInterval] = useState<number | null>(null);

  const toggleVibration = useCallback(() => {
    if (!('vibrate' in navigator)) {
      alert('Vibration not supported on your device');
      return;
    }

    if (isVibrating) {
      // Stop vibration
      if (vibrationInterval) {
        clearInterval(vibrationInterval);
        setVibrationInterval(null);
      }
      navigator.vibrate(0);
      setIsVibrating(false);
    } else {
      // Start vibration
      setIsVibrating(true);
      const interval = window.setInterval(() => {
        navigator.vibrate(500);
      }, 1000); // 500ms vibration + 500ms pause = 1000ms interval
      setVibrationInterval(interval);
    }
  }, [isVibrating, vibrationInterval]);

  useEffect(() => {
    return () => {
      if (vibrationInterval) {
        clearInterval(vibrationInterval);
        navigator.vibrate(0);
      }
    };
  }, [vibrationInterval]);

  return (
    <div className="flex items-center gap-4">
      <label className="inline-flex items-center cursor-pointer">
        <div className="relative">
          <input
            type="checkbox"
            className="sr-only peer"
            checked={isVibrating}
            onChange={toggleVibration}
          />
          <div className="w-14 h-7 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all peer-checked:bg-blue-700"></div>
        </div>
        <span className="ms-3 text-lg font-medium text-gray-700 flex items-center gap-2">
          <Vibrate className={`w-5 h-5 ${isVibrating ? 'text-blue-700 animate-pulse' : 'text-gray-500'}`} />
          Vibration {isVibrating ? 'On' : 'Off'}
        </span>
      </label>
    </div>
  );
};