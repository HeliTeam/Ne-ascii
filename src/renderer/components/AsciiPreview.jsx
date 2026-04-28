import React, { useRef, useEffect, useState } from 'react';

export default function AsciiPreview({ asciiArt }) {
  const preRef = useRef(null);
  const [fontSize, setFontSize] = useState(6);

  useEffect(() => {
    if (!preRef.current || !asciiArt) return;

    const container = preRef.current;
    const containerWidth = container.offsetWidth - 24; // minus padding
    
    // Calculate optimal font size based on longest line
    const lines = asciiArt.split('\n');
    const maxLineLength = Math.max(...lines.map(line => line.length));
    
    // Calculate font size to fit width
    const optimalSize = Math.floor(containerWidth / (maxLineLength * 0.6));
    const clampedSize = Math.max(3, Math.min(optimalSize, 8));
    
    setFontSize(clampedSize);
  }, [asciiArt]);

  if (!asciiArt) return null;

  return (
    <div className="w-full mt-6">
      <pre
        ref={preRef}
        className="font-mono text-[#d4d4d4] bg-[#0a0a0a] border border-light-gray rounded-lg p-3 max-h-[500px] overflow-auto custom-scrollbar whitespace-pre"
        style={{ fontSize: `${fontSize}px`, lineHeight: '1.1' }}
      >
        {asciiArt}
      </pre>
    </div>
  );
}
