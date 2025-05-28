export default function Steps() {
  return (
    <section className="py-20 bg-white text-center">
      <h2 className="text-2xl font-semibold mb-10">Como funciona</h2>
      <div className="flex flex-col md:flex-row justify-center gap-8 px-4">
        <div>
          <h3 className="text-lg font-bold">1. Conte o que você vende</h3>
          <p className="text-gray-600">Fale com a IA como se fosse uma conversa normal.</p>
        </div>
        <div>
          <h3 className="text-lg font-bold">2. Veja seu robô sendo montado</h3>
          <p className="text-gray-600">A IA organiza automaticamente seu atendimento.</p>
        </div>
        <div>
          <h3 className="text-lg font-bold">3. Ative no seu WhatsApp</h3>
          <p className="text-gray-600">Pronto! O robô começa a funcionar no seu número.</p>
        </div>
      </div>
    </section>
  )
}
