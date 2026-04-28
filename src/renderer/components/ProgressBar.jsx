import React from 'react';

export default function ProgressBar({ isVisible }) {
  if (!isVisible) return null;

  return (
    <div className="w-full mt-6">
      <p className="text-[#888] text-[13px] mb-2">Конвертация...</p>
      <div className="w-full h-[6px] bg-[#222] rounded-full overflow-hidden">
        <div className="h-full bg-white rounded-full animate-progress-sweep" />
      </div>
    </div>
  );
}
