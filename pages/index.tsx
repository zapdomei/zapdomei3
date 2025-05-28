import Chat from '../components/Chat';

export default function Home() {
  return (
    <div className="bg-white min-h-screen text-black font-sans">
      <header className="text-center py-10">
        <h1 className="text-3xl md:text-5xl font-bold">O jeito mais fácil de automatizar seu WhatsApp</h1>
        <p className="mt-4 text-lg text-gray-600">Fale com a IA e ela monta seu atendimento em minutos.</p>
        <button className="mt-6 bg-green-500 text-white px-6 py-3 rounded-full hover:bg-green-600 transition">
          Fale com a IA agora
        </button>
      </header>
      <main className="flex justify-center">
        <Chat />
      </main>
      <section className="max-w-2xl mx-auto mt-12 px-4">
        <h2 className="text-xl font-semibold mb-4">Perguntas Frequentes</h2>
        <details className="mb-2">
          <summary className="cursor-pointer font-medium">Preciso pagar para usar?</summary>
          <p className="ml-4 mt-1 text-gray-700">Não! O Zap do MEI é gratuito no início. Você só paga se quiser mais recursos depois.</p>
        </details>
        <details className="mb-2">
          <summary className="cursor-pointer font-medium">Funciona no meu celular?</summary>
          <p className="ml-4 mt-1 text-gray-700">Sim, tudo funciona direto no navegador do seu celular.</p>
        </details>
        <details className="mb-2">
          <summary className="cursor-pointer font-medium">Como a IA monta meu atendimento?</summary>
          <p className="ml-4 mt-1 text-gray-700">A IA entende o que você vende e gera um robô de atendimento com mensagens automáticas no WhatsApp.</p>
        </details>
      </section>
    </div>
  );
}
