import Chat from '../components/Chat';

export default function Home() {
  return (
    <div className="bg-white min-h-screen text-black font-sans">
      <header className="text-center py-12 px-4">
        <h1 className="text-3xl font-bold tracking-tight">Fale. Monte. Responda. Cresça.</h1>
        <p className="text-lg mt-4">Fale com a IA e monte seu robô de atendimento no WhatsApp. Grátis, rápido, sem complicação.</p>
      </header>
      <main className="flex justify-center px-4">
        <Chat />
      </main>
      <section className="max-w-2xl mx-auto py-16 px-4">
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
