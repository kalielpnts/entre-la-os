import { useState, useEffect } from 'react';

export const ReadingProgress = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const updateProgress = () => {
      const scrollTotal = document.documentElement.scrollTop;
      const heightWin = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scroll = `${(scrollTotal / heightWin) * 100}%`;
      setProgress(scroll);
    };

    window.addEventListener('scroll', updateProgress);
    return () => window.removeEventListener('scroll', updateProgress);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-1.5 bg-nevoa z-[100]">
      <div 
        className="h-full bg-vinho transition-all duration-150 ease-out"
        style={{ width: progress }}
      />
    </div>
  );
};
