import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Logo } from '../components/Logo';
import { Search, Info, BookOpen, Heart, Sparkles, ArrowRight, HeartHandshake } from 'lucide-react';

export const Home = () => {
  const navigate = useNavigate();

  return (
    <main id="main-content" className="pt-28 md:pt-32 pb-12">
      {/* SEÇÃO HERO */}
      <section className="pb-16 px-6 max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
        <div className="lg:w-1/2 text-center lg:text-left z-10">
          <span className="inline-flex items-center gap-2 bg-white text-vinho font-bold uppercase tracking-widest text-xs mb-6 px-4 py-2 rounded-full shadow-sm border border-borda">
            <Sparkles className="w-4 h-4 text-rosa" /> Bem-vinda ao EntreLaços
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-vinho leading-[1.1] mb-6">
            Sua saúde merece <br />
            <span className="text-vinho/80">atenção e acolhimento.</span>
          </h1>
          <p className="text-lg sm:text-xl text-cinza mb-10 leading-relaxed max-w-xl mx-auto lg:mx-0 font-medium">
            Informação descomplicada, ferramentas interativas e um espaço seguro totalmente focado em você e na saúde das mamas.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <button onClick={() => navigate('/guia')} className="bg-vinho text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-[#7e1440] hover:shadow-lg transition-all transform hover:-translate-y-1">
              Descubra seu Guia Pessoal
            </button>
          </div>
        </div>

        <div className="lg:w-1/2 w-full flex justify-center relative">
          <div className="absolute inset-0 bg-rosa/10 rounded-full blur-3xl opacity-80"></div>
          <div className="w-full max-w-lg aspect-square rounded-[3rem] bg-white/80 backdrop-blur-xl border border-borda shadow-xl relative flex items-center justify-center p-8 z-10 hover:scale-[1.02] transition-transform duration-500">
            <div className="w-[60%] h-[60%] flex items-center justify-center pointer-events-none">
              <Logo className="w-full h-full object-contain" />
            </div>
            <div className="absolute -left-8 top-12 bg-white rounded-2xl p-5 shadow-lg animate-float border border-borda">
              <span className="block text-4xl font-black text-vinho">95%</span>
              <span className="text-sm font-bold text-cinza uppercase tracking-wide">De Cura</span>
            </div>
            <div className="absolute -right-6 bottom-16 bg-white rounded-2xl p-5 shadow-lg animate-float-delayed border border-borda">
              <span className="block text-4xl font-black text-rosa">30%</span>
              <span className="text-sm font-bold text-cinza uppercase tracking-wide">Evitáveis</span>
            </div>
          </div>
        </div>
      </section>

      {/* BIG CTA QUIZ - FUNDO ESCURO (VERDE) */}
      <section className="py-24 bg-verde mt-12 relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-6 text-center text-white relative z-10">
          <h2 className="text-4xl sm:text-5xl font-black mb-6 text-marfim">Mito ou Verdade?</h2>
          <p className="text-lg sm:text-xl mb-10 text-marfim/80 max-w-2xl mx-auto font-light">
            Sutiã apertado causa problemas? E desodorante? Teste seus conhecimentos no nosso Quiz interativo de 2 minutos.
          </p>
          <Link to="/quiz" className="inline-flex items-center gap-3 px-10 py-5 bg-vinho text-white text-xl sm:text-2xl font-bold rounded-full shadow-lg hover:scale-105 hover:bg-[#7e1440] transition-all">
            COMEÇAR AGORA <ArrowRight className="w-7 h-7" />
          </Link>
        </div>
      </section>

      {/* BIG CTA ACOLHIMENTO - FUNDO ROSA/MARFIM */}
      <section className="py-24 bg-marfim border-y border-rosa/20 relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-6 text-center text-vinho relative z-10">
          <div className="w-20 h-20 bg-rosa/20 text-vinho rounded-full flex items-center justify-center mx-auto mb-6 shadow-inner">
            <HeartHandshake className="w-10 h-10 text-vinho" />
          </div>
          <h2 className="text-4xl sm:text-5xl font-black mb-6">Precisa de um minuto de paz?</h2>
          <p className="text-lg sm:text-xl mb-10 text-cinza max-w-2xl mx-auto font-medium leading-relaxed">
            O diagnóstico ou a dúvida trazem ansiedade. Criamos um espaço seguro com exercícios de respiração, mural de apoio e acolhimento para você desacelerar.
          </p>
          <Link to="/acolhimento" className="inline-flex items-center gap-3 px-10 py-5 bg-vinho text-white text-xl sm:text-2xl font-bold rounded-full shadow-xl hover:scale-105 hover:bg-[#7e1440] transition-all">
            QUERO ACOLHIMENTO <Heart className="w-7 h-7 text-rosa fill-rosa" />
          </Link>
        </div>
      </section>

      {/* CARDS DE ACESSO */}
      <section className="py-24 bg-nevoa/40">
        <div className="max-w-7xl mx-auto px-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <Link to="/sinais" className="bg-white p-8 rounded-[2rem] border border-borda hover:border-vinho shadow-sm hover:shadow-xl transition-all hover:-translate-y-2 group">
            <div className="w-16 h-16 bg-nevoa rounded-2xl flex items-center justify-center mb-6 group-hover:bg-vinho group-hover:text-white text-vinho transition-colors">
              <Search className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold text-vinho mb-3">Sinais de Alerta</h3>
            <p className="text-cinza mb-6 text-sm">Guia visual e interativo para reconhecer sintomas.</p>
            <span className="text-vinho font-bold text-sm flex items-center uppercase tracking-wide">Explorar <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform" /></span>
          </Link>
          
          <Link to="/mamografia" className="bg-white p-8 rounded-[2rem] border border-borda hover:border-rosa shadow-sm hover:shadow-xl transition-all hover:-translate-y-2 group">
            <div className="w-16 h-16 bg-nevoa rounded-2xl flex items-center justify-center mb-6 group-hover:bg-rosa group-hover:text-white text-rosa transition-colors">
              <Info className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold text-vinho mb-3">Mamografia</h3>
            <p className="text-cinza mb-6 text-sm">Idades, preparo e gráficos detalhados.</p>
            <span className="text-rosa font-bold text-sm flex items-center uppercase tracking-wide">Explorar <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform" /></span>
          </Link>
          
          <Link to="/entenda" className="bg-white p-8 rounded-[2rem] border border-borda hover:border-verde shadow-sm hover:shadow-xl transition-all hover:-translate-y-2 group">
            <div className="w-16 h-16 bg-nevoa rounded-2xl flex items-center justify-center mb-6 group-hover:bg-verde group-hover:text-white text-verde transition-colors">
              <BookOpen className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold text-vinho mb-3">A Doença</h3>
            <p className="text-cinza mb-6 text-sm">Dados visuais fáceis de entender.</p>
            <span className="text-verde font-bold text-sm flex items-center uppercase tracking-wide">Explorar <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform" /></span>
          </Link>
          
          <Link to="/caderno" className="bg-white p-8 rounded-[2rem] border border-borda hover:border-vinho shadow-sm hover:shadow-xl transition-all hover:-translate-y-2 group">
            <div className="w-16 h-16 bg-nevoa rounded-2xl flex items-center justify-center mb-6 group-hover:bg-vinho group-hover:text-white text-vinho transition-colors">
              <Heart className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold text-vinho mb-3">Diário Privado</h3>
            <p className="text-cinza mb-6 text-sm">Anote consultas e sintomas de forma segura.</p>
            <span className="text-vinho font-bold text-sm flex items-center uppercase tracking-wide">Acessar <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform" /></span>
          </Link>
        </div>
      </section>
    </main>
  );
};
