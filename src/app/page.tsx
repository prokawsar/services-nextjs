import Image from 'next/image'
import Hero from './sections/Hero'
import Services from './sections/Services'

export default function Home() {
  return (
    <main className="flex flex-col mx-auto w-full items-center">
      <Hero />
      <Services />
    </main>
  )
}
