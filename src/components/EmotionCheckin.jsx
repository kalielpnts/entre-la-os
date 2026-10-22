import { useState } from 'react';
import { Heart, CloudRain, Sun, Wind, Coffee } from 'lucide-react';

export const EmotionCheckin = () => {
  const [selected, setSelected] = useState(null);

  const emotions = [
    { id: 'medo', icon: CloudRain, label: 'Com Medo', color: 'bg-blue-100 text-blue-700 border-blue-200 hover:bg-blue-200', message: 'Sentir medo é uma reação natural ao desconhecido. Você não precisa ser forte o tempo todo. Respire fundo, dê um passo de cada vez e lembre-se de que você está amparada por profissionais e por pessoas que te amam.' },
    { id: 'cansada', icon: Coffee, label: 'Exausta', color: 'bg-orange-100 text-orange-700 border-orange-200 hover:bg-orange-200', message: 'Seu corpo e sua mente estão processando muitas informações. Tudo bem querer apenas descansar hoje. Acolha seu cansaço, faça uma pausa e permita-se não fazer nada por um momento.' },
    { id: 'ansiosa', icon: Wind, label: 'Ansiosa', color: 'bg-purple-100 text-purple-700 border-purple-200 hover:bg-purple-200', message: 'A ansiedade costuma nos levar para um futuro que ainda nem aconteceu. Tente trazer sua atenção de volta para o agora. Você só precisa lidar com o dia de hoje. O amanhã nós resolvemos amanhã.' },
    { id: 'esperancosa', icon: Sun, label: 'Esperançosa', color: 'bg-yellow-100 text-yellow-700 border-yellow-200 hover:bg-yellow-200', message: 'Que maravilha! A esperança é o combustível mais poderoso que existe. Guarde essa sensação no peito e use-a como âncora para os dias em que o sol parecer não brilhar tanto.' },
    { id: 'forte', icon: Heart, label: 'Forte', color: 'bg-rose-100 text-rose-700 border-rose-200 hover:bg-rose-200', message: 'Você é uma fortaleza! Celebre essa força que pulsa em você hoje. Lembre-se de que essa coragem já é sua e estará aí sempre que você precisar acessá-la novamente.' }
  ];

  return (
    <div className="bg-white rounded-3xl p-8 shadow-sm border border-borda max-w-2xl mx-auto my-12">
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold text-vinho mb-2">Como você está se sentindo hoje?</h3>
        <p className="text-cinza text-sm">Não existe sentimento certo ou errado. Clique na emoção que mais se aproxima do seu estado agora.</p>
      </div>

      <div className="flex flex-wrap justify-center gap-3 mb-8">
        {emotions.map((emo) => {
          const Icon = emo.icon;
          const isActive = selected?.id === emo.id;
          return (
            <button
              key={emo.id}
              onClick={() => setSelected(emo)}
              className={`flex items-center gap-2 px-5 py-3 rounded-full border-2 transition-all duration-300 ${
                isActive ? emo.color + ' scale-105 shadow-md' : 'bg-transparent border-borda text-cinza hover:border-vinho/30'
              }`}
            >
              <Icon className={`w-5 h-5 ${isActive ? '' : 'text-cinza/70'}`} />
              <span className="font-medium">{emo.label}</span>
            </button>
          );
        })}
      </div>

      <div className={`transition-all duration-500 overflow-hidden ${selected ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}>
        {selected && (
          <div className={`p-6 rounded-2xl ${selected.color.split(' ')[0]} border border-white shadow-inner`}>
            <p className={`text-center leading-relaxed ${selected.color.split(' ')[1]}`}>
              {selected.message}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};
