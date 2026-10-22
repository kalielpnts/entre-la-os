import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Logo } from './Logo';
import { SearchModal } from './SearchModal';
import { Search, Menu, X } from 'lucide-react';

export const Header = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const navLinks = [
    { path: '/', label: 'Início' },
    { path: '/entenda', label: 'A Doença' },
    { path: '/sinais', label: 'Sinais' },
    { path: '/mamografia', label: 'Mamografia' },
    { path: '/tratamento', label: 'Tratamento' },
    { path: '/acolhimento', label: 'Acolhimento' },
  ];

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#fdf8f9]/90 backdrop-blur-md border-b border-rosa/20 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20 md:h-24">
            
            {/* LOGO */}
            <Link to="/" className="flex items-center gap-2.5 group h-full py-2">
              <div className="w-9 h-9 md:w-11 md:h-11 flex items-center justify-center shrink-0">
                <Logo className="w-full h-full" />
              </div>
              <span className="text-2xl md:text-3xl text-vinho font-black tracking-tight">EntreLaços</span>
            </Link>

            {/* NAVEGAÇÃO DESKTOP */}
            <div className="hidden lg:flex items-center gap-6">
              <nav className="flex items-center gap-1">
                {navLinks.map((link) => {
                  const isActive = location.pathname === link.path;
                  return (
                    <Link
                      key={link.path}
                      to={link.path}
                      className={`px-3 py-2 text-sm font-normal transition-all duration-200 relative ${
                        isActive 
                          ? 'text-vinho font-medium border-b-2 border-rosa' 
                          : 'text-cinza hover:text-vinho'
                      }`}
                    >
                      {link.label}
                    </Link>
                  );
                })}
              </nav>

              {/* ÍCONE DE PESQUISA (ABRE O SEARCH MODAL) */}
              <button
                onClick={() => setIsSearchOpen(true)}
                className="p-2 text-cinza hover:text-vinho hover:bg-rosa/10 rounded-full transition-colors"
                aria-label="Abrir Pesquisa"
              >
                <Search className="w-5 h-5" />
              </button>

              {/* LINHA DIVISORA VERTICAL */}
              <div className="h-6 w-px bg-borda"></div>

              {/* BOTÃO "MEU GUIA" */}
              <Link
                to="/guia"
                className="bg-[#c23b68] text-white px-5 py-2.5 rounded-full font-bold text-xs uppercase tracking-wider hover:bg-[#a62b53] shadow-sm transition-all duration-300 transform hover:-translate-y-0.5"
              >
                MEU GUIA
              </Link>
            </div>

            {/* ÍCONE DE PESQUISA E MENU HAMBÚRGUER (MOBILE) */}
            <div className="flex lg:hidden items-center gap-2">
              <button
                onClick={() => setIsSearchOpen(true)}
                className="p-2 text-vinho hover:bg-rosa/10 rounded-xl transition-colors"
                aria-label="Abrir Pesquisa"
              >
                <Search className="w-6 h-6" />
              </button>

              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 text-vinho hover:bg-rosa/10 rounded-xl transition-colors"
                aria-label="Alternar Menu"
              >
                {isMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
              </button>
            </div>

          </div>
        </div>

        {/* MENU HAMBÚRGUER RETRÁTIL E SCROLÁVEL (MOBILE) */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white border-b border-borda px-6 pt-4 pb-6 space-y-4 shadow-xl max-h-[calc(100vh-5rem)] overflow-y-auto animate-fadeIn">
            <nav className="flex flex-col space-y-2">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.path;
                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={() => setIsMenuOpen(false)}
                    className={`py-3 px-4 rounded-xl text-base font-normal transition-colors ${
                      isActive
                        ? 'bg-rosa/20 text-vinho font-medium border-l-4 border-rosa'
                        : 'text-cinza hover:bg-[#fdf8f9] hover:text-vinho'
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </nav>

            <div className="pt-2 border-t border-borda">
              <Link
                to="/guia"
                onClick={() => setIsMenuOpen(false)}
                className="block w-full text-center bg-[#c23b68] text-white py-3 rounded-full font-bold text-xs uppercase tracking-wider shadow-sm"
              >
                MEU GUIA
              </Link>
            </div>
          </div>
        )}
      </header>

      {/* MODAL DE PESQUISA */}
      <SearchModal 
        isOpen={isSearchOpen} 
        onClose={() => setIsSearchOpen(false)} 
      />
    </>
  );
};
