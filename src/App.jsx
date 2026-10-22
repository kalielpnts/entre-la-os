import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { AIAssistant } from './components/AIAssistant';
import { ScrollToTop } from './components/ScrollToTop';
import { ReadingProgress } from './components/ReadingProgress';
import { BackToTop } from './components/BackToTop';
import { ShareButton } from './components/ShareButton';
import { TextResizer } from './components/TextResizer';
import { SearchModal } from './components/SearchModal';
import { Fontes } from './components/Fontes';

import { Home } from './pages/Home';
import { Entenda } from './pages/Entenda';
import { Sinais } from './pages/Sinais';
import { Mamografia } from './pages/Mamografia';
import { Caderno } from './pages/Caderno';
import { Quiz } from './pages/Quiz';
import { Tratamento } from './pages/Tratamento';
import { Acolhimento } from './pages/Acolhimento';
import { Guia } from './pages/Guia';
import { Glossario } from './pages/Glossario';
import { Interativo } from './pages/Interativo'; // <--- Nova Importação

export const App = () => {
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <BrowserRouter>
      <ScrollToTop />
      <ReadingProgress />
      <TextResizer />
      <SearchModal isOpen={searchOpen} onClose={() => setSearchOpen(false)} />
      
      <div className="min-h-screen flex flex-col font-sans">
        <a href="#main-content" className="skip-link">Pular para o conteúdo principal</a>
        <Header onOpenSearch={() => setSearchOpen(true)} />

        <div className="flex-1 flex flex-col" id="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/entenda" element={<Entenda />} />
            <Route path="/sinais" element={<Sinais />} />
            <Route path="/mamografia" element={<Mamografia />} />
            <Route path="/tratamento" element={<Tratamento />} />
            <Route path="/acolhimento" element={<Acolhimento />} />
            <Route path="/caderno" element={<Caderno />} />
            <Route path="/quiz" element={<Quiz />} />
            <Route path="/guia" element={<Guia />} />
            <Route path="/glossario" element={<Glossario />} />
            <Route path="/interativo" element={<Interativo />} /> {/* <--- Nova Rota */}
            <Route path="*" element={<Home />} />
          </Routes>
        </div>

        <Fontes />
        <AIAssistant />
        <BackToTop />
        <ShareButton />
        <Footer />
      </div>
    </BrowserRouter>
  );
};
