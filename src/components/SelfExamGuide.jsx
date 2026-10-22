import { useState } from 'react';
import { Eye, Droplets, Heart, ChevronRight, ChevronLeft } from 'lucide-react';

export const SelfExamGuide = () => {
  const [step, setStep] = useState(0);

  const steps = [
    { icon: Eye, title: 'No Espelho', desc: 'Com os braços caídos, depois levantados e, por fim, na cintura (fazendo força). Observe se há mudança no formato, tamanho ou na pele da mama.' },
    { icon: Droplets, title: 'No Banho', desc: 'Com a pele ensaboada fica mais fácil sentir. Levante um braço e use a outra mão para apalpar a mama inteira e a axila em movimentos circulares.' },
    { icon: Heart, title: 'Deitada', desc: 'Coloque uma toalha dobrada sob o ombro direito. Apalpe a mama direita com a mão esquerda. Repita do outro lado. Aperte suavemente o mamilo para ver se sai líquido.' }
  ];

  return (
    <div className="bg-marfim p-6 md:p-8 rounded-3xl shadow-sm border border-rosa/20">
      <h3 className="text-2xl font-bold text-vinho mb-6 text-center">Guia Prático do Autoexame</h3>
      
      <div className="flex justify-center gap-4 mb-8">
        {steps.map((_, idx) => (
          <div key={idx} className={`h-2 rounded-full transition-all duration-300 ${idx === step ? 'w-12 bg-vinho' : 'w-4 bg-vinho/20'}`} />
        ))}
      </div>

      <div className="bg-white rounded-2xl p-6 shadow-inner min-h-[220px] flex flex-col items-center justify-center text-center animate-fade-in-up">
        {steps.map((s, idx) => {
          const Icon = s.icon;
          if (idx !== step) return null;
          return (
            <div key={idx} className="flex flex-col items-center">
              <div className="w-16 h-16 bg-nevoa rounded-full flex items-center justify-center mb-4 text-rosa">
                <Icon className="w-8 h-8" />
              </div>
              <h4 className="text-xl font-bold text-vinho mb-3">Passo {idx + 1}: {s.title}</h4>
              <p className="text-cinza leading-relaxed max-w-md">{s.desc}</p>
            </div>
          );
        })}
      </div>

      <div className="flex justify-between mt-6">
        <button 
          onClick={() => setStep(prev => Math.max(0, prev - 1))}
          disabled={step === 0}
          className="flex items-center gap-2 text-vinho font-bold disabled:opacity-30 transition-opacity"
        >
          <ChevronLeft className="w-5 h-5" /> Anterior
        </button>
        <button 
          onClick={() => setStep(prev => Math.min(steps.length - 1, prev + 1))}
          disabled={step === steps.length - 1}
          className="flex items-center gap-2 text-vinho font-bold disabled:opacity-30 transition-opacity"
        >
          Próximo <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};
