import React, { useState, useEffect } from 'react';
import html2canvas from 'html2canvas';
import TitleBar from './components/TitleBar';
import ShinyText from './components/ShinyText';
import ProgressBar from './components/ProgressBar';
import AsciiPreview from './components/AsciiPreview';
import LoadingScreen from './components/LoadingScreen';
import { imageToAscii } from './utils/asciiConverter';

export default function App() {
  const [username, setUsername] = useState('');
  const [isConverting, setIsConverting] = useState(false);
  const [asciiArt, setAsciiArt] = useState('');
  const [showPreview, setShowPreview] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    window.electron.getUsername().then(name => {
      setUsername(name);
      // Simulate initial loading
      setTimeout(() => setIsLoading(false), 1500);
    });
  }, []);

  const handleUpload = async () => {
    const file = await window.electron.openFileDialog();
    
    if (!file) return;

    setIsConverting(true);
    setShowPreview(false);
    setAsciiArt('');

    // Simulate progress with delay
    setTimeout(async () => {
      const imageData = `data:image/png;base64,${file.data}`;
      const ascii = await imageToAscii(imageData);
      
      setAsciiArt(ascii);
      setIsConverting(false);
      
      // Small delay before showing preview
      setTimeout(() => setShowPreview(true), 100);
    }, 1500);
  };

  const handleDownloadPNG = async () => {
    const preElement = document.querySelector('pre');
    if (!preElement) return;

    const canvas = await html2canvas(preElement, {
      backgroundColor: '#0a0a0a',
      scale: 2,
    });

    const dataUrl = canvas.toDataURL('image/png');
    await window.electron.saveFile(dataUrl, 'ascii-art.png');
  };

  const handleCopyToClipboard = async () => {
    if (!asciiArt) return;
    
    try {
      await navigator.clipboard.writeText(asciiArt);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  const handleKlieerClick = (e) => {
    e.preventDefault();
    window.electron.openExternal('https://github.com/klieer1337');
  };

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <div className="h-screen bg-pure-black flex flex-col">
      <TitleBar />
      
      <div className="flex-1 flex flex-col items-center justify-center px-8 overflow-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-[22px] text-white font-medium mb-2">
            Привет, {username}!
          </h1>
          <p className="text-text-gray text-[15px] flex items-center justify-center gap-2">
            <span>Данную программу написал</span>
            <a
              href="#"
              onClick={handleKlieerClick}
              className="inline-block cursor-pointer"
            >
              <ShinyText
                text="Klieer"
                speed={2}
                delay={0}
                color="#b5b5b5"
                shineColor="#ffffff"
                spread={120}
                direction="left"
                yoyo={false}
                pauseOnHover={false}
                disabled={false}
              />
            </a>
            <span className="text-white text-[18px]">♥</span>
          </p>
        </div>

        {/* Main Card */}
        <div className="w-full max-w-[800px] bg-dark-gray border border-light-gray rounded-xl p-8">
          {/* Upload Button */}
          <button
            onClick={handleUpload}
            className="w-full h-[52px] bg-mid-gray border border-[#333] rounded-lg text-white text-[15px] font-medium hover:bg-[#222] hover:border-[#555] transition-all"
          >
            ↑ Загрузить изображение (.png · .jpg · .webp)
          </button>

          {/* Progress Bar */}
          <ProgressBar isVisible={isConverting} />

          {/* Preview */}
          {showPreview && <AsciiPreview asciiArt={asciiArt} />}

          {/* Action Buttons */}
          {showPreview && (
            <div className="flex gap-3 mt-6">
              <button
                onClick={handleDownloadPNG}
                className="flex-1 h-[44px] bg-mid-gray border border-[#333] rounded-lg text-white text-[14px] font-medium hover:bg-[#222] transition-all"
              >
                ⬇ Скачать как PNG
              </button>
              <button
                onClick={handleCopyToClipboard}
                className="flex-1 h-[44px] bg-mid-gray border border-[#333] rounded-lg text-white text-[14px] font-medium hover:bg-[#222] transition-all"
              >
                ⎘ Копировать в буфер
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
