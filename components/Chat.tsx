import { useState } from 'react';

export default function Chat() {
  const [messages, setMessages] = useState([
    { from: 'bot', text: 'Oi, sou o Zap do MEI. Me conta o que você vende e eu crio seu robô automático de atendimento no WhatsApp, de graça. Bora?' }
  ]);
  const [input, setInput] = useState('');

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

  return (
    <div className="w-full max-w-md">
      <div className="border p-4 h-96 overflow-y-scroll bg-white rounded shadow">
        {messages.map((msg, idx) => (
          <div key={idx} className={`mb-2 text-${msg.from === 'bot' ? 'left' : 'right'}`}>
            <p className={`text-sm ${msg.from === 'bot' ? 'text-gray-700' : 'text-blue-600'}`}>{msg.text}</p>
          </div>
        ))}
      </div>
      <div className="mt-2 flex">
        <input
          className="flex-1 border rounded p-2"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSend()}
        />
        <button className="ml-2 px-4 py-2 bg-blue-500 text-white rounded" onClick={handleSend}>Enviar</button>
      </div>
    </div>
  );
}
