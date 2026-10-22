import { useState } from 'react';
import { Calendar, AlertCircle } from 'lucide-react';

export const PreventionPlanner = () => {
  const [age, setAge] = useState('');
  const [history, setHistory] = useState(false);
  const [result, setResult] = useState(null);

  const calculatePlan = (e) => {
    e.preventDefault();
    const ageNum = parseInt(age);
    if (!ageNum) return;

    if (history) {
      setResult({
        title: "Atenção Redobrada (Histórico Familiar)",
        text: "Como você tem histórico familiar direto (mãe, irmã ou filha), as diretrizes recomendam que você inicie o acompanhamento clínico e a mamografia mais cedo. Geralmente, 10 anos antes da idade em que sua parente teve a doença. Agende um mastologista para criar seu plano personalizado."
      });
    } else if (ageNum < 40) {
      setResult({
        title: "Rotina Preventiva Jovem",
        text: "Nesta idade, a mamografia de rotina não é indicada. O foco é conhecer o próprio corpo (autoexame) e fazer o exame clínico das mamas anualmente com seu ginecologista. Se notar qualquer caroço, procure o médico."
      });
    } else if (ageNum >= 40 && ageNum <= 49) {
      setResult({
        title: "Transição e Atenção",
        text: "A Sociedade Brasileira de Mastologia (SBM) já recomenda a mamografia anual a partir dos 40 anos. Pelo SUS, a indicação padrão ainda é o exame clínico anual. Converse com seu médico para solicitar a mamografia."
      });
    } else {
      setResult({
        title: "Idade de Rastreamento (SUS)",
        text: "Você está na faixa etária de maior atenção! O Ministério da Saúde recomenda a mamografia de rotina a cada 2 anos (pelo SUS). A SBM recomenda anualmente. Não deixe de agendar seu exame, mesmo sem sintomas!"
      });
    }
  };

  return (
    <div className="bg-gradient-to-br from-vinho to-[#7e1440] p-6 rounded-3xl shadow-lg text-white">
      <h3 className="text-xl font-bold mb-2 flex items-center gap-2">
        <Calendar className="w-5 h-5 text-rosa" /> Meu Plano de Prevenção
      </h3>
      <p className="text-white/80 text-sm mb-6">Descubra qual a recomendação de exames para o seu perfil atual.</p>

      <form onSubmit={calculatePlan} className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1">Qual a sua idade?</label>
          <input 
            type="number" 
            value={age} 
            onChange={(e) => setAge(e.target.value)} 
            placeholder="Ex: 45"
            className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-2 text-white placeholder:text-white/40 outline-none focus:border-rosa"
            required
          />
        </div>
        <div className="flex items-center gap-3">
          <input 
            type="checkbox" 
            id="history" 
            checked={history} 
            onChange={(e) => setHistory(e.target.checked)}
            className="w-5 h-5 accent-rosa"
          />
          <label htmlFor="history" className="text-sm">Tenho mãe, irmã ou filha que teve câncer de mama.</label>
        </div>
        <button type="submit" className="w-full bg-rosa text-vinho font-bold py-3 rounded-xl hover:bg-white transition-colors">
          Gerar Meu Plano
        </button>
      </form>

      {result && (
        <div className="mt-6 bg-white rounded-xl p-5 text-vinho animate-fade-in-up relative overflow-hidden">
          <div className="absolute top-0 left-0 w-1 h-full bg-rosa"></div>
          <h4 className="font-bold text-lg mb-2">{result.title}</h4>
          <p className="text-sm text-cinza leading-relaxed">{result.text}</p>
          <div className="mt-4 flex items-start gap-2 text-xs bg-nevoa p-2 rounded-lg text-cinza/80">
            <AlertCircle className="w-4 h-4 shrink-0 mt-0.5 text-vinho" />
            <p>Isto é uma simulação educativa baseada em protocolos gerais. Consulte sempre seu médico.</p>
          </div>
        </div>
      )}
    </div>
  );
};
