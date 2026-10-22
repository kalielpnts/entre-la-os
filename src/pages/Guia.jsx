import React, { useState } from 'react';
import { Map, AlertCircle, CalendarClock, MessageCircle, FileText, CheckSquare, ShieldCheck, ArrowLeft, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Guia = () => {
  const [step, setStep] = useState(0);
  const [checklist, setChecklist] = useState([
    { id: 1, text: "Anotar a data em que percebeu a alteração ou sintoma", checked: false },
    { id: 2, text: "Separar exames anteriores da mama (ultrassons, mamografias)", checked: false },
    { id: 3, text: "Listar remédios de uso contínuo ou histórico familiar de câncer", checked: false },
    { id: 4, text: "Anotar as dúvidas principais num bloco de notas para a consulta", checked: false }
  ]);

  const toggleCheck = (id) => {
    setChecklist(checklist.map(item => item.id === id ? { ...item, checked: !item.checked } : item));
  };

  const options = [
    { id: 1, title: "Senti um nódulo ou alteração", icon: <AlertCircle /> },
    { id: 2, title: "Vou fazer a mamografia", icon: <CalendarClock /> },
    { id: 3, title: "Recebi um diagnóstico", icon: <MessageCircle /> }
  ];

  const results = {
    1: {
      title: "Não entre em pânico. Ação é a resposta.",
      desc: "Muitos nódulos são cistos benignos. Porém, você precisa agendar uma consulta com um ginecologista ou mastologista imediatamente para investigar.",
      links: [
        { label: "Ir para Caderno (Anotar sintomas)", url: "/caderno" },
        { label: "Ver todos os sinais de alerta", url: "/sinais" }
      ]
    },
    2: {
      title: "Prepare-se para o seu exame",
      desc: "O rastreamento pelo SUS é dos 50 aos 69 anos, mas pode ser feito em outras idades com indicação médica. Agende após o período menstrual.",
      links: [
        { label: "Ler sobre Mamografia", url: "/mamografia" },
        { label: "Testar conhecimentos (Quiz)", url: "/quiz" }
      ]
    },
    3: {
      title: "Um passo de cada vez",
      desc: "Um diagnóstico é assustador, mas a medicina moderna tem altíssimas taxas de sucesso. Respire fundo, não busque informações soltas no Google, foque no seu médico.",
      links: [
        { label: "Entender os Tratamentos", url: "/tratamento" },
        { label: "Rede de Acolhimento", url: "/acolhimento" },
        { label: "Glossário (Termos Médicos)", url: "/glossario" }
      ]
    }
  };

  return (
    <main className="min-h-screen bg-white pt-28 md:pt-32 pb-20">
      
      {/* 1. CABEÇALHO PADRONIZADO (Com espaçamento ajustado para não cobrir sob o Header) */}
      <section className="bg-marfim py-12 px-4 border-b border-rosa/20 mb-12">
        <div className="container mx-auto max-w-4xl text-center">
          <span className="inline-flex items-center gap-2 bg-vinho/10 text-vinho px-4 py-1.5 rounded-full text-sm font-bold mb-6">
            <Sparkles className="w-4 h-4 text-rosa" /> Triagem Personalizada
          </span>
          <h1 className="text-4xl md:text-5xl font-black text-vinho mb-6 leading-tight flex items-center justify-center gap-3">

<Map className="w-10 h-10 text-rosa" />
Meu Guia Pessoal
          </h1>
          <p className="text-lg text-cinza max-w-2xl mx-auto leading-relaxed">
            Selecione o seu momento atual para receber as recomendações adequadas e direcionadas da nossa plataforma.
          </p>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-6 space-y-16">

        {/* 2. SUA LÓGICA ORIGINAL DE TRIAGEM (MANTIDA 100%) */}
        {!step ? (
          <div className="space-y-4">
            {options.map(opt => (
              <button
                key={opt.id}
                onClick={() => setStep(opt.id)}
                className="w-full bg-white p-6 rounded-2xl border border-borda shadow-sm hover:border-vinho hover:shadow-md transition-all flex items-center gap-4 text-left group"
              >
                <div className="w-12 h-12 bg-nevoa text-vinho rounded-full flex items-center justify-center group-hover:bg-vinho group-hover:text-white transition-colors">
                  {opt.icon}
                </div>
                <span className="font-bold text-vinho text-lg">{opt.title}</span>
              </button>
            ))}
          </div>
        ) : (
          <div className="bg-white p-8 rounded-3xl border border-rosa/30 shadow-sm animate-fade-in-up">
            <button 
              onClick={() => setStep(0)} 
              className="text-sm font-bold text-vinho hover:text-rosa flex items-center gap-2 mb-6 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" /> Voltar para as opções
            </button>
            
            <h2 className="text-3xl font-bold text-vinho mb-4">{results[step].title}</h2>
            <p className="text-cinza text-lg mb-8 leading-relaxed">{results[step].desc}</p>
            
            <h3 className="font-bold text-vinho mb-4 text-sm uppercase tracking-wider">Passos Recomendados:</h3>
            <div className="space-y-3">
              {results[step].links.map((link, i) => (
                <Link 
                  key={i} 
                  to={link.url} 
                  className="flex items-center gap-3 bg-marfim p-4 rounded-xl border border-borda hover:border-rosa text-vinho font-medium transition-colors"
                >
                  <FileText className="w-5 h-5 text-rosa" /> {link.label}
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* 3. NOVA FERRAMENTA INTERATIVA: CHECKLIST DE PREPARAÇÃO */}
        <section className="bg-nevoa p-8 rounded-3xl border border-rosa/20 shadow-sm">
          <div className="flex items-center gap-3 mb-4">
            <CheckSquare className="w-7 h-7 text-vinho" />
            <h2 className="text-2xl font-bold text-vinho">Checklist de Preparação para a Consulta</h2>
          </div>
          <p className="text-cinza mb-6 text-sm">
            Marque os itens à medida que for organizando seus documentos para o atendimento médico:
          </p>

          <div className="space-y-3">
            {checklist.map((item) => (
              <label 
                key={item.id} 
                onClick={() => toggleCheck(item.id)}
                className={`flex items-start gap-4 p-4 rounded-2xl border cursor-pointer transition-all ${
                  item.checked ? 'bg-emerald-50 border-emerald-300 text-emerald-900 line-through opacity-80' : 'bg-white border-borda text-cinza hover:border-rosa/50'
                }`}
              >
                <input 
                  type="checkbox" 
                  checked={item.checked} 
                  onChange={() => {}} 
                  className="mt-1 w-5 h-5 accent-vinho rounded cursor-pointer"
                />
                <span className="font-medium text-base leading-relaxed">{item.text}</span>
              </label>
            ))}
          </div>
        </section>

        {/* 4. SEÇÃO NOBRE: DIREITOS LEGAIS IMEDIATOS */}
        <section className="bg-marfim p-8 rounded-3xl border border-rosa/20">
          <div className="flex items-center gap-3 mb-4">
            <ShieldCheck className="w-7 h-7 text-vinho" />
            <h2 className="text-2xl font-bold text-vinho">Lei dos 60 Dias (SUS)</h2>
          </div>
          <p className="text-cinza leading-relaxed">
            Pela <strong>Lei nº 12.732/2012</strong>, a paciente com diagnóstico confirmado de câncer de mama tem o direito legal de iniciar o primeiro tratamento no SUS em no máximo <strong>60 dias</strong> a contar da assinatura do laudo patológico.
          </p>
        </section>

      </div>
    </main>
  );
};
