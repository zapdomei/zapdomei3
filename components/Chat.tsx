import { useState } from 'react';

export default function Chat() {
  const [messages, setMessages] = useState([
    { text: "Oi! Eu sou a IA do Zap do MEI. O que você vende?", isUser: false }
  ]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input.trim()) return;
    setMessages([...messages, { text: input, isUser: true }]);
    setInput("");
  };

  return (
    <div className="w-full max-w-2xl px-4">
      <div className="bg-gray-100 p-6 rounded-xl shadow-md h-[400px] overflow-y-auto space-y-3">
        {messages.map((msg, i) => (
          <div
            key={i}
            className={`p-3 rounded-xl w-fit max-w-[75%] ${
              msg.isUser ? 'ml-auto bg-green-500 text-white' : 'mr-auto bg-white text-gray-900 border'
            }`}
          >
            {msg.text}
          </div>
        ))}
      </div>
      <div className="flex items-center mt-4 gap-2">
        <input
          className="flex-1 border px-4 py-2 rounded-full"
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Digite sua mensagem..."
        />
        <button
          onClick={handleSend}
          className="bg-black text-white w-10 h-10 flex items-center justify-center rounded-full"
        >
          ↑
        </button>
      </div>
    </div>
  );
}
