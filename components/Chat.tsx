import { useState } from 'react';

export default function Chat() {
  const [messages, setMessages] = useState<Array<{ text: string; isUser: boolean }>>([
    { text: 'Oi, sou o Zap do MEI. Me conta o que você vende e eu crio seu robô automático de atendimento no WhatsApp, de graça. Bora?', isUser: false }
  ]);
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (input.trim()) {
      setMessages([...messages, { text: input, isUser: true }]);
      setInput('');
    }
  };

  return (
    <div className="chat-container">
      <div className="chat-header">
        <span className="chat-title">💬 Atendimento via WhatsApp</span>
      </div>
      <div className="chat-messages">
        {messages.map((msg, index) => (
          <div key={index} className={`message ${msg.isUser ? 'user' : 'bot'}`}>
            <p>{msg.text}</p>
          </div>
        ))}
      </div>
      <div className="chat-input">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Digite sua mensagem..."
        />
        <button onClick={handleSend}>➤</button>
      </div>
    </div>
  );
}
