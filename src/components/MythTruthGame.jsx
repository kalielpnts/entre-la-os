import { useState } from 'react';
import { CheckCircle2, XCircle, RefreshCw } from 'lucide-react';

export const MythTruthGame = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);

  const questions = [
    { statement: 'Sutiã apertado ou com bojo causa câncer de mama.', isMyth: true, explanation: 'Mito! Não existe nenhuma comprovação científica de que o uso de sutiãs, de qualquer tipo, aumente o risco da doença.' },
    { statement: 'Homens também podem ter câncer de mama.', isMyth: false, explanation: 'Verdade! Embora seja raro (cerca de 1% dos casos), homens têm glândulas mamárias e podem desenvolver a doença.' },
    { statement: 'Desodorante antitranspirante causa câncer.', isMyth: true, explanation: 'Mito! A Anvisa e o INCA já confirmaram que não há relação entre o alumínio dos desodorantes e o câncer de mama.' },
    { statement: 'Amamentar ajuda a proteger contra o câncer de mama.', isMyth: false, explanation: 'Verdade! A amamentação reduz o número de ciclos menstruais da mulher, diminuindo a exposição a hormônios que podem estimular tumores.' }
  ];

  const handleNext = (e) => {
    e.stopPropagation();
    setFlipped(false);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % questions.length);
    }, 400); // Aguarda a carta virar de volta antes de trocar o texto
  };

  const currentQ = questions[currentIndex];

  return (
    <div className="bg-white p-6 rounded-3xl shadow-sm border border-borda">
      <h3 className="text-xl font-bold text-vinho mb-4 flex items-center gap-2">
        <RefreshCw className="w-5 h-5" /> Mitos e Verdades
      </h3>
      
      <div 
        className="relative w-full h-72 sm:h-64 cursor-pointer" 
        style={{ perspective: '1000px' }}
        onClick={() => !flipped && setFlipped(true)}
      >
        <div 
          className="w-full h-full relative transition-transform duration-500"
          style={{ 
            transformStyle: 'preserve-3d', 
            transform: flipped ? 'rotateY(180deg)' : 'rotateY(0deg)' 
          }}
        >
          {/* Frente da Carta */}
          <div 
            className="absolute inset-0 w-full h-full bg-nevoa rounded-2xl p-6 flex flex-col items-center justify-center text-center border-2 border-vinho/20"
            style={{ backfaceVisibility: 'hidden' }}
          >
            <span className="text-rosa font-bold text-sm mb-2">Carta {currentIndex + 1} de {questions.length}</span>
            <p className="text-lg font-medium text-vinho">{currentQ.statement}</p>
            <span className="mt-6 text-sm text-cinza bg-white px-4 py-1.5 rounded-full shadow-sm animate-pulse">
              Clique para virar
            </span>
          </div>

          {/* Verso da Carta */}
          <div 
            className={`absolute inset-0 w-full h-full rounded-2xl p-6 flex flex-col items-center justify-center text-center text-white ${currentQ.isMyth ? 'bg-orange-500' : 'bg-emerald-500'}`}
            style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
          >
            {currentQ.isMyth ? <XCircle className="w-12 h-12 mb-2" /> : <CheckCircle2 className="w-12 h-12 mb-2" />}
            <h4 className="font-bold text-xl mb-2">{currentQ.isMyth ? 'MITO!' : 'VERDADE!'}</h4>
            <p className="text-sm leading-relaxed mb-4">{currentQ.explanation}</p>
            {flipped && (
              <button 
                onClick={handleNext}
                className="bg-white text-vinho px-6 py-2 rounded-full font-bold text-sm hover:scale-105 transition-transform shadow-md"
              >
                Próxima Carta
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
