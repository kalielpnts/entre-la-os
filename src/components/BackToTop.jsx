import { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

export const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (!isVisible) return null;

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-28 right-6 w-12 h-12 bg-white text-vinho border-2 border-vinho rounded-full flex items-center justify-center shadow-lg hover:bg-vinho hover:text-white transition-all z-40 animate-bounce"
      aria-label="Voltar ao topo"
    >
      <ArrowUp className="w-6 h-6" />
    </button>
  );
};
