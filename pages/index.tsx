import Head from 'next/head'
import Hero from '../components/Hero'
import Chat from '../components/Chat'
import Steps from '../components/Steps'
import FAQ from '../components/FAQ'

export default function Home() {
  return (
    <>
      <Head>
        <title>Zap do MEI</title>
      </Head>
      <main className="bg-white text-black font-sans">
        <Hero />
        <Chat />
        <Steps />
        <FAQ />
      </main>
    </>
  )
}
