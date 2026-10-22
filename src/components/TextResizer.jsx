import { useState, useEffect } from 'react';
import { Type } from 'lucide-react';

export const TextResizer = () => {
  const [fontSize, setFontSize] = useState(100);

  useEffect(() => {
    document.documentElement.style.fontSize = `${fontSize}%`;
  }, [fontSize]);

  const increase = () => setFontSize(prev => Math.min(prev + 10, 130));
  const decrease = () => setFontSize(prev => Math.max(prev - 10, 90));
  const reset = () => setFontSize(100);

  return (
    <div className="fixed top-24 left-0 bg-white/90 backdrop-blur border border-borda rounded-r-xl shadow-md p-1.5 flex flex-col gap-1 z-40">
      <button onClick={increase} className="p-1.5 text-vinho hover:bg-nevoa rounded font-bold text-sm" title="Aumentar texto">A+</button>
      <button onClick={reset} className="p-1 text-cinza hover:bg-nevoa rounded flex justify-center" title="Tamanho original">
        <Type className="w-4 h-4" />
      </button>
      <button onClick={decrease} className="p-1.5 text-vinho hover:bg-nevoa rounded font-bold text-sm" title="Diminuir texto">A-</button>
    </div>
  );
};
