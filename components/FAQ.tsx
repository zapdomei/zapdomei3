export default function FAQ() {
  return (
    <section className="py-20 bg-gray-50 px-4">
      <h2 className="text-2xl font-semibold text-center mb-10">Perguntas Frequentes</h2>
      <div className="max-w-3xl mx-auto space-y-6">
        <div>
          <h3 className="font-bold">Preciso pagar para usar?</h3>
          <p className="text-gray-600">Não. Você pode montar seu robô gratuitamente.</p>
        </div>
        <div>
          <h3 className="font-bold">Funciona no meu celular?</h3>
          <p className="text-gray-600">Sim, basta ter o WhatsApp instalado e funcionando.</p>
        </div>
        <div>
          <h3 className="font-bold">Como a IA monta meu atendimento?</h3>
          <p className="text-gray-600">Ela entende sua conversa e cria um fluxo automático.</p>
        </div>
      </div>
    </section>
  )
}
