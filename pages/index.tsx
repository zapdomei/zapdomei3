import Chat from '../components/Chat';

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-4">
      <h1 className="text-2xl font-bold mb-4 text-center">Zap do MEI</h1>
      <Chat />
    </main>
  );
}
