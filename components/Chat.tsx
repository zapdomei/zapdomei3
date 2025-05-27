import { useState, useRef, useEffect } from 'react';

export default function Chat() {
  const [messages, setMessages] = useState([
    { from: 'bot', text: 'Oi! Me conta o que você vende e eu monto seu robô de WhatsApp em segundos.' }
  ]);
  const [input, setInput] = useState('');
  const messagesEndRef = useRef(null);

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
    <div className="w-full max-w-2xl h-[500px] border rounded-xl shadow-lg bg-white flex flex-col">
      <div className="flex-1 overflow-y-auto p-4 space-y-3">
        {messages.map((msg, idx) => (
          <div key={idx} className={`flex ${msg.from === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`px-4 py-2 rounded-lg max-w-[75%] text-sm leading-relaxed ${msg.from === 'user' ? 'bg-black text-white' : 'bg-gray-100 text-gray-900'}`}>
              {msg.text}
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>
      <div className="relative p-4 border-t">
        <input
          type="text"
          className="w-full border rounded-full py-3 px-4 pr-12 text-sm focus:outline-none"
          placeholder="Digite sua mensagem..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSend()}
        />
        <button
          className="absolute right-6 bottom-5 w-8 h-8 rounded-full bg-black text-white text-xs flex items-center justify-center shadow hover:bg-gray-900"
          onClick={handleSend}
        >
          Z
        </button>
      </div>
    </div>
  );
}
