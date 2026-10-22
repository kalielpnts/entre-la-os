import { MythTruthGame } from '../components/MythTruthGame';
import { SelfExamGuide } from '../components/SelfExamGuide';
import { PreventionPlanner } from '../components/PreventionPlanner';
import { Sparkles } from 'lucide-react';

export const Interativo = () => {
  return (
    <main className="pt-28 md:pt-32 min-h-screen py-12 px-4 bg-marfim/30">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-12 animate-fade-in-up">
          <span className="inline-flex items-center gap-2 bg-rosa/20 text-vinho px-4 py-1.5 rounded-full text-sm font-bold mb-4">
            <Sparkles className="w-4 h-4" /> Ferramentas Práticas
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-vinho mb-4">Espaço Interativo</h1>
          <p className="text-cinza max-w-2xl mx-auto">
            Aprenda brincando, organize seus exames e descubra como fazer o autoexame corretamente de forma visual.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Coluna Esquerda: Jogo e Calculadora */}
          <div className="space-y-8">
            <MythTruthGame />
            <PreventionPlanner />
          </div>

          {/* Coluna Direita: Guia do Autoexame */}
          <div className="flex flex-col h-full">
            <SelfExamGuide />
          </div>
        </div>
      </div>
    </main>
  );
};
