import React from 'react';

export default function TitleBar() {
  const handleMinimize = () => {
    window.electron.minimizeWindow();
  };

  const handleClose = () => {
    window.electron.closeWindow();
  };

  return (
    <div className="h-8 bg-pure-black border-b border-light-gray flex items-center justify-between px-4 select-none" style={{ WebkitAppRegion: 'drag' }}>
      <span className="text-text-gray text-sm font-medium">ne ascii</span>
      <div className="flex gap-2" style={{ WebkitAppRegion: 'no-drag' }}>
        <button
          onClick={handleMinimize}
          className="w-8 h-6 flex items-center justify-center text-white hover:bg-mid-gray rounded transition-colors"
          aria-label="Minimize"
        >
          <svg width="12" height="2" viewBox="0 0 12 2" fill="none">
            <rect width="12" height="2" fill="currentColor" />
          </svg>
        </button>
        <button
          onClick={handleClose}
          className="w-8 h-6 flex items-center justify-center text-white hover:bg-red-600 rounded transition-colors"
          aria-label="Close"
        >
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <path d="M1 1L11 11M11 1L1 11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </button>
      </div>
    </div>
  );
}
