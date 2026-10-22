import React from 'react';
import { Link } from 'react-router-dom';
import { Logo } from './Logo';
import { Heart, Sparkles, Map, PhoneCall, ShieldCheck, HeartHandshake, ChevronRight } from 'lucide-react';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const mainLinks = [
    { path: '/entenda', label: 'A Doença' },
    { path: '/sinais', label: 'Sinais & Sintomas' },
    { path: '/mamografia', label: 'Mamografia' },
    { path: '/tratamento', label: 'Tratamento' },
  ];

  const toolLinks = [
    { path: '/acolhimento', label: 'Acolhimento Emocional' },
    { path: '/interativo', label: 'Recursos Interativos' },
    { path: '/caderno', label: 'Diário Privado' },
    { path: '/quiz', label: 'Quiz Informativo' },
  ];

  return (
    <footer className="bg-[#3b081b] text-white pt-16 pb-12 border-t-2 border-rosa/30">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          
          <div className="lg:col-span-4 space-y-5">
            <Link to="/" className="inline-flex items-center gap-4 group">
              <div className="w-20 h-20 md:w-24 md:h-24 rounded-2xl overflow-hidden flex items-center justify-center shrink-0">
                <Logo />
              </div>
              <span className="text-3xl md:text-4xl text-marfim font-black tracking-tight">EntreLaços</span>
            </Link>
            
            <p className="text-base text-rosa/90 font-serif italic leading-relaxed border-l-2 border-rosa/50 pl-4 py-1">
              "Conhecimento que acolhe, informação que salva e laços que fortalecem cada etapa do caminho."
            </p>
            
            <p className="text-xs text-white/70 leading-relaxed font-medium">
              Plataforma educativa e acolhedora sobre saúde mamária, projetada para orientar, conscientizar e apoiar você em todos os momentos.
            </p>
          </div>

          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <h4 className="text-xs font-bold uppercase tracking-widest text-rosa mb-4 flex items-center gap-2">
                <Sparkles className="w-3.5 h-3.5" /> Conteúdo
              </h4>
              <ul className="space-y-2">
                {mainLinks.map((item) => (
                  <li key={item.path}>
                    <Link
                      to={item.path}
                      className="text-sm text-white/80 hover:text-white hover:bg-white/10 px-3 py-1.5 rounded-xl transition-all duration-200 flex items-center justify-between group border border-transparent hover:border-white/10"
                    >
                      <span>{item.label}</span>
                      <ChevronRight className="w-3.5 h-3.5 text-rosa opacity-0 group-hover:opacity-100 transition-opacity" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-xs font-bold uppercase tracking-widest text-rosa mb-4 flex items-center gap-2">
                <HeartHandshake className="w-3.5 h-3.5" /> Ferramentas
              </h4>
              <ul className="space-y-2">
                {toolLinks.map((item) => (
                  <li key={item.path}>
                    <Link
                      to={item.path}
                      className="text-sm text-white/80 hover:text-white hover:bg-white/10 px-3 py-1.5 rounded-xl transition-all duration-200 flex items-center justify-between group border border-transparent hover:border-white/10"
                    >
                      <span>{item.label}</span>
                      <ChevronRight className="w-3.5 h-3.5 text-rosa opacity-0 group-hover:opacity-100 transition-opacity" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="lg:col-span-3 bg-white/5 p-6 rounded-3xl border border-white/10 flex flex-col justify-between space-y-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-rosa block mb-2">Precisa de Ajuda?</span>
              <h4 className="text-lg font-bold text-marfim mb-2">Apoio Emocional & Guia</h4>
              <p className="text-xs text-white/70 leading-relaxed">
                Acesse seu guia individual ou converse gratuitamente e de forma confidencial pelo CVV.
              </p>
            </div>

            <div className="space-y-2.5">
              <Link
                to="/guia"
                className="w-full bg-rosa text-vinho font-bold text-xs uppercase tracking-wider py-3 px-4 rounded-full flex items-center justify-center gap-2 hover:bg-white transition-colors shadow-md"
              >

<Map className="w-4 h-4" />
Meu Guia Pessoal
              </Link>
              <a
                href="tel:188"
                className="w-full bg-white/10 hover:bg-white/20 text-marfim font-bold text-xs uppercase tracking-wider py-2.5 px-4 rounded-full flex items-center justify-center gap-2 border border-white/15 transition-colors"
              >
                <PhoneCall className="w-3.5 h-3.5 text-rosa" /> Ligue 188 (CVV)
              </a>
            </div>
          </div>

        </div>

        <div className="pt-8 flex flex-col items-center justify-center gap-3 text-center text-xs text-white/60 max-w-2xl mx-auto">
          <div className="flex items-center justify-center gap-2">
            <ShieldCheck className="w-4 h-4 text-rosa shrink-0" />
            <span>&copy; {currentYear} EntreLaços. Projeto educativo e informativo sem fins lucrativos.</span>
          </div>

          <div className="flex items-center justify-center gap-2 font-bold text-marfim bg-white/10 px-5 py-2 rounded-full border border-white/10">
            <span>Feito com amor</span>
            <Heart className="w-3.5 h-3.5 text-rosa fill-rosa animate-pulse" />
            <span>para você</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
