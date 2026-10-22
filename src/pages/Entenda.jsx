import React, { useState, useEffect, useRef } from 'react';
import { 
  BookOpen, Activity, Dna, Apple, ChevronDown, HeartPulse, 
  ShieldAlert, Droplet, CircleDot, ShieldCheck, Heart, Sparkles, Target
} from 'lucide-react';

// --- Componente de Animação de Números (Contador JS) ---
const AnimatedCounter = ({ end, suffix = "", title }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        let start = 0;
        const duration = 2000; // 2 segundos de animação
        const increment = end / (duration / 16);
        const timer = setInterval(() => {
          start += increment;
          if (start >= end) {
            setCount(end);
            clearInterval(timer);
          } else {
            setCount(Math.floor(start));
          }
        }, 16);
        observer.disconnect();
      }
    }, { threshold: 0.5 });

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [end]);

  return (
    <div ref={ref} className="text-center p-6 bg-white/10 rounded-2xl backdrop-blur-sm border border-white/20 hover:scale-105 transition-transform duration-300">
      <h3 className="text-5xl md:text-6xl font-black text-white mb-2 shadow-sm">
        {count}{suffix}
      </h3>
      <p className="text-white/90 font-medium text-lg">{title}</p>
    </div>
  );
};

export const Entenda = () => {
  const [faqOpen, setFaqOpen] = useState(null);
  const [activeAnatomy, setActiveAnatomy] = useState('ductos');
  const [hoverPillar, setHoverPillar] = useState(null);

  const toggleFaq = (index) => setFaqOpen(faqOpen === index ? null : index);

  const faqs = [
    { question: "O câncer de mama dói?", answer: "Nas fases iniciais, o câncer de mama geralmente não dói. Por isso a mamografia é tão importante: ela consegue detectar alterações anos antes de elas serem sentidas ou causarem dor." },
    { question: "Todo nódulo (caroço) é câncer?", answer: "Não! Cerca de 80% dos nódulos encontrados na mama são benignos (como cistos ou fibroadenomas). Mas apenas um médico pode dar certeza, por isso todo nódulo deve ser investigado." },
    { question: "Quem não tem histórico na família pode ter?", answer: "Sim. Apenas de 5% a 10% dos casos de câncer de mama são hereditários (genéticos). A grande maioria dos casos ocorre em mulheres sem nenhum histórico familiar prévio." }
  ];

  const anatomyData = {
    ductos: { icon: Droplet, title: "Ductos Mamários", text: "São os minúsculos canais que transportam o leite até o mamilo. É exatamente aqui que começa a grande maioria dos casos de câncer de mama (chamado de carcinoma ductal)." },
    lobulos: { icon: CircleDot, title: "Lóbulos Mamários", text: "São as pequenas glândulas responsáveis por produzir o leite materno. Quando o câncer se origina nesta área, ele é chamado de carcinoma lobular." },
    linfonodos: { icon: ShieldCheck, title: "Linfonodos (Gânglios)", text: "Pequenos 'filtros' do sistema imunológico, localizados principalmente nas axilas. Os médicos os examinam para saber se o câncer está restrito à mama ou se tentou se espalhar." }
  };

  const pillars = [
    { id: 1, title: "Alimentação Viva", text: "Comida de verdade! Frutas, verduras e grãos ajudam a controlar o peso e reduzem inflamações no corpo.", icon: Apple },
    { id: 2, title: "Corpo em Movimento", text: "Apenas 150 minutos de atividade física moderada por semana já reduzem drasticamente o risco da doença.", icon: HeartPulse },
    { id: 3, title: "Rotina de Exames", text: "A detecção precoce é a sua maior arma. A mamografia anual após os 40 anos salva milhares de vidas.", icon: Target }
  ];

  return (
    <main className="min-h-screen bg-white pt-24 md:pt-28">
      {/* 1. CABEÇALHO (Fundo Claro - Marfim) */}
      <section className="bg-marfim py-20 px-4 border-b border-rosa/20 relative overflow-hidden">
        <div className="absolute top-10 left-10 text-rosa/20 animate-pulse"><Sparkles w={64} h={64} /></div>
        <div className="container mx-auto max-w-4xl text-center relative z-10 animate-fade-in-up">
          <span className="inline-flex items-center gap-2 bg-vinho/10 text-vinho px-4 py-1.5 rounded-full text-sm font-bold mb-6">
            <BookOpen className="w-4 h-4" /> Conhecimento é poder
          </span>
          <h1 className="text-4xl md:text-6xl font-black text-vinho mb-6 leading-tight">
            Entenda o Câncer de Mama
          </h1>
          <p className="text-lg md:text-xl text-cinza max-w-2xl mx-auto leading-relaxed">
            Informação clara e baseada em ciência é o primeiro passo para a prevenção. Descubra como o nosso corpo funciona.
          </p>
        </div>
      </section>

      {/* 2. O QUE ACONTECE (Fundo Claro - Branco) */}
      <section className="py-16 px-4 container mx-auto max-w-5xl">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="flex-1 space-y-6 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold text-vinho flex items-center gap-3">
              <HeartPulse className="text-rosa w-8 h-8" /> O que acontece no corpo?
            </h2>
            <p className="text-cinza leading-relaxed text-lg">
              Nosso corpo é formado por trilhões de células que crescem, se dividem e morrem de forma organizada. O câncer de mama acontece quando algumas células sofrem mutações e começam a se multiplicar de forma acelerada e descontrolada.
            </p>
            <div className="bg-rosa/10 p-6 rounded-2xl border-l-4 border-rosa text-vinho font-medium">
              "Quando descoberto e tratado em sua fase inicial, antes mesmo de poder ser apalpado, o câncer de mama tem até 95% de chance de cura."
            </div>
          </div>
        </div>
      </section>

      {/* 3. ANATOMIA INTERATIVA (Fundo Escuro - Vinho) */}
      <section className="bg-vinho py-20 px-4 text-white">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Anatomia Interativa da Mama</h2>
            <p className="text-white/70">Clique nos botões abaixo para entender onde o câncer pode se originar.</p>
          </div>

          <div className="bg-white/5 rounded-3xl p-4 md:p-8 border border-white/10 flex flex-col md:flex-row gap-8 items-center">
            {/* Botões de Navegação */}
            <div className="flex flex-col gap-3 w-full md:w-1/3">
              {Object.keys(anatomyData).map((key) => {
                const isActive = activeAnatomy === key;
                return (
                  <button
                    key={key}
                    onClick={() => setActiveAnatomy(key)}
                    className={`px-6 py-4 rounded-xl font-bold text-left transition-all duration-300 flex items-center justify-between ${
                      isActive ? 'bg-rosa text-vinho scale-105 shadow-lg' : 'bg-white/10 hover:bg-white/20 text-white'
                    }`}
                  >
                    {anatomyData[key].title}
                  </button>
                );
              })}
            </div>

            {/* Painel de Conteúdo Dinâmico */}
            <div className="w-full md:w-2/3 bg-white/10 rounded-2xl p-8 min-h-[250px] flex items-center justify-center relative overflow-hidden">
              {Object.keys(anatomyData).map((key) => {
                const Icon = anatomyData[key].icon;
                const isActive = activeAnatomy === key;
                return (
                  <div 
                    key={key} 
                    className={`absolute inset-0 p-8 flex flex-col justify-center items-center text-center transition-all duration-500 transform ${
                      isActive ? 'opacity-100 translate-y-0 scale-100 z-10' : 'opacity-0 translate-y-8 scale-95 -z-10'
                    }`}
                  >
                    <Icon className="w-16 h-16 text-rosa mb-6 animate-bounce" />
                    <h3 className="text-2xl font-bold mb-4">{anatomyData[key].title}</h3>
                    <p className="text-white/80 leading-relaxed text-lg">{anatomyData[key].text}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* 4. FATORES DE RISCO (Fundo Claro - Névoa) */}
      <section className="bg-nevoa py-20 px-4">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-vinho mb-4 flex items-center justify-center gap-2">
              <ShieldAlert className="w-8 h-8 text-vinho" /> Fatores de Risco
            </h2>
            <p className="text-cinza">O que aumenta as chances? Dividimos para ficar mais fácil de entender.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-3xl shadow-sm border-t-8 border-rosa hover:-translate-y-2 transition-transform duration-300">
              <div className="flex items-center gap-3 mb-6 text-vinho font-bold text-xl">
                <Dna className="w-8 h-8 text-rosa" /> Não podemos mudar (Genética/Idade)
              </div>
              <ul className="space-y-4 text-cinza text-lg">
                <li className="flex items-start gap-3"><div className="w-2.5 h-2.5 mt-2.5 bg-rosa rounded-full shrink-0"></div> Envelhecimento (risco maior após 50 anos).</li>
                <li className="flex items-start gap-3"><div className="w-2.5 h-2.5 mt-2.5 bg-rosa rounded-full shrink-0"></div> Histórico familiar de primeiro grau (mãe/irmã).</li>
                <li className="flex items-start gap-3"><div className="w-2.5 h-2.5 mt-2.5 bg-rosa rounded-full shrink-0"></div> Menstruação muito precoce ou menopausa tardia.</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-sm border-t-8 border-vinho hover:-translate-y-2 transition-transform duration-300">
              <div className="flex items-center gap-3 mb-6 text-vinho font-bold text-xl">
                <Apple className="w-8 h-8 text-vinho" /> Podemos mudar (Estilo de Vida)
              </div>
              <ul className="space-y-4 text-cinza text-lg">
                <li className="flex items-start gap-3"><div className="w-2.5 h-2.5 mt-2.5 bg-vinho rounded-full shrink-0"></div> Sedentarismo e falta de atividades físicas.</li>
                <li className="flex items-start gap-3"><div className="w-2.5 h-2.5 mt-2.5 bg-vinho rounded-full shrink-0"></div> Obesidade (principalmente após a menopausa).</li>
                <li className="flex items-start gap-3"><div className="w-2.5 h-2.5 mt-2.5 bg-vinho rounded-full shrink-0"></div> Consumo frequente de álcool e tabagismo.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 5. ESTATÍSTICAS DA ESPERANÇA (Fundo Vibrante - Rosa) */}
      <section className="bg-rosa py-16 px-4">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-vinho mb-2">Estatísticas da Esperança</h2>
            <p className="text-vinho/80 font-medium">Os números provam que a prevenção é o melhor caminho.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <AnimatedCounter end={95} suffix="%" title="Chances de cura no estágio inicial" />
            <AnimatedCounter end={30} suffix="%" title="Redução de risco com bons hábitos" />
            <AnimatedCounter end={1} suffix="em 8" title="Mulheres terão a doença (Previna-se!)" />
          </div>
        </div>
      </section>

      {/* 6. OS 3 PILARES DA PROTEÇÃO (Fundo Muito Escuro) */}
      <section className="bg-[#2b0714] py-20 px-4 text-white">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-rosa mb-4">Os 3 Pilares da Proteção</h2>
            <p className="text-white/70">Passe o mouse ou toque nos cartões para descobrir.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {pillars.map((pillar) => {
              const Icon = pillar.icon;
              const isHovered = hoverPillar === pillar.id;
              return (
                <div 
                  key={pillar.id}
                  onMouseEnter={() => setHoverPillar(pillar.id)}
                  onMouseLeave={() => setHoverPillar(null)}
                  className={`relative h-64 rounded-3xl cursor-pointer overflow-hidden transition-all duration-500 border border-rosa/20 ${
                    isHovered ? 'bg-rosa shadow-[0_0_30px_rgba(251,146,183,0.3)] transform -translate-y-2' : 'bg-white/5'
                  }`}
                >
                  <div className={`absolute inset-0 p-6 flex flex-col items-center justify-center text-center transition-all duration-500 ${
                    isHovered ? 'opacity-0 scale-75' : 'opacity-100 scale-100'
                  }`}>
                    <Icon className="w-16 h-16 text-rosa mb-4" />
                    <h3 className="text-xl font-bold">{pillar.title}</h3>
                  </div>
                  
                  <div className={`absolute inset-0 p-6 flex flex-col items-center justify-center text-center transition-all duration-500 bg-rosa text-vinho ${
                    isHovered ? 'opacity-100 scale-100' : 'opacity-0 scale-125'
                  }`}>
                    <h3 className="text-xl font-black mb-3">{pillar.title}</h3>
                    <p className="font-medium text-sm md:text-base">{pillar.text}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* 7. FAQ / DÚVIDAS COMUNS (Fundo Claro - Branco) */}
      <section className="py-20 px-4 container mx-auto max-w-3xl">
        <h2 className="text-3xl font-bold text-vinho mb-10 text-center flex items-center justify-center gap-3">
          <Activity className="text-rosa w-8 h-8" /> Dúvidas Comuns
        </h2>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className={`border border-borda rounded-2xl overflow-hidden transition-all duration-300 ${faqOpen === index ? 'bg-nevoa shadow-md ring-2 ring-rosa/30' : 'bg-white hover:border-rosa/50'}`}
            >
              <button 
                onClick={() => toggleFaq(index)}
                className="w-full text-left p-6 flex justify-between items-center focus:outline-none"
              >
                <span className="font-bold text-vinho text-lg pr-4">{faq.question}</span>
                <ChevronDown className={`w-6 h-6 shrink-0 text-rosa transition-transform duration-500 ${faqOpen === index ? 'rotate-180' : ''}`} />
              </button>
              <div 
                className={`px-6 overflow-hidden transition-all duration-500 ease-in-out ${faqOpen === index ? 'max-h-60 pb-6 opacity-100' : 'max-h-0 opacity-0'}`}
              >
                <p className="text-cinza leading-relaxed text-lg">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};
