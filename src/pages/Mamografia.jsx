import React, { useState } from 'react';
import { 
  Calendar, Info, AlertTriangle, CheckCircle2, 
  FileText, Shield, Heart, XCircle, Droplet, Search, Activity
} from 'lucide-react';

export const Mamografia = () => {
  const [activeBirads, setActiveBirads] = useState(null);

  // DADOS QUE VOCÊ JÁ TINHA (MANTIDOS E ORGANIZADOS)
  const ageRecommendations = [
    {
      age: "Menos de 40 anos",
      subtitle: "Apenas com Risco Alto",
      text: "Exame clínico. Mamografia apenas se houver suspeita médica ou alto risco familiar.",
      color: "bg-emerald-100 text-emerald-800",
      border: "border-emerald-200"
    },
    {
      age: "40 a 49 anos",
      subtitle: "Recomendação Médica",
      text: "Avaliação individualizada junto ao ginecologista/mastologista.",
      color: "bg-yellow-100 text-yellow-800",
      border: "border-yellow-200"
    },
    {
      age: "50 a 69 anos",
      subtitle: "A cada 2 anos (Padrão SUS)",
      text: "Faixa etária de maior risco. O rastreamento bianual é garantido por lei no SUS.",
      color: "bg-vinho/10 text-vinho",
      border: "border-vinho/20"
    }
  ];

  const prepSteps = [
    "Marque o exame para a semana seguinte à menstruação, quando as mamas estão menos sensíveis.",
    "No dia do exame, não use desodorante, talco ou cremes nas axilas, pois podem aparecer como manchas no raio-X.",
    "Leve mamografias anteriores (se tiver) para comparação."
  ];

  // NOVOS DADOS ADICIONADOS (BI-RADS, Mitos, Direitos)
  const biradsData = [
    { level: "0", title: "Incompleto", desc: "Precisa de exames adicionais (como ultrassom) para ver melhor.", status: "neutral" },
    { level: "1", title: "Negativo", desc: "Nenhuma alteração. Mamas normais.", status: "good" },
    { level: "2", title: "Achado Benigno", desc: "Existem alterações (como cistos), mas 100% não cancerígenas.", status: "good" },
    { level: "3", title: "Provavelmente Benigno", desc: "Risco muito baixo (menos de 2%). Recomenda-se repetir o exame em 6 meses.", status: "warning" },
    { level: "4", title: "Suspeito", desc: "Recomenda-se biópsia para investigar melhor.", status: "danger" },
    { level: "5", title: "Altamente Suspeito", desc: "Alta probabilidade (mais de 95%) de malignidade. Biópsia urgente.", status: "danger" },
    { level: "6", title: "Malignidade Comprovada", desc: "Paciente já tem diagnóstico confirmado por biópsia antes do exame.", status: "danger" }
  ];

  const myths = [
    { question: "Quem tem prótese de silicone pode fazer?", answer: "Sim! O técnico usa uma manobra especial (Manobra de Eklund) para empurrar a prótese para trás e radiografar apenas o tecido mamário.", isMyth: false },
    { question: "A radiação da mamografia causa câncer?", answer: "Mito. A dose de radiação é extremamente baixa, equivalente a algumas semanas de exposição à radiação natural do ambiente.", isMyth: true },
    { question: "O exame dói de forma insuportável?", answer: "Mito. É um incômodo temporário devido à compressão necessária, mas dura apenas alguns segundos por posição.", isMyth: true }
  ];

  return (
    <main className="min-h-screen bg-white pt-24 md:pt-28 pb-12">
      
      {/* CABEÇALHO */}
      <section className="bg-marfim py-16 px-4 border-b border-rosa/20">
        <div className="container mx-auto max-w-4xl text-center">
          <span className="inline-flex items-center gap-2 bg-vinho/10 text-vinho px-4 py-1.5 rounded-full text-sm font-bold mb-6">
            <Search className="w-4 h-4" /> Diagnóstico Precoce
          </span>
          <h1 className="text-4xl md:text-5xl font-black text-vinho mb-6">
            A Mamografia
          </h1>
          <p className="text-lg text-cinza max-w-2xl mx-auto">
            O exame padrão-ouro para detectar o câncer de mama anos antes de qualquer caroço ser sentido no autoexame.
          </p>
        </div>
      </section>

      {/* RECOMENDAÇÃO POR IDADE (Conteúdo Original Mantido e Estilizado) */}
      <section className="py-16 px-4 container mx-auto max-w-5xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-vinho mb-4">Quando eu devo fazer?</h2>
          <p className="text-cinza text-lg">Diretrizes do Ministério da Saúde e Sociedades Médicas.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {ageRecommendations.map((item, idx) => (
            <div key={idx} className={`p-8 rounded-3xl border ${item.border} ${item.color} flex flex-col items-center text-center transition-transform hover:-translate-y-2`}>
              <h3 className="text-2xl font-black mb-2">{item.age}</h3>
              <div className="bg-white/50 px-4 py-1 rounded-full text-sm font-bold mb-4 uppercase tracking-wider">
                {item.subtitle}
              </div>
              <p className="font-medium opacity-90 leading-relaxed">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* NOVO: POR QUE PRECISA APERTAR? */}
      <section className="bg-nevoa py-16 px-4">
        <div className="container mx-auto max-w-4xl flex flex-col md:flex-row items-center gap-10">
          <div className="md:w-1/3 flex justify-center">
            <div className="w-40 h-40 bg-rosa/20 rounded-full flex items-center justify-center border-4 border-white shadow-xl">
              <Activity className="w-20 h-20 text-vinho" />
            </div>
          </div>
          <div className="md:w-2/3">
            <h2 className="text-3xl font-bold text-vinho mb-4">Por que a máquina aperta tanto?</h2>
            <p className="text-cinza text-lg leading-relaxed mb-4">
              A compressão da mama dura apenas alguns segundos e é absolutamente necessária por dois motivos cruciais:
            </p>
            <ul className="space-y-3 text-cinza">
              <li className="flex gap-3 items-start">
                <CheckCircle2 className="w-6 h-6 text-vinho shrink-0" />
                <span><strong>Menos Radiação:</strong> Ao espalhar o tecido, a máquina precisa emitir muito menos raio-X para atravessar a mama.</span>
              </li>
              <li className="flex gap-3 items-start">
                <CheckCircle2 className="w-6 h-6 text-vinho shrink-0" />
                <span><strong>Mais Clareza:</strong> A compressão evita que tecidos fiquem sobrepostos, impedindo que um tumor pequeno fique escondido atrás de uma glândula.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* COMO SE PREPARAR (Conteúdo Original Mantido e Estilizado) */}
      <section className="py-16 px-4 container mx-auto max-w-4xl border-b border-borda">
        <h2 className="text-3xl font-bold text-vinho mb-10 text-center">Como se preparar para o exame</h2>
        <div className="bg-white p-8 rounded-3xl shadow-sm border border-rosa/20">
          <ul className="space-y-6">
            {prepSteps.map((step, idx) => (
              <li key={idx} className="flex gap-4 items-start bg-marfim p-4 rounded-2xl">
                <div className="bg-vinho text-white w-8 h-8 rounded-full flex items-center justify-center font-bold shrink-0 mt-1">
                  {idx + 1}
                </div>
                <p className="text-lg text-cinza font-medium leading-relaxed">{step}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* NOVO: ENTENDENDO O LAUDO (BI-RADS) */}
      <section className="py-16 px-4 container mx-auto max-w-5xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-vinho mb-4">Entendendo o Resultado (BI-RADS)</h2>
          <p className="text-cinza text-lg max-w-2xl mx-auto">
            Quando você pega o laudo, ele vem com uma classificação chamada BI-RADS. 
            <strong> Não entre em pânico!</strong> A maioria dos resultados é benigna. Veja o que significa:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {biradsData.map((item, idx) => (
            <div 
              key={idx} 
              onMouseEnter={() => setActiveBirads(idx)}
              onMouseLeave={() => setActiveBirads(null)}
              className={`p-6 rounded-2xl border transition-all duration-300 ${
                activeBirads === idx ? 'scale-[1.02] shadow-lg' : 'bg-white border-borda hover:border-rosa'
              } ${
                item.status === 'good' && activeBirads === idx ? 'bg-emerald-50 border-emerald-200' :
                item.status === 'warning' && activeBirads === idx ? 'bg-yellow-50 border-yellow-200' :
                item.status === 'danger' && activeBirads === idx ? 'bg-red-50 border-red-200' :
                item.status === 'neutral' && activeBirads === idx ? 'bg-blue-50 border-blue-200' : ''
              }`}
            >
              <div className="flex items-center gap-4 mb-2">
                <span className={`text-2xl font-black ${
                  item.status === 'good' ? 'text-emerald-600' :
                  item.status === 'warning' ? 'text-yellow-600' :
                  item.status === 'danger' ? 'text-red-600' : 'text-blue-600'
                }`}>
                  Categoria {item.level}
                </span>
                <span className="font-bold text-cinza/80 uppercase text-sm tracking-wider">{item.title}</span>
              </div>
              <p className="text-cinza">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* NOVO: MITOS E VERDADES */}
      <section className="bg-vinho py-16 px-4 text-white">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold mb-10 text-center">Mitos e Verdades</h2>
          <div className="space-y-4">
            {myths.map((myth, idx) => (
              <div key={idx} className="bg-white/10 p-6 rounded-2xl border border-white/20 flex flex-col md:flex-row gap-6 items-start md:items-center">
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-2">{myth.question}</h3>
                  <p className="text-white/80">{myth.answer}</p>
                </div>
                <div className={`px-4 py-2 rounded-full font-bold text-sm uppercase tracking-wider shrink-0 ${
                  myth.isMyth ? 'bg-red-500/20 text-red-200 border border-red-500/50' : 'bg-emerald-500/20 text-emerald-200 border border-emerald-500/50'
                }`}>
                  {myth.isMyth ? 'Mito' : 'Verdade'}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* NOVO: SEUS DIREITOS */}
      <section className="py-16 px-4 container mx-auto max-w-4xl text-center">
        <Shield className="w-12 h-12 text-rosa mx-auto mb-6" />
        <h2 className="text-3xl font-bold text-vinho mb-6">Você Sabia? É seu direito!</h2>
        <div className="bg-marfim p-8 rounded-3xl border border-rosa/20 text-left">
          <p className="text-lg text-cinza mb-4">
            Pela <strong>CLT (Art. 473)</strong>, todo trabalhador tem direito a se ausentar do trabalho por <strong>até 3 dias por ano</strong> para a realização de exames preventivos de câncer, sem desconto no salário. 
          </p>
          <p className="text-lg text-cinza">
            Basta avisar a empresa com antecedência e apresentar o atestado de comparecimento do laboratório/hospital. Cuide da sua saúde, a lei está do seu lado!
          </p>
        </div>
      </section>

    </main>
  );
};
