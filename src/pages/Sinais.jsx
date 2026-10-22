import React, { useState } from 'react';
import { 
  Eye, Hand, AlertCircle, CheckCircle2, AlertTriangle, 
  Search, Droplet, ArrowRight, Activity, Target, Thermometer, 
  Layers, ArrowDownCircle, Info
} from 'lucide-react';

export const Sinais = () => {
  const [activeTrafficLight, setActiveTrafficLight] = useState('vermelho');
  const [activeStep, setActiveStep] = useState(0);
  const [activeSign, setActiveSign] = useState('normal');

  const trafficLightData = {
    verde: { color: 'bg-emerald-500', title: 'Normal (Fique Tranquila)', items: ['Mamas levemente assimétricas', 'Sensibilidade leve antes da menstruação', 'Pequenos inchaços que somem após o ciclo'] },
    amarelo: { color: 'bg-yellow-500', title: 'Atenção (Observe)', items: ['Dor contínua que não passa após a menstruação', 'Vermelhidão leve na pele', 'Nódulo que parece macio e se move'] },
    vermelho: { color: 'bg-red-500', title: 'Alerta (Busque Médico)', items: ['Caroço duro, fixo e indolor', 'Saída de líquido com sangue', 'Pele com aspecto de casca de laranja'] }
  };

  const autoExameSteps = [
    { title: 'No Espelho', icon: Eye, text: 'Com os braços abaixados, observe o tamanho, forma e cor. Depois, levante os braços e veja se há alguma alteração no contorno.' },
    { title: 'No Banho', icon: Hand, text: 'Com a pele ensaboada, levante um braço e use a mão oposta para apalpar a mama em movimentos circulares.' },
    { title: 'Deitada', icon: Activity, text: 'Coloque um travesseiro debaixo do ombro. Apalpe de fora para dentro até o mamilo. Pressione suavemente para ver se sai líquido.' }
  ];

  // Dados do Painel Visual
  const visualSigns = {
    normal: { 
      title: 'Mama Normal', 
      icon: CheckCircle2, color: 'text-emerald-500', bgColor: 'bg-emerald-500/10',
      appearance: 'Pele lisa, cor uniforme, mamilo no formato padrão da paciente e sem nódulos palpáveis.', 
      action: 'Continue fazendo seu autoexame mensalmente para conhecer bem o padrão do seu corpo.' 
    },
    caroco: { 
      title: 'Nódulo (Caroço)', 
      icon: Target, color: 'text-vinho', bgColor: 'bg-vinho/10',
      appearance: 'Um caroço endurecido, que geralmente não dói e não se move quando você empurra.', 
      action: 'Use as pontas dos três dedos médios para apalpar profundamente em movimentos circulares.' 
    },
    vermelhidao: { 
      title: 'Vermelhidão e Calor', 
      icon: Thermometer, color: 'text-red-500', bgColor: 'bg-red-500/10',
      appearance: 'A pele da mama fica com uma mancha vermelha ou rosada e parece mais quente que o normal.', 
      action: 'Observe no espelho em um ambiente iluminado e compare a temperatura entre as duas mamas.' 
    },
    casca: { 
      title: 'Casca de Laranja', 
      icon: Layers, color: 'text-orange-500', bgColor: 'bg-orange-500/10',
      appearance: 'A pele retrai, fica mais grossa e com pequenos buraquinhos (poros dilatados).', 
      action: 'Observe se a textura da pele muda quando você levanta os braços em frente ao espelho.' 
    },
    mamilo: { 
      title: 'Inversão do Mamilo', 
      icon: ArrowDownCircle, color: 'text-rosa', bgColor: 'bg-rosa/20',
      appearance: 'O bico do peito, que antes era para fora, de repente é "puxado" para dentro da mama.', 
      action: 'Olhe de perfil no espelho. Se o mamilo sempre foi para dentro, é normal. O alerta é para mudanças recentes.' 
    }
  };

  return (
    <main className="min-h-screen bg-white pt-24 md:pt-28 pb-12">
      
      {/* 1. CABEÇALHO */}
      <section className="bg-marfim py-16 px-4 border-b border-rosa/20">
        <div className="container mx-auto max-w-4xl text-center animate-fade-in-up">
          <span className="inline-flex items-center gap-2 bg-vinho/10 text-vinho px-4 py-1.5 rounded-full text-sm font-bold mb-6">
            <Search className="w-4 h-4" /> O corpo fala
          </span>
          <h1 className="text-4xl md:text-5xl font-black text-vinho mb-6 leading-tight">
            Sinais e Sintomas
          </h1>
          <p className="text-lg text-cinza max-w-2xl mx-auto leading-relaxed">
            Conhecer o próprio corpo é fundamental. O câncer de mama pode apresentar vários sinais além do famoso "caroço". Aprenda a identificar visualmente.
          </p>
        </div>
      </section>

      {/* 2. EXPLORADOR VISUAL (O Desenho Interativo Novo e Limpo) */}
      <section className="py-16 px-4 container mx-auto max-w-6xl border-b border-borda/50">
        <h2 className="text-3xl font-bold text-vinho mb-4 text-center">Explorador Visual</h2>
        <p className="text-center text-cinza mb-10 text-lg">Clique nos sinais para ver como eles podem se apresentar na mama.</p>
        
        <div className="flex flex-col lg:flex-row gap-10 items-stretch bg-white p-8 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-rosa/20">
          
          {/* Ilustração em SVG */}
          <div className="w-full lg:w-1/2 flex justify-center items-center bg-nevoa rounded-2xl p-8 min-h-[350px]">
            <svg viewBox="0 0 200 200" className="w-full max-w-[320px] h-auto drop-shadow-xl overflow-visible">
              <defs>
                <radialGradient id="mamaGrad" cx="40%" cy="40%" r="60%">
                  <stop offset="0%" stopColor="#fdf2f8" />
                  <stop offset="100%" stopColor="#fbcfe8" />
                </radialGradient>
                <radialGradient id="rednessGrad" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#ef4444" stopOpacity="0.7" />
                  <stop offset="100%" stopColor="#ef4444" stopOpacity="0" />
                </radialGradient>
                <pattern id="cascaPattern" width="8" height="8" patternUnits="userSpaceOnUse">
                  <circle cx="2" cy="2" r="1" fill="#d97706" opacity="0.3" />
                  <circle cx="6" cy="6" r="1.5" fill="#d97706" opacity="0.4" />
                </pattern>
                <filter id="shadow">
                  <feDropShadow dx="0" dy="4" stdDeviation="6" floodOpacity="0.1"/>
                </filter>
              </defs>

              {/* Base da Mama */}
              <circle cx="100" cy="100" r="85" fill="url(#mamaGrad)" filter="url(#shadow)" stroke="#f9a8d4" strokeWidth="2" />

              {/* Vermelhidão */}
              <g className={`transition-opacity duration-700 ${activeSign === 'vermelhidao' ? 'opacity-100' : 'opacity-0'}`}>
                <circle cx="120" cy="70" r="55" fill="url(#rednessGrad)" className="animate-pulse" style={{ animationDuration: '3s' }} />
              </g>

              {/* Textura Casca de Laranja */}
              <g className={`transition-opacity duration-700 ${activeSign === 'casca' ? 'opacity-100' : 'opacity-0'}`}>
                <circle cx="100" cy="100" r="85" fill="url(#cascaPattern)" />
              </g>

              {/* Caroço / Nódulo */}
              <g className={`transition-all duration-500 ${activeSign === 'caroco' ? 'opacity-100 scale-100' : 'opacity-0 scale-50'} origin-[60px_70px]`}>
                <circle cx="60" cy="70" r="14" fill="#831843" className="animate-pulse" />
                <circle cx="60" cy="70" r="22" fill="#831843" opacity="0.2" className="animate-ping" style={{ animationDuration: '2.5s' }} />
                {/* Linhas indicativas do caroço */}
                <path d="M 60 40 L 60 52 M 60 88 L 60 100 M 30 70 L 42 70 M 78 70 L 90 70" stroke="#831843" strokeWidth="2" strokeLinecap="round" opacity="0.5" />
              </g>

              {/* Aréola e Mamilo */}
              <g className={`transition-all duration-700 origin-[150px_120px] ${activeSign === 'mamilo' ? 'scale-90' : 'scale-100'}`}>
                {/* Aréola */}
                <ellipse cx="150" cy="120" rx="22" ry="30" fill="#f472b6" opacity="0.9" transform="rotate(-15 150 120)" />
                
                {/* Mamilo Normal vs Invertido */}
                {activeSign !== 'mamilo' ? (
                  <ellipse cx="158" cy="122" rx="6" ry="12" fill="#be185d" transform="rotate(-15 158 122)" />
                ) : (
                  <g>
                    {/* Buraco do mamilo invertido */}
                    <ellipse cx="145" cy="118" rx="8" ry="14" fill="#9d174d" transform="rotate(-15 145 118)" opacity="0.8" />
                    <path d="M 140 110 Q 155 120 140 130" stroke="#831843" strokeWidth="2" fill="none" opacity="0.6"/>
                  </g>
                )}
              </g>
            </svg>
          </div>

          {/* Botões e Textos Explicativos */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center">
            
            {/* Abas */}
            <div className="flex flex-wrap gap-2 mb-8">
              {Object.keys(visualSigns).map((key) => {
                const isActive = activeSign === key;
                return (
                  <button
                    key={key}
                    onClick={() => setActiveSign(key)}
                    className={`px-4 py-2 rounded-full font-bold text-sm transition-all duration-300 ${
                      isActive ? 'bg-vinho text-white shadow-md scale-105' : 'bg-nevoa text-cinza hover:bg-rosa/20 hover:text-vinho'
                    }`}
                  >
                    {visualSigns[key].title}
                  </button>
                )
              })}
            </div>

            {/* Painel de Conteúdo */}
            <div className="bg-nevoa p-6 rounded-2xl border border-borda animate-fade-in-up min-h-[220px]">
              <div className="flex items-center gap-4 mb-4">
                <div className={`w-12 h-12 rounded-full flex items-center justify-center ${visualSigns[activeSign].bgColor}`}>
                  {React.createElement(visualSigns[activeSign].icon, { className: `w-6 h-6 ${visualSigns[activeSign].color}` })}
                </div>
                <h3 className="text-2xl font-bold text-vinho">{visualSigns[activeSign].title}</h3>
              </div>
              
              <div className="space-y-4">
                <div>
                  <h4 className="text-xs font-bold text-vinho uppercase tracking-wider mb-1">Como se parece:</h4>
                  <p className="text-cinza">{visualSigns[activeSign].appearance}</p>
                </div>
                <div>
                  <h4 className="text-xs font-bold text-vinho uppercase tracking-wider mb-1">O que fazer:</h4>
                  <p className="text-cinza font-medium">{visualSigns[activeSign].action}</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. SEMÁFORO DA ATENÇÃO */}
      <section className="bg-vinho py-20 px-4 text-white">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Semáforo da Atenção</h2>
            <p className="text-white/80">Clique nas cores para entender o que é normal e o que exige urgência.</p>
          </div>

          <div className="flex flex-col md:flex-row gap-8 items-center bg-white/5 p-8 rounded-3xl border border-white/10">
            <div className="flex md:flex-col gap-4 bg-black/20 p-4 rounded-full">
              {Object.keys(trafficLightData).map((key) => (
                <button
                  key={key}
                  onClick={() => setActiveTrafficLight(key)}
                  className={`w-16 h-16 rounded-full transition-all duration-300 shadow-lg ${
                    activeTrafficLight === key ? `${trafficLightData[key].color} scale-110 shadow-[0_0_20px_currentColor]` : `${trafficLightData[key].color} opacity-30 hover:opacity-60`
                  }`}
                  aria-label={`Sinal ${key}`}
                />
              ))}
            </div>

            <div className="flex-1 bg-white text-vinho p-8 rounded-2xl w-full min-h-[220px] shadow-xl transition-all duration-500">
              <h3 className={`text-2xl font-black mb-4 flex items-center gap-3 ${
                activeTrafficLight === 'verde' ? 'text-emerald-600' : activeTrafficLight === 'amarelo' ? 'text-yellow-600' : 'text-red-600'
              }`}>
                {activeTrafficLight === 'verde' && <CheckCircle2 className="w-8 h-8" />}
                {activeTrafficLight === 'amarelo' && <AlertTriangle className="w-8 h-8" />}
                {activeTrafficLight === 'vermelho' && <AlertCircle className="w-8 h-8" />}
                {trafficLightData[activeTrafficLight].title}
              </h3>
              <ul className="space-y-3">
                {trafficLightData[activeTrafficLight].items.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-lg text-cinza font-medium">
                    <span className={`w-2.5 h-2.5 rounded-full mt-2.5 shrink-0 ${trafficLightData[activeTrafficLight].color}`} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 4. GUIA DO AUTOEXAME */}
      <section className="bg-nevoa py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-vinho mb-4">Passo a Passo do Autoexame</h2>
            <p className="text-cinza text-lg">Faça uma vez por mês, 3 a 5 dias após a menstruação.</p>
          </div>

          <div className="bg-white rounded-3xl shadow-sm border border-rosa/20 overflow-hidden">
            <div className="flex flex-col sm:flex-row border-b border-borda">
              {autoExameSteps.map((step, idx) => {
                const Icon = step.icon;
                const isActive = activeStep === idx;
                return (
                  <button
                    key={idx}
                    onClick={() => setActiveStep(idx)}
                    className={`flex-1 py-4 px-6 flex items-center justify-center gap-2 font-bold transition-colors ${
                      isActive ? 'bg-rosa text-vinho border-b-4 border-vinho' : 'text-cinza hover:bg-marfim'
                    }`}
                  >
                    <Icon className={`w-5 h-5 ${isActive ? 'text-vinho' : 'text-cinza'}`} />
                    Passo {idx + 1}: {step.title}
                  </button>
                );
              })}
            </div>
            
            <div className="p-8 md:p-12 text-center min-h-[200px] flex flex-col items-center justify-center">
              <p className="text-xl md:text-2xl text-vinho font-medium leading-relaxed animate-fade-in-up">
                {autoExameSteps[activeStep].text}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. ALERTA ANIMADO */}
      <section className="bg-rosa py-12 px-4">
        <div className="container mx-auto max-w-4xl text-center flex flex-col md:flex-row items-center justify-center gap-6">
          <div className="bg-white p-4 rounded-full shadow-lg animate-bounce">
            <CheckCircle2 className="w-12 h-12 text-vinho" />
          </div>
          <div className="text-vinho text-left">
            <h3 className="text-2xl font-black mb-2">Lembrete Importante!</h3>
            <p className="text-lg font-medium text-vinho/80">
              O autoexame <strong>não substitui a mamografia</strong>. Ele é apenas uma forma de conhecer seu corpo.
            </p>
          </div>
        </div>
      </section>

    </main>
  );
};
