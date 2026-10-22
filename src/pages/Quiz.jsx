import React, { useState } from 'react';
import { QUIZ_DATA } from '../data/quizData';
import { Check, XCircle, RefreshCw } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Quiz = () => {
  const [index, setIndex] = useState(0);
  const [selected, setSelected] = useState(null);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

  const current = QUIZ_DATA[index];
  const progress = ((index) / QUIZ_DATA.length) * 100;

  const handleSelect = (idx) => {
    if (selected !== null) return;
    setSelected(idx);
    if (idx === current.a) setScore(score + 1);
  };

  const nextQuestion = () => {
    if (index + 1 < QUIZ_DATA.length) {
      setSelected(null);
      setIndex(index + 1);
    } else {
      setFinished(true);
    }
  };

  if (finished) {
    return (
      <main className="pt-28 md:pt-32 pt-28 pb-20 max-w-2xl mx-auto px-6 text-center">
        <div className="bg-white p-10 rounded-3xl border border-borda smooth-shadow">
          <div className="w-32 h-32 mx-auto rounded-full flex items-center justify-center text-4xl mb-6 font-bold" 
               style={{ background: `conic-gradient(#873F57 ${(score/10)*100}%, #f3f4f6 0)`}}>
            <div className="w-28 h-28 bg-white rounded-full flex items-center justify-center text-vinho">
              {score}/10
            </div>
          </div>
          <h2 className="font-serif text-3xl text-verde mb-4">Quiz Concluído!</h2>
          <p className="text-cinza mb-8 text-lg">
            {score >= 8 ? "Excelente! Você está super informada sobre a saúde das mamas." : "Bom trabalho! Continue explorando o site para aprender mais sobre prevenção."}
          </p>
          <div className="flex gap-4 justify-center">
            <button onClick={() => { setIndex(0); setSelected(null); setScore(0); setFinished(false); }} className="flex items-center gap-2 bg-nevoa text-vinho px-6 py-3 rounded-xl font-medium">
              <RefreshCw className="w-5 h-5" /> Refazer
            </button>
            <Link to="/entenda" className="bg-vinho text-white px-6 py-3 rounded-xl font-medium">
              Aprender Mais
            </Link>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="pt-28 md:pt-32 pt-28 pb-20 max-w-2xl mx-auto px-6">
      <div className="mb-8">
        <div className="flex justify-between text-sm text-cinza mb-2 font-medium">
          <span>Questão {index + 1} de 10</span>
          <span>{Math.round(progress)}% Concluído</span>
        </div>
        <div className="w-full h-3 bg-borda rounded-full overflow-hidden">
          <div className="h-full bg-vinho transition-all duration-500 ease-out" style={{ width: `${progress}%` }}></div>
        </div>
      </div>

      <div className="bg-white p-8 rounded-3xl border border-borda smooth-shadow">
        <span className="inline-block bg-rosa/20 text-vinho px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide mb-4">
          {current.c}
        </span>
        <h2 className="font-serif text-2xl text-verde mb-8 leading-tight">{current.q}</h2>

        <div className="space-y-4 mb-8">
          {current.o.map((option, idx) => {
            const isCorrect = selected !== null && idx === current.a;
            const isWrong = selected === idx && idx !== current.a;
            return (
              <button
                key={idx}
                onClick={() => handleSelect(idx)}
                disabled={selected !== null}
                className={`w-full p-5 text-left rounded-2xl border-2 font-medium transition-all text-lg flex items-center justify-between ${
                  selected === null ? 'border-borda hover:border-vinho hover:bg-nevoa' : isCorrect ? 'border-green-500 bg-green-50 text-green-900' : isWrong ? 'border-red-400 bg-red-50 text-red-900' : 'border-borda opacity-40'
                }`}
              >
                <span>{option}</span>
                {isCorrect && <Check className="w-6 h-6 text-green-600" />}
                {isWrong && <XCircle className="w-6 h-6 text-red-500" />}
              </button>
            );
          })}
        </div>

        {selected !== null && (
          <div className="bg-nevoa p-5 rounded-2xl border border-rosa/50 animate-in fade-in slide-in-from-bottom-4">
            <p className="text-vinho font-medium mb-4">{current.e}</p>
            <button onClick={nextQuestion} className="w-full bg-vinho text-white py-4 rounded-xl font-bold text-lg hover:bg-[#6c3246] transition-colors shadow-md">
              {index === 9 ? 'Ver Meu Resultado' : 'Próxima Pergunta'}
            </button>
          </div>
        )}
      </div>
    </main>
  );
};
