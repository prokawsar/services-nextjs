'use client'

import Hero from '@/app/sections/Hero'
import Services from '@/app/sections/Services'
import { useEffect } from 'react'

export default function Home() {
  useEffect(() => {
    // Function to scroll to the section based on the URL hash
    const scrollToSection = () => {
      const { hash } = window.location
      if (hash) {
        const targetElement = document.querySelector(hash)
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: 'smooth' })
        }
      }
    }

    scrollToSection()
    window.addEventListener('hashchange', scrollToSection)
    return () => {
      window.removeEventListener('hashchange', scrollToSection)
    }
  }, [])

  return (
    <main className="flex flex-col min-h-screen mx-auto w-full items-center">
      <Hero />
      <Services />
    </main>
  )
}
