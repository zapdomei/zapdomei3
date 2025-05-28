export default function Chat() {
  return (
    <section className="flex justify-center py-10 bg-gray-100">
      <div className="w-full max-w-2xl bg-white border rounded-xl shadow-lg p-6">
        <p className="text-sm text-gray-500 mb-2">Oi! Eu sou a IA do Zap do MEI. O que você vende?</p>
        <input className="w-full border p-2 rounded mt-2" placeholder="Digite sua mensagem..." />
        <div className="text-right mt-2">
          <button className="bg-black text-white w-10 h-10 rounded-full text-lg">↑</button>
        </div>
      </div>
    </section>
  )
}
