import { useEffect, useRef, useState } from 'react';

export default function Chat() {
  const [messages, setMessages] = useState([
    { from: 'bot', text: 'Oi, sou o Zap do MEI. Me conta o que você vende e eu crio seu robô automático de atendimento no WhatsApp, de graça. Bora?' }
  ]);
  const [input, setInput] = useState('');
  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  const handleSend = () => {
    if (!input.trim()) return;
    const userMsg = { from: 'user', text: input };
    let botMsg = { from: 'bot', text: 'Entendi!' };

    if (input.toLowerCase().includes('padaria')) {
      botMsg = { from: 'bot', text: 'Legal! Vou montar seu robô de padaria. Qual o nome da sua padaria?' };
    }

    setMessages([...messages, userMsg, botMsg]);
    setInput('');
  };

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    <div className="flex flex-col w-full max-w-2xl mx-auto h-screen bg-[#f7f7f8] text-sm">
      <div className="flex-1 overflow-y-auto px-4 pt-6 pb-32">
        {messages.map((msg, idx) => (
          <div key={idx} className={`mb-4 flex ${msg.from === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`max-w-[80%] px-4 py-2 rounded-xl ${msg.from === 'user' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-800'}`}>
              {msg.text}
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>
      <div className="fixed bottom-0 left-0 w-full bg-white border-t p-4">
        <div className="flex max-w-2xl mx-auto">
          <input
            className="flex-1 border border-gray-300 rounded-l-md px-4 py-2 focus:outline-none"
            value={input}
            placeholder="Digite sua mensagem..."
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
          />
          <button className="bg-blue-600 text-white px-4 py-2 rounded-r-md" onClick={handleSend}>
            Enviar
          </button>
        </div>
      </div>
    </div>
  );
}
