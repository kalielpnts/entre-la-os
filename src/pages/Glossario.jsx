import React, { useState } from 'react';
import { Search, BookA } from 'lucide-react';

const TERMOS = [
  { t: "Biópsia", d: "Retirada de um pequeno pedaço de tecido para ser analisado no laboratório." },
  { t: "Estadiamento", d: "Classificação que indica o tamanho do tumor e se ele se espalhou (geralmente vai de 0 a IV)." },
  { t: "Fibroadenoma", d: "Nódulo benigno (não cancerígeno) muito comum, especialmente em mulheres jovens." },
  { t: "HER2", d: "Proteína que pode fazer o tumor crescer mais rápido. Existem remédios específicos para tumores HER2 positivo." },
  { t: "Linfonodo / Gânglio", d: "Pequenas glândulas de defesa. Os das axilas são os primeiros verificados no câncer de mama." },
  { t: "Metástase", d: "Quando as células cancerígenas viajam e criam um novo foco em outro órgão (como ossos ou pulmão)." },
  { t: "Nódulo", d: "Qualquer tipo de caroço. Pode ser sólido ou cheio de líquido (cisto). A maioria é benigna." },
  { t: "Oncologista", d: "Médico especialista no tratamento clínico do câncer (quimioterapia, imunoterapia)." },
  { t: "Mastologista", d: "Médico especialista nas glândulas mamárias (realiza o diagnóstico e a cirurgia)." }
];

export const Glossario = () => {
  const [busca, setBusca] = useState('');
  
  const filtrados = TERMOS.filter(x => 
    x.t.toLowerCase().includes(busca.toLowerCase()) || 
    x.d.toLowerCase().includes(busca.toLowerCase())
  );

  return (
    <main className="pt-28 pb-20 max-w-3xl mx-auto px-6">
      <h1 className="font-serif text-4xl text-verde mb-4 flex items-center justify-center gap-3">
        <BookA className="w-8 h-8 text-vinho" /> Glossário
      </h1>
      <p className="text-center text-cinza mb-10">Descomplique os termos difíceis dos laudos e exames médicos.</p>

      <div className="relative mb-8">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-cinza w-5 h-5" />
        <input 
          type="text" 
          value={busca}
          onChange={(e) => setBusca(e.target.value)}
          placeholder="Buscar termo (ex: metástase, biópsia...)" 
          className="w-full pl-12 pr-4 py-4 rounded-2xl border-2 border-borda focus:border-vinho outline-none transition-colors shadow-sm text-lg"
        />
      </div>

      <div className="space-y-4">
        {filtrados.length > 0 ? (
          filtrados.map((item, idx) => (
            <div key={idx} className="bg-white p-6 rounded-2xl border border-borda hover:border-rosa transition-colors">
              <h3 className="font-bold text-vinho text-xl mb-2">{item.t}</h3>
              <p className="text-cinza text-sm leading-relaxed">{item.d}</p>
            </div>
          ))
        ) : (
          <div className="text-center py-12 text-cinza bg-marfim rounded-2xl border border-dashed border-borda">
            Nenhum termo encontrado para "{busca}".
          </div>
        )}
      </div>
    </main>
  );
};
