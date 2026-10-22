import { useState, useEffect, useRef } from 'react';
import { Search, X, ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export const SearchModal = ({ isOpen, onClose }) => {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();
  const inputRef = useRef(null);

  // Banco de dados simulado com as páginas e palavras-chave
  const pages = [
    { title: 'Sinais e Sintomas', path: '/sinais', desc: 'Aprenda a identificar nódulos, dores e alterações.', tags: ['nódulo', 'caroço', 'dor', 'vermelhidão', 'sintoma', 'secreção'] },
    { title: 'Mamografia', path: '/mamografia', desc: 'Tudo sobre o exame, idades e preparo.', tags: ['exame', 'mamografia', 'idade', 'sus', 'ultrassom', 'dor no exame'] },
    { title: 'Tratamento', path: '/tratamento', desc: 'Conheça as opções: cirurgia, quimioterapia, radioterapia.', tags: ['tratamento', 'cura', 'quimioterapia', 'quimio', 'radioterapia', 'cirurgia', 'cabelo'] },
    { title: 'Acolhimento', path: '/acolhimento', desc: 'Apoio emocional e rede de afeto.', tags: ['medo', 'psicólogo', 'ajuda', 'apoio', 'ansiedade', 'família', 'respiração'] },
    { title: 'Glossário Médico', path: '/glossario', desc: 'Traduza os termos difíceis do seu laudo.', tags: ['laudo', 'birads', 'biópsia', 'palavras', 'termos', 'dicionário', 'maligno', 'benigno'] },
    { title: 'Meu Diário (Caderno)', path: '/caderno', desc: 'Anote seus sintomas e consultas.', tags: ['diário', 'anotações', 'consulta', 'perguntas', 'médico'] },
  ];

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
      setQuery('');
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const filteredPages = query.trim() === '' ? [] : pages.filter(page => 
    page.title.toLowerCase().includes(query.toLowerCase()) || 
    page.tags.some(tag => tag.includes(query.toLowerCase())) ||
    page.desc.toLowerCase().includes(query.toLowerCase())
  );

  const handleNavigate = (path) => {
    navigate(path);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-start justify-center pt-20 px-4 bg-vinho/80 backdrop-blur-sm animate-fade-in-up">
      <div className="bg-white w-full max-w-2xl rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[80vh]">
        <div className="p-4 border-b border-borda flex items-center gap-3">
          <Search className="w-6 h-6 text-cinza" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="O que você está procurando? (Ex: nódulo, mamografia...)"
            className="flex-1 text-lg outline-none bg-transparent placeholder:text-cinza/50 text-vinho"
          />
          <button onClick={onClose} className="p-2 hover:bg-nevoa rounded-full text-cinza hover:text-vinho transition-colors">
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="overflow-y-auto p-4 flex-1">
          {query.trim() === '' ? (
            <div className="text-center py-10 text-cinza">
              <p>Digite uma palavra para buscar nas nossas páginas.</p>
            </div>
          ) : filteredPages.length > 0 ? (
            <div className="flex flex-col gap-2">
              <p className="text-sm text-rosa font-bold mb-2">Resultados encontrados:</p>
              {filteredPages.map((page, idx) => (
                <button
                  key={idx}
                  onClick={() => handleNavigate(page.path)}
                  className="w-full text-left p-4 rounded-xl hover:bg-nevoa border border-transparent hover:border-borda flex items-center justify-between group transition-all"
                >
                  <div>
                    <h4 className="text-vinho font-bold text-lg group-hover:text-rosa transition-colors">{page.title}</h4>
                    <p className="text-cinza text-sm mt-1">{page.desc}</p>
                  </div>
                  <ChevronRight className="text-cinza group-hover:text-rosa transition-colors" />
                </button>
              ))}
            </div>
          ) : (
            <div className="text-center py-10 text-cinza">
              <p>Nenhum resultado encontrado para "{query}".</p>
              <p className="text-sm mt-2">Tente palavras mais curtas como "dor", "exame" ou "cura".</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
