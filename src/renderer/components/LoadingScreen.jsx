import React, { useState, useEffect } from 'react';

export default function LoadingScreen() {
  const [dots, setDots] = useState('');

  useEffect(() => {
    const interval = setInterval(() => {
      setDots(prev => {
        if (prev.length >= 3) return '';
        return prev + '.';
      });
    }, 400);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="h-screen w-screen bg-pure-black flex items-center justify-center">
      <div className="text-text-gray text-[18px] font-medium">
        Wait{dots}
      </div>
    </div>
  );
}
