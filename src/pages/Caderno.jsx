import React, { useState, useEffect } from 'react';
import { Heart, Plus, Trash2, Calendar } from 'lucide-react';

export const Caderno = () => {
  const [notas, setNotas] = useState([]);
  const [novaNota, setNovaNota] = useState('');
  const [titulo, setTitulo] = useState('');

  // Carregar notas salvas no navegador
  useEffect(() => {
    const salvas = localStorage.getItem('entreLacos_notas');
    if (salvas) setNotas(JSON.parse(salvas));
  }, []);

  // Salvar notas sempre que houver alteração
  useEffect(() => {
    localStorage.setItem('entreLacos_notas', JSON.stringify(notas));
  }, [notas]);

  const adicionarNota = (e) => {
    e.preventDefault();
    if (!novaNota.trim() || !titulo.trim()) return;
    
    const data = new Date().toLocaleDateString('pt-BR');
    const notaObj = { id: Date.now(), titulo, texto: novaNota, data };
    
    setNotas([notaObj, ...notas]);
    setNovaNota('');
    setTitulo('');
  };

  const deletarNota = (id) => {
    setNotas(notas.filter(nota => nota.id !== id));
  };

  return (
    <main className="pt-28 pb-20 max-w-4xl mx-auto px-6">
      <h1 className="font-serif text-4xl sm:text-5xl text-verde mb-4 text-center flex items-center justify-center gap-3">
        <Heart className="w-10 h-10 text-vinho" /> Meu Caderno
      </h1>
      <p className="text-center text-cinza max-w-2xl mx-auto mb-12">
        Um espaço privado para você anotar sintomas, dúvidas para o médico e datas de consultas. <strong>Nada sai do seu celular/computador.</strong>
      </p>

      <div className="grid md:grid-cols-3 gap-8">
        {/* Formulário */}
        <div className="md:col-span-1 bg-marfim p-6 rounded-3xl border border-borda h-fit sticky top-28">
          <h3 className="font-bold text-verde mb-4 text-lg">Nova Anotação</h3>
          <form onSubmit={adicionarNota} className="space-y-4">
            <input 
              type="text" 
              placeholder="Assunto (Ex: Consulta Dr. João)" 
              className="w-full p-3 rounded-xl border border-borda focus:border-vinho outline-none"
              value={titulo}
              onChange={(e) => setTitulo(e.target.value)}
              required
            />
            <textarea 
              placeholder="O que você quer lembrar? Dúvidas, sentimentos, sintomas..." 
              className="w-full p-3 rounded-xl border border-borda focus:border-vinho outline-none resize-none h-32"
              value={novaNota}
              onChange={(e) => setNovaNota(e.target.value)}
              required
            ></textarea>
            <button type="submit" className="w-full bg-vinho text-white py-3 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-[#6c3246] transition-colors">
              <Plus className="w-5 h-5" /> Salvar Nota
            </button>
          </form>
        </div>

        {/* Lista de Notas */}
        <div className="md:col-span-2 space-y-4">
          {notas.length === 0 ? (
            <div className="bg-nevoa border-2 border-dashed border-rosa p-10 rounded-3xl text-center text-vinho opacity-70">
              Nenhuma anotação ainda. Use este espaço para preparar suas perguntas antes das consultas!
            </div>
          ) : (
            notas.map(nota => (
              <div key={nota.id} className="bg-white p-6 rounded-2xl border border-borda shadow-sm hover:shadow-md transition-shadow relative group">
                <button 
                  onClick={() => deletarNota(nota.id)}
                  className="absolute top-6 right-6 text-cinza hover:text-red-500 opacity-0 group-hover:opacity-100 transition-opacity"
                  title="Apagar nota"
                >
                  <Trash2 className="w-5 h-5" />
                </button>
                <div className="flex items-center gap-2 text-xs text-cinza font-bold uppercase mb-2">
                  <Calendar className="w-4 h-4" /> {nota.data}
                </div>
                <h4 className="font-serif text-xl text-verde mb-2 pr-8">{nota.titulo}</h4>
                <p className="text-cinza whitespace-pre-wrap">{nota.texto}</p>
              </div>
            ))
          )}
        </div>
      </div>
    </main>
  );
};
