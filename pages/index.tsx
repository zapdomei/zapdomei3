import Chat from '../components/Chat';

export default function Home() {
  return (
    <div className="bg-white min-h-screen flex flex-col items-center px-4 py-20 text-black font-sans">
      <header className="text-center max-w-3xl mb-16">
        <h1 className="text-4xl sm:text-5xl font-bold mb-6">O jeito mais fácil de automatizar seu WhatsApp</h1>
        <p className="text-lg sm:text-xl text-gray-600 mb-8">Fale com a IA e ela monta seu atendimento em minutos.</p>
        <a href="#chat" className="inline-block bg-black text-white px-6 py-3 rounded-full text-base font-medium hover:bg-gray-900 transition">
          Fale com a IA agora
        </a>
      </header>

      <section id="chat" className="w-full flex justify-center mb-20">
        <Chat />
      </section>

      <section className="max-w-2xl w-full px-4">
        <h2 className="text-xl font-semibold mb-6">Perguntas Frequentes (FAQ)</h2>
        <div className="mb-4">
          <h3 className="font-bold">Quanto custa?</h3>
          <p>Você pode começar de graça. Só paga se quiser recursos avançados.</p>
        </div>
        <div className="mb-4">
          <h3 className="font-bold">Preciso saber programar?</h3>
          <p>Não. Basta conversar com a IA e ela cria tudo para você.</p>
        </div>
        <div className="mb-4">
          <h3 className="font-bold">Funciona no meu número pessoal?</h3>
          <p>Sim! Você usa o WhatsApp que já tem, sem precisar mudar nada.</p>
        </div>
      </section>
    </div>
  );
}
