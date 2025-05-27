import { useState, useRef, useEffect } from 'react';

export default function Chat() {
  const [messages, setMessages] = useState([
    { from: 'bot', text: 'Oi! Me conta o que você vende e eu monto seu robô de WhatsApp em segundos.' }
  ]);
  const [input, setInput] = useState('');
  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  const handleSend = () => {
    if (!input.trim()) return;
    const userMsg = { from: 'user', text: input };
    const botMsg = { from: 'bot', text: 'Seu robô está quase pronto. 🚀' };
    setMessages([...messages, userMsg, botMsg]);
    setInput('');
  };

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    <div className="w-full max-w-2xl h-[480px] border rounded-lg shadow-lg bg-white flex flex-col">
      <div className="flex-1 overflow-y-auto p-4 space-y-3">
        {messages.map((msg, idx) => (
          <div key={idx} className={`flex ${msg.from === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`px-4 py-2 rounded-xl max-w-[75%] text-sm ${msg.from === 'user' ? 'bg-black text-white rounded-br-none' : 'bg-gray-100 text-black rounded-bl-none'}`}>
              {msg.text}
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>
      <div className="relative p-3 border-t">
        <input
          type="text"
          className="w-full border rounded-full py-2 px-4 pr-12 text-sm focus:outline-none"
          placeholder="Digite sua mensagem..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSend()}
        />
        <button
          className="absolute right-5 bottom-4 w-8 h-8 rounded-full bg-black text-white text-xs flex items-center justify-center shadow"
          onClick={handleSend}
        >
          Z
        </button>
      </div>
    </div>
  );
}
