import React, { useState, useEffect } from 'react';
import { BookOpen, Plus, Trash2, Calendar, Lock, FileText, AlertCircle, Heart } from 'lucide-react';

export const Caderno = () => {
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState('');

  // Carregar notas do armazenamento local (localStorage) ao abrir a página
  useEffect(() => {
    const saved = localStorage.getItem('@entrelacos:notes');
    if (saved) {
      try {
        setNotes(JSON.parse(saved));
      } catch (e) {
        console.error('Erro ao carregar notas', e);
      }
    }
  }, []);

  // Salvar notas no localStorage sempre que houver alteração
  useEffect(() => {
    localStorage.setItem('@entrelacos:notes', JSON.stringify(notes));
  }, [notes]);

  const handleSave = () => {
    if (!newNote.trim()) return;
    
    const note = {
      id: Date.now().toString(),
      text: newNote,
      date: new Date().toLocaleDateString('pt-BR', {
        day: '2-digit', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit'
      })
    };

    setNotes([note, ...notes]);
    setNewNote('');
  };

  const handleDelete = (id) => {
    setNotes(notes.filter(note => note.id !== id));
  };

  return (
    <main className="min-h-screen bg-white pb-12 pt-20 md:pt-24">
      {/* CABEÇALHO */}
      <section className="bg-marfim py-16 px-4 border-b border-rosa/20">
        <div className="container mx-auto max-w-4xl text-center">
          <span className="inline-flex items-center gap-2 bg-vinho/10 text-vinho px-4 py-1.5 rounded-full text-sm font-bold mb-6">
            <Lock className="w-4 h-4" /> 100% Privado e Seguro
          </span>
          <h1 className="text-4xl md:text-5xl font-black text-vinho mb-6 flex items-center justify-center gap-4">
            <BookOpen className="w-10 h-10 md:w-12 md:h-12 text-rosa" />
            Meu Caderno
          </h1>
          <p className="text-lg text-cinza max-w-2xl mx-auto leading-relaxed">
            Um espaço privado para você anotar sintomas, dúvidas para o médico e datas de consultas. 
            <strong> Nada sai do seu celular ou computador.</strong>
          </p>
        </div>
      </section>

      {/* ÁREA DE NOVA ANOTAÇÃO */}
      <section className="py-12 px-4 container mx-auto max-w-3xl">
        <div className="bg-white p-6 md:p-8 rounded-3xl border border-borda shadow-lg relative overflow-hidden group">
          {/* Detalhe visual lateral */}
          <div className="absolute top-0 left-0 w-2 h-full bg-rosa transition-all duration-300 group-hover:w-3"></div>
          
          <h2 className="text-2xl font-bold text-vinho mb-4 flex items-center gap-2">
            <Plus className="w-6 h-6 text-rosa" /> Nova Anotação
          </h2>
          
          <textarea
            value={newNote}
            onChange={(e) => setNewNote(e.target.value)}
            placeholder="O que você está sentindo hoje? Tem alguma dúvida para perguntar na próxima consulta?"
            className="w-full h-32 bg-marfim border border-rosa/20 focus:border-rosa focus:ring-4 focus:ring-rosa/10 rounded-2xl p-5 text-cinza placeholder:text-cinza/50 outline-none resize-none transition-all mb-4 text-lg"
          ></textarea>
          
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <p className="text-xs text-cinza/70 flex items-center gap-1.5 bg-nevoa px-3 py-1.5 rounded-full">
              <AlertCircle className="w-3.5 h-3.5" /> Seus dados ficam salvos apenas neste navegador.
            </p>
            <button
              onClick={handleSave}
              disabled={!newNote.trim()}
              className="bg-vinho text-white px-8 py-3.5 rounded-full font-bold uppercase tracking-wider hover:bg-[#7e1440] disabled:opacity-50 disabled:cursor-not-allowed transition-all flex items-center gap-2 shadow-md hover:shadow-xl transform hover:-translate-y-1 w-full sm:w-auto justify-center"
            >
              Salvar Nota
            </button>
          </div>
        </div>
      </section>

      {/* LISTA DE ANOTAÇÕES */}
      <section className="pb-16 px-4 container mx-auto max-w-3xl">
        <div className="flex items-center gap-3 mb-8 border-b border-borda pb-4">
          <FileText className="w-6 h-6 text-vinho" />
          <h3 className="text-2xl font-bold text-vinho">Suas Anotações</h3>
          <span className="bg-vinho/10 text-vinho px-3 py-1 rounded-full text-sm font-bold ml-auto">
            {notes.length} {notes.length === 1 ? 'nota' : 'notas'}
          </span>
        </div>

        {notes.length === 0 ? (
          <div className="bg-nevoa/40 border-2 border-dashed border-borda rounded-3xl p-12 text-center flex flex-col items-center justify-center">
            <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mb-6 shadow-sm border border-borda">
              <Heart className="w-10 h-10 text-rosa/60" />
            </div>
            <h4 className="text-2xl font-bold text-vinho mb-3">Nenhuma anotação ainda</h4>
            <p className="text-cinza max-w-md text-lg">
              Use este espaço para preparar suas perguntas antes das consultas ou apenas desabafar.
            </p>
          </div>
        ) : (
          <div className="grid gap-5 md:grid-cols-2">
            {notes.map(note => (
              <div key={note.id} className="bg-white p-6 rounded-3xl border border-borda hover:border-rosa shadow-sm hover:shadow-md transition-all group relative flex flex-col">
                <div className="flex justify-between items-start mb-4">
                  <span className="flex items-center gap-1.5 text-xs font-bold text-vinho bg-marfim border border-rosa/20 px-3 py-1.5 rounded-lg">
                    <Calendar className="w-3.5 h-3.5 text-rosa" /> {note.date}
                  </span>
                  <button 
                    onClick={() => handleDelete(note.id)}
                    className="text-cinza/40 hover:text-red-500 hover:bg-red-50 transition-all p-2 rounded-full opacity-100 md:opacity-0 group-hover:opacity-100"
                    title="Excluir nota"
                  >
                    <Trash2 className="w-4.5 h-4.5" />
                  </button>
                </div>
                <p className="text-cinza text-lg whitespace-pre-wrap break-words leading-relaxed flex-1">
                  {note.text}
                </p>
              </div>
            ))}
          </div>
        )}
      </section>
    </main>
  );
};
