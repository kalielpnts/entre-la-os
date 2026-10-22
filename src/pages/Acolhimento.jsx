import React, { useState, useEffect } from 'react';
import { HeartHandshake, Wind, Users, Heart, Sparkles, Send, PhoneCall, Smile, MessageCircleHeart } from 'lucide-react';
import { EmotionCheckin } from '../components/EmotionCheckin';

export const Acolhimento = () => {
  // ESTRUTURA DE RESPIRAÇÃO
  const [breathing, setBreathing] = useState(false);
  const [breathText, setBreathText] = useState('Pronta?');
  const [scale, setScale] = useState(1);
  const [isDeepBg, setIsDeepBg] = useState(true); // Controla o tom do fundo escuro/claro

  // DEMAIS ESTADOS DA PÁGINA
  const [hugCount, setHugCount] = useState(148);
  const [hugSent, setHugSent] = useState(false);
  const [gratitudeText, setGratitudeText] = useState('');
  const [gratitudeSaved, setGratitudeSaved] = useState(false);

  useEffect(() => {
    let interval;
    if (breathing) {
      setBreathText('Inspire profundamente...');
      setScale(1.5);
      setIsDeepBg(false); // Fundo fica mais claro na inspiração
      
      let step = 0;
      interval = setInterval(() => {
        step++;
        if (step % 2 !== 0) {
          setBreathText('Expire devagar...');
          setScale(1);
          setIsDeepBg(true); // Fundo volta ao tom rosa mais escuro na expiração
        } else {
          setBreathText('Inspire profundamente...');
          setScale(1.5);
          setIsDeepBg(false); // Fundo clareia
        }
      }, 4000);
    } else {
      setBreathText('Pronta?');
      setScale(1);
      setIsDeepBg(true);
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [breathing]);

  const handleSendHug = () => {
    if (!hugSent) {
      setHugCount(prev => prev + 1);
      setHugSent(true);
    }
  };

  const handleSaveGratitude = (e) => {
    e.preventDefault();
    if (gratitudeText.trim()) {
      setGratitudeSaved(true);
    }
  };

  return (
    <main className="min-h-screen bg-white pt-24 md:pt-28 pb-16">
      
      {/* 1. CABEÇALHO PADRONIZADO */}
      <section className="bg-marfim py-16 px-4 border-b border-rosa/20 mb-12">
        <div className="container mx-auto max-w-4xl text-center">
          <span className="inline-flex items-center gap-2 bg-vinho/10 text-vinho px-4 py-1.5 rounded-full text-sm font-bold mb-6">
            <Heart className="w-4 h-4 text-rosa" /> Espaço de Cuidado
          </span>
          <h1 className="text-4xl md:text-5xl font-black text-vinho mb-6 leading-tight">
            Acolhimento
          </h1>
          <p className="text-lg text-cinza max-w-2xl mx-auto leading-relaxed">
            O impacto de um diagnóstico ou da espera por um exame afeta corpo e mente. Você não precisa atravessar isso sozinha.
          </p>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-6 space-y-16">

        {/* 2. FERRAMENTA DE RESPIRAÇÃO COM FUNDO ROSA ESCURO DINÂMICO (FADE IN/OUT) */}
        <div 
          className={`rounded-3xl p-8 md:p-12 text-center shadow-md relative overflow-hidden transition-colors ease-in-out duration-[4000ms] text-marfim ${
            isDeepBg ? 'bg-[#4a0d24]' : 'bg-[#9d2b51]'
          }`}
        >
          <Wind className="w-12 h-12 text-rosa/50 absolute top-6 left-6" />
          <h2 className="text-3xl font-bold mb-4 relative z-10">Um minuto para respirar</h2>
          <p className="text-sm text-gray-200 max-w-md mx-auto mb-10 relative z-10">
            A ansiedade é normal. Use esta ferramenta simples para desacelerar seus batimentos e focar no momento presente.
          </p>
          
          <div className="h-64 flex items-center justify-center relative z-10 mb-8">
            <div 
              className="w-32 h-32 bg-rosa/30 border-2 border-rosa rounded-full flex items-center justify-center transition-all ease-in-out duration-[4000ms]"
              style={{ transform: `scale(${scale})` }}
            >
              <Heart className="w-10 h-10 text-marfim opacity-80" />
            </div>
          </div>
          
          <p className="text-xl font-medium mb-6 h-8 relative z-10 transition-opacity duration-500">{breathText}</p>
          
          <button 
            onClick={() => setBreathing(!breathing)} 
            className="relative z-10 bg-marfim text-vinho px-8 py-3 rounded-full font-bold hover:bg-white transition-colors shadow-sm"
          >
            {breathing ? 'Parar Exercício' : 'Começar Exercício'}
          </button>
        </div>
        
        {/* 3. EMOTION CHECKIN (MANTIDO) */}
        <EmotionCheckin />

        {/* 4. MURAL INTERATIVO DE AFETO (MANTIDO) */}
        <section className="bg-nevoa p-8 md:p-12 rounded-3xl border border-rosa/20 text-center">
          <MessageCircleHeart className="w-12 h-12 text-rosa mx-auto mb-4" />
          <h2 className="text-3xl font-bold text-vinho mb-2">Mural do Afeto Virtual</h2>
          <p className="text-cinza max-w-lg mx-auto mb-8">
            Pessoas de todo o país passam por este espaço diariamente. Deixe ou receba um gesto de carinho agora.
          </p>

          <div className="bg-white p-8 rounded-2xl border border-borda shadow-sm max-w-md mx-auto flex flex-col items-center">
            <div className="text-4xl font-black text-vinho mb-2 flex items-center gap-2">
              <Heart className="w-8 h-8 text-rosa fill-rosa" /> {hugCount}
            </div>
            <p className="text-cinza text-sm mb-6">Abraços virtuais distribuídos hoje neste mural.</p>
            
            <button
              onClick={handleSendHug}
              disabled={hugSent}
              className={`w-full py-3 px-6 rounded-full font-bold transition-all flex items-center justify-center gap-2 ${
                hugSent 
                  ? 'bg-emerald-100 text-emerald-800 border border-emerald-300' 
                  : 'bg-rosa text-vinho hover:bg-rosa/80 shadow-md hover:scale-105'
              }`}
            >
              <Sparkles className="w-5 h-5" />
              {hugSent ? 'Seu abraço foi enviado com amor! ♡' : 'Enviar um Abraço Virtual'}
            </button>
          </div>
        </section>

        {/* 5. CAIXA DE GRATIDÃO E RESILIÊNCIA (MANTIDA) */}
        <section className="bg-white p-8 md:p-12 rounded-3xl border border-borda shadow-sm">
          <div className="max-w-2xl mx-auto text-center">
            <Smile className="w-10 h-10 text-vinho mx-auto mb-3" />
            <h2 className="text-2xl font-bold text-vinho mb-2">Pausa para um Pensamento Leve</h2>
            <p className="text-cinza text-sm mb-6">
              Ainda nos dias difíceis, guardar um pequeno motivo de acalento fortalece o coração. O que trouxe um sorriso ao seu dia hoje?
            </p>

            {!gratitudeSaved ? (
              <form onSubmit={handleSaveGratitude} className="flex flex-col sm:flex-row gap-3">
                <input
                  type="text"
                  value={gratitudeText}
                  onChange={(e) => setGratitudeText(e.target.value)}
                  placeholder="Ex: O abraço da minha filha, uma xícara de chá, o sol na janela..."
                  className="flex-1 px-5 py-3 rounded-full border border-borda focus:outline-none focus:border-rosa text-cinza"
                />
                <button
                  type="submit"
                  className="bg-vinho text-white px-6 py-3 rounded-full font-bold hover:bg-vinho/90 transition-colors shrink-0 flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" /> Guardar
                </button>
              </form>
            ) : (
              <div className="bg-marfim p-6 rounded-2xl border border-rosa/30 animate-fade-in-up">
                <p className="text-vinho font-bold text-lg mb-2">" {gratitudeText} "</p>
                <p className="text-cinza text-sm">Guardado no seu coração! Lembre-se desta sensação positiva sempre que precisar de força.</p>
                <button 
                  onClick={() => { setGratitudeSaved(false); setGratitudeText(''); }}
                  className="mt-4 text-xs font-bold text-rosa underline hover:text-vinho"
                >
                  Escrever outro pensamento
                </button>
              </div>
            )}
          </div>
        </section>

        {/* 6. CARTÕES (PACIENTES E CUIDADORES) MANTIDOS */}
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-nevoa p-8 rounded-3xl border border-rosa/30">
            <HeartHandshake className="w-10 h-10 text-vinho mb-4" />
            <h3 className="text-2xl font-bold text-vinho mb-4">Para Pacientes</h3>
            <ul className="space-y-4 text-cinza text-sm">
              <li className="bg-white p-4 rounded-xl shadow-sm border border-borda"><strong>Respeite seu tempo:</strong> É normal sentir medo ou tristeza. Não se cobre positivismo o tempo todo.</li>
              <li className="bg-white p-4 rounded-xl shadow-sm border border-borda"><strong>Peça ajuda prática:</strong> Aceite apoio com refeições, tarefas ou caronas para o hospital.</li>
              <li className="bg-white p-4 rounded-xl shadow-sm border border-borda"><strong>Apoio psicológico:</strong> A psico-oncologia ajuda a organizar os sentimentos durante a jornada.</li>
            </ul>
          </div>

          <div className="bg-white p-8 rounded-3xl border border-borda shadow-sm">
            <Users className="w-10 h-10 text-vinho mb-4" />
            <h3 className="text-2xl font-bold text-vinho mb-4">Para Rede de Apoio (Cuidadores)</h3>
            <ul className="space-y-4 text-cinza text-sm">
              <li className="bg-marfim p-4 rounded-xl shadow-sm border border-borda"><strong>Ouça sem julgar:</strong> Evite frases prontas do tipo "vai dar tudo certo". Às vezes o silêncio atencioso é o melhor abraço.</li>
              <li className="bg-marfim p-4 rounded-xl shadow-sm border border-borda"><strong>Seja concreto:</strong> Em vez de "avise se precisar de algo", ofereça: "posso levar seu almoço na terça?".</li>
              <li className="bg-marfim p-4 rounded-xl shadow-sm border border-borda"><strong>Cuide de você também:</strong> Cuidadores precisam de descanso para prestar um apoio sustentável.</li>
            </ul>
          </div>
        </div>

        {/* 7. CANAIS GRATUITOS DE APOIO EMOCIONAL (MANTIDO) */}
        <section className="bg-marfim p-8 rounded-3xl border border-rosa/20 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 bg-vinho text-white rounded-full flex items-center justify-center shrink-0">
              <PhoneCall className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-vinho">Apoio Emocional Gratuito (CVV)</h3>
              <p className="text-cinza text-sm">Atendimento gratuito, confidencial e disponível 24h por dia para conversar com carinho.</p>
            </div>
          </div>
          <a 
            href="tel:188" 
            className="bg-vinho text-white px-8 py-3 rounded-full font-bold hover:bg-vinho/90 transition-colors shrink-0 shadow-md"
          >
            Ligue 188
          </a>
        </section>

      </div>
    </main>
  );
};
