import React, { useState } from 'react';
import { 
  Stethoscope, Syringe, Zap, Pill, ArrowRight,
  Heart, BookOpen, ShieldCheck, Flower2, 
  MessageCircle, Users, Activity, Sparkles, PlusCircle
} from 'lucide-react';

export const Tratamento = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [activeGlossary, setActiveGlossary] = useState(null);

  // SEU DADO ORIGINAL MANTIDO
  const fases = [
    { icon: <Stethoscope />, title: "Cirurgia", desc: "A cirurgia é frequentemente o primeiro passo. Pode ser a retirada apenas do tumor (conservadora) ou a remoção completa da mama (mastectomia), geralmente com reconstrução simultânea." },
    { icon: <Syringe />, title: "Quimioterapia", desc: "Uso de medicamentos potentes (intravenosos) para destruir células doentes. Pode ser feita antes da cirurgia (para encolher o tumor) ou depois (para prevenir retorno)." },
    { icon: <Zap />, title: "Radioterapia", desc: "Uso de radiação direcionada na região da mama e axila para eliminar possíveis células residuais. Sessões rápidas e indolores, feitas diariamente." },
    { icon: <Pill />, title: "Hormonioterapia", desc: "Tratamento em forma de comprimido, tomado por 5 a 10 anos. Bloqueia os hormônios do corpo que alimentam certos tipos de tumores mamários." }
  ];

  // NOVOS DADOS (Glossário, Cuidados e Direitos)
  const glossary = [
    { term: "Linfonodo Sentinela", desc: "O primeiro gânglio linfático da axila que recebe a drenagem da mama. Ele é avaliado para saber se a doença tentou se espalhar." },
    { term: "Metástase", desc: "Ocorre quando células do tumor original viajam pela corrente sanguínea e se instalam em outras partes do corpo." },
    { term: "Terapia Alvo", desc: "Medicamentos modernos que 'miram' especificamente nas proteínas das células cancerígenas, poupando a maioria das células saudáveis." },
    { term: "Imunoterapia", desc: "Tratamento inovador que estimula o próprio sistema imunológico da paciente a reconhecer e destruir o câncer." }
  ];

  const integrativeCare = [
    { title: "Apoio Psicológico", desc: "Você não precisa ser 'guerreira' o tempo todo. Falar sobre os medos e frustrações é parte vital da cura.", icon: MessageCircle, color: "text-purple-500", bg: "bg-purple-100" },
    { title: "Nutrição Oncológica", desc: "A alimentação correta ajuda a manter a imunidade alta, diminuir enjoos da quimioterapia e dar energia.", icon: Activity, color: "text-emerald-500", bg: "bg-emerald-100" },
    { title: "Fisioterapia", desc: "Essencial, especialmente após a cirurgia, para recuperar a mobilidade do braço e evitar o inchaço (linfedema).", icon: Users, color: "text-blue-500", bg: "bg-blue-100" }
  ];

  return (
    <main className="min-h-screen bg-white pt-24 md:pt-28 pb-12">
      
      {/* 1. CABEÇALHO PADRONIZADO */}
      <section className="bg-marfim py-16 px-4 border-b border-rosa/20">
        <div className="container mx-auto max-w-4xl text-center">
          <span className="inline-flex items-center gap-2 bg-vinho/10 text-vinho px-4 py-1.5 rounded-full text-sm font-bold mb-6">
            <Sparkles className="w-4 h-4" /> Caminhos de Cura
          </span>
          <h1 className="text-4xl md:text-5xl font-black text-vinho mb-6 leading-tight">
            Tratamentos
          </h1>
          <p className="text-lg text-cinza max-w-2xl mx-auto leading-relaxed">
            O tratamento é altamente personalizado. Cada paciente terá uma combinação única baseada no tipo de tumor e no estágio da doença.
          </p>
        </div>
      </section>

      {/* 2. SUA TIMELINE ORIGINAL (Mantida e abraçada no layout) */}
      <section className="py-16 px-4 container mx-auto max-w-4xl">
        <h2 className="text-3xl font-bold text-vinho mb-10 text-center">Fases do Tratamento Convencional</h2>
        <div className="bg-white p-6 sm:p-10 rounded-3xl border border-rosa/20 shadow-sm">
          <div className="flex flex-wrap sm:flex-nowrap justify-between mb-8 relative">
            <div className="hidden sm:block absolute top-1/2 left-0 w-full h-1 bg-nevoa -translate-y-1/2 z-0"></div>
            
            {fases.map((fase, idx) => (
              <button 
                key={idx}
                onClick={() => setActiveTab(idx)}
                className={`relative z-10 flex flex-col items-center gap-3 w-1/2 sm:w-auto mb-6 sm:mb-0 transition-all duration-300 ${activeTab === idx ? 'scale-110' : 'opacity-60 hover:opacity-100'}`}
              >
                <div className={`w-16 h-16 rounded-full flex items-center justify-center text-2xl transition-colors shadow-md ${activeTab === idx ? 'bg-vinho text-white' : 'bg-marfim text-vinho border-2 border-borda'}`}>
                  {fase.icon}
                </div>
                <span className={`text-sm font-bold ${activeTab === idx ? 'text-vinho' : 'text-cinza'}`}>{fase.title}</span>
              </button>
            ))}
          </div>

          <div className="bg-marfim p-8 rounded-2xl border border-rosa/30 min-h-[180px] flex flex-col justify-center animate-fade-in-up">
            <h3 className="text-2xl font-bold text-vinho mb-3 flex items-center gap-3">
              <span className="text-rosa">{fases[activeTab].icon}</span> {fases[activeTab].title}
            </h3>
            <p className="text-cinza text-lg leading-relaxed">
              {fases[activeTab].desc}
            </p>
          </div>
        </div>
      </section>

      {/* 3. NOVO: GLOSSÁRIO DA PACIENTE (Empoderamento) */}
      <section className="bg-nevoa py-16 px-4 border-y border-borda/50">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-vinho mb-4 flex items-center justify-center gap-3">
              <BookOpen className="w-8 h-8 text-rosa" /> O que o médico falou?
            </h2>
            <p className="text-cinza text-lg">
              Palavras difíceis assustam. Clique nos termos abaixo para traduzir o "médiquês" e ter clareza sobre o seu diagnóstico.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {glossary.map((item, idx) => (
              <button 
                key={idx}
                onClick={() => setActiveGlossary(activeGlossary === idx ? null : idx)}
                className={`text-left p-6 rounded-2xl transition-all duration-300 border ${
                  activeGlossary === idx ? 'bg-white border-rosa shadow-md' : 'bg-white/50 border-borda hover:bg-white hover:border-rosa/50'
                }`}
              >
                <div className="flex justify-between items-center w-full">
                  <h3 className={`font-bold text-lg ${activeGlossary === idx ? 'text-vinho' : 'text-cinza'}`}>
                    {item.term}
                  </h3>
                  <PlusCircle className={`w-5 h-5 transition-transform duration-300 ${activeGlossary === idx ? 'rotate-45 text-rosa' : 'text-cinza/50'}`} />
                </div>
                
                <div className={`overflow-hidden transition-all duration-300 ${activeGlossary === idx ? 'max-h-40 mt-4 opacity-100' : 'max-h-0 opacity-0'}`}>
                  <p className="text-cinza/90 leading-relaxed border-t border-borda pt-4">
                    {item.desc}
                  </p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* 4. NOVO: CUIDADOS INTEGRATIVOS (Inclusão e Humanização) */}
      <section className="py-16 px-4 container mx-auto max-w-5xl">
        <h2 className="text-3xl font-bold text-vinho mb-10 text-center">Cuidado muito além do remédio</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {integrativeCare.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div key={idx} className="bg-white p-8 rounded-3xl shadow-sm border border-rosa/20 hover:shadow-md transition-shadow group">
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 ${item.bg}`}>
                  <Icon className={`w-7 h-7 ${item.color} group-hover:scale-110 transition-transform`} />
                </div>
                <h3 className="text-xl font-bold text-vinho mb-3">{item.title}</h3>
                <p className="text-cinza leading-relaxed">{item.desc}</p>
              </div>
            )
          })}
        </div>
      </section>

      {/* 5. NOVO: DIREITOS E QUALIDADE DE VIDA */}
      <section className="bg-vinho py-16 px-4 text-white">
        <div className="container mx-auto max-w-4xl">
          <div className="flex flex-col md:flex-row items-center gap-10">
            <div className="md:w-1/3 flex justify-center">
              <ShieldCheck className="w-32 h-32 text-rosa opacity-80" />
            </div>
            <div className="md:w-2/3">
              <h2 className="text-3xl font-bold mb-6">Conheça seus Direitos</h2>
              <div className="space-y-6">
                
                <div className="flex items-start gap-4">
                  <div className="bg-white/10 p-2 rounded-lg shrink-0 mt-1"><Heart className="w-5 h-5 text-rosa" /></div>
                  <div>
                    <h3 className="font-bold text-xl mb-1">Reconstrução Mamária</h3>
                    <p className="text-white/80 leading-relaxed">
                      A lei garante que a reconstrução seja feita na <strong>mesma cirurgia</strong> de retirada da mama (sempre que as condições clínicas permitirem), tanto pelo SUS quanto pelos planos de saúde.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-white/10 p-2 rounded-lg shrink-0 mt-1"><Flower2 className="w-5 h-5 text-rosa" /></div>
                  <div>
                    <h3 className="font-bold text-xl mb-1">Preservação da Fertilidade</h3>
                    <p className="text-white/80 leading-relaxed">
                      Se você é jovem e sonha em engravidar no futuro, converse com o médico sobre o congelamento de óvulos antes de começar a quimioterapia.
                    </p>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
};
