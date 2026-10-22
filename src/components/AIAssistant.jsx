import React, { useState, useRef, useEffect } from 'react';
import { Bot, X, Send, Sparkles, Loader2 } from 'lucide-react';

export const AIAssistant = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: 'assistant', content: 'Olá! Sou a MIA. Como posso ajudar você a entender melhor sobre a saúde das mamas hoje?' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isLoading]);

  const handleSend = (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMsg = input;
    setMessages(prev => [...prev, { role: 'user', content: userMsg }]);
    setInput('');
    setIsLoading(true);

    // MODO SIMULAÇÃO APERFEIÇOADO
    setTimeout(() => {
      const texto = userMsg.toLowerCase();
      let respostaIA = "";
      
      // 1. Cumprimentos
      if (texto.match(/\b(oi|ola|olá|bom dia|boa tarde|boa noite|tudo bem)\b/)) {
        respostaIA = "Olá! Tudo bem? Estou aqui para tirar suas dúvidas sobre mamografia, autoexame ou sintomas. O que você gostaria de saber?";
      } 
      // 2. Agradecimentos
      else if (texto.match(/\b(obrigado|obrigada|valeu)\b/)) {
        respostaIA = "Por nada! Lembre-se que cuidar de si mesma é um ato de amor. Se tiver mais dúvidas, é só chamar.";
      }
      // 3. Sintomas
      else if (texto.match(/\b(dor|caroço|nódulo|vermelho|secreção|inchaço)\b/)) {
        respostaIA = "Se você notou algo diferente, como dor ou um nódulo, o mais importante é não entrar em pânico. A maioria das alterações é benigna. Agende uma consulta na sua UBS para que um médico possa avaliar direitinho, combinado?";
      } 
      // 4. Prevenção e Exames
      else if (texto.match(/\b(idade|mamografia|exame|prevenção|ultrassom)\b/)) {
        respostaIA = "A mamografia de rotina é o principal exame! Pelo SUS, ela é recomendada a cada dois anos para mulheres de 50 a 69 anos. Mas se você tem histórico familiar, o médico pode pedir bem antes.";
      }
      // 5. Tratamento ou Cura
      else if (texto.match(/\b(tratamento|cura|câncer)\b/)) {
        respostaIA = "O câncer de mama tem até 95% de chance de cura quando descoberto cedo! O tratamento varia muito (pode ser cirurgia, quimio ou radioterapia), mas a medicina avançou muito para tornar tudo o menos agressivo possível.";
      }
      // 6. Resposta Padrão (Se ela não souber a palavra)
      else {
        respostaIA = "Como sou uma assistente virtual em treinamento, ainda estou aprendendo! Você pode me perguntar sobre 'sintomas', 'idade para mamografia' ou 'tratamentos'. Para conselhos médicos, sempre consulte um especialista.";
      }

      setMessages(prev => [...prev, { role: 'assistant', content: respostaIA }]);
      setIsLoading(false);
    }, 1500);
  };

  return (
    <>
      <button 
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 w-16 h-16 bg-vinho text-white rounded-full flex items-center justify-center shadow-xl hover:scale-110 hover:bg-[#7e1440] transition-all z-40 ${isOpen ? 'scale-0 opacity-0' : 'scale-100 opacity-100'}`}
      >
        <Bot className="w-8 h-8" />
        <span className="absolute -top-1 -right-1 flex h-4 w-4">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rosa opacity-75"></span>
          <span className="relative inline-flex rounded-full h-4 w-4 bg-rosa border-2 border-white"></span>
        </span>
      </button>

      {isOpen && (
        <div className="fixed bottom-6 right-6 w-[90vw] max-w-[400px] h-[550px] max-h-[85vh] bg-white rounded-3xl shadow-2xl border border-borda flex flex-col z-50 overflow-hidden">
          <div className="bg-gradient-to-r from-vinho to-[#7e1440] p-4 flex items-center justify-between text-white">
            <div className="flex items-center gap-3">
              <Sparkles className="w-5 h-5" />
              <h3 className="font-bold text-lg">M.I.A.</h3>
            </div>
            <button onClick={() => setIsOpen(false)} className="hover:bg-white/20 p-1 rounded-full">
              <X className="w-6 h-6" />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-marfim/50">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] p-3 rounded-2xl text-sm ${msg.role === 'user' ? 'bg-vinho text-white' : 'bg-white border border-borda text-cinza'}`}>
                  {msg.content}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white border p-3 rounded-2xl flex gap-2 items-center text-rosa">
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span className="text-xs">MIA está pensando...</span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <div className="p-4 bg-white border-t border-borda">
            <form onSubmit={handleSend} className="flex gap-2">
              <input 
                type="text" 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ex: Qual a idade para mamografia?"
                className="flex-1 bg-nevoa px-4 py-2 rounded-full outline-none text-sm"
              />
              <button type="submit" disabled={!input.trim() || isLoading} className="bg-vinho text-white p-2.5 rounded-full">
                <Send className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};
