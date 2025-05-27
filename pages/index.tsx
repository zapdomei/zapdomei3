export default function Home() {
  return (
    <div className="font-sans text-black bg-white">
      <nav className="flex justify-between items-center px-[6%] py-6 border-b border-gray-200">
        <a href="#" className="text-xl font-bold">ZapMEI</a>
        <div className="hidden md:flex gap-8 text-sm text-gray-700">
          <a href="#features" className="hover:text-[#10A37F]">Recursos</a>
          <a href="#pricing" className="hover:text-[#10A37F]">Preços</a>
          <a href="#docs" className="hover:text-[#10A37F]">Documentação</a>
          <a href="#login" className="hover:text-[#10A37F]">Entrar</a>
        </div>
      </nav>

      <section className="max-w-5xl mx-auto px-4 text-center mt-20 mb-10">
        <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">Atendimento Automatizado no WhatsApp com IA</h1>
        <p className="text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto mb-10">
          Transforme suas conversas em vendas com nossa inteligência artificial especializada em atendimento ao cliente
        </p>
        <a href="#" className="inline-block bg-[#10A37F] hover:bg-[#0d8c6d] text-white font-medium px-8 py-4 rounded-md text-base transition">
          Começar Gratuitamente
        </a>
      </section>

      <div className="max-w-5xl mx-auto px-4 mb-20">
        <img
          src="https://via.placeholder.com/1200x600"
          alt="Interface do Chat"
          className="w-full rounded-xl border border-gray-200 shadow-xl"
        />
      </div>
    </div>
  );
}
