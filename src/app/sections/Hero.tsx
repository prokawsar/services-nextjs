import Image from 'next/image'
import HeroImage from '@/../public/images/hero-bg.jpg'

export default function Hero() {
  return (
    <div className="relative z-0 h-full w-full">
      <Image
        className="h-[800px] w-screen object-cover"
        src={HeroImage}
        alt="hero bg"
      />
      <div className="absolute top-0 w-full pt-40">
        <div className="flex flex-row w-full justify-between max-w-6xl items-center mx-auto">
          <div className="px-5">
            <h1 role="heading" className="text-5xl font-bold">
              Hello, I'm Kawsar Ahmed
            </h1>
            <p className="text-lg mt-5">
              I have been working as Frontend Engineer around 5 years <br />
              Within various remote jobs in Svelte, SvelteKit, Vue, Nuxt, React,
              Next.js, JavaScript, TypeScript.
            </p>
          </div>

          {/* <div>2nd section</div> */}
        </div>
      </div>
    </div>
  )
}
