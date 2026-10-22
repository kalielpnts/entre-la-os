import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Força a rolagem para o topo (X: 0, Y: 0) sempre que o caminho da URL mudar
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};
