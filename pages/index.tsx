export default function Home() {
  return (
    <div className="bg-white min-h-screen text-black font-sans flex flex-col items-center justify-center px-6">
      <div className="w-full max-w-2xl text-center">
        <h1 className="text-3xl sm:text-4xl font-semibold mb-4">Fale. Monte. Responda. Cresça.</h1>
        <p className="text-base sm:text-lg text-gray-600 mb-10">
          Fale com a IA e monte seu robô de atendimento no WhatsApp. Grátis, rápido, sem complicação.
        </p>
        <div className="relative">
          <input
            type="text"
            placeholder="Digite sua mensagem..."
            className="w-full text-base text-gray-800 border border-gray-300 rounded-2xl py-4 px-5 pr-12 shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-300"
          />
          <button className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-black text-white w-9 h-9 rounded-full flex items-center justify-center hover:bg-gray-900 shadow-md">
            Z
          </button>
        </div>
      </div>
    </div>
  );
}
