'use client'

import Link from 'next/link'
import NavItem from '@/app/components/NavItem'
import '@fortawesome/fontawesome-svg-core/styles.css'
import {
  faGithub,
  faLinkedin,
  faUpwork,
} from '@fortawesome/free-brands-svg-icons'
import MobileMenuBar from './MobileMenuBar'
import { useState } from 'react'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const openMobileMenu = () => {
    mobileMenuOpen ? setMobileMenuOpen(false) : setMobileMenuOpen(true)
  }

  return (
    <div className="fixed top-0 z-10 w-full flex justify-center bg-white bg-opacity-40 backdrop-blur-md">
      <div className="flex flex-row w-full mx-auto max-w-6xl justify-between p-5 sm:px-0">
        <Link href={'/'} className="font-bold uppercase">
          <span className="text-4xl font-extrabold">K</span>
          <span className="text-2xl hover:text-3xl font-medium duration-200">
            awsar
          </span>
        </Link>
        <div className="hidden sm:flex flex-row items-center">
          <NavItem name="Services" url="#services" />
          <NavItem name="experiences" url="#experiences" />
          <NavItem name="skills" url="#skills" />
          <NavItem name="contact" url="#contact" />
          <NavItem
            url="https://github.com/prokawsar"
            icon={faGithub}
            target="_blank"
          />
          <NavItem
            url="https://www.linkedin.com/in/prokawsar/"
            icon={faLinkedin}
            target="_blank"
          />

          <NavItem
            url="https://www.upwork.com/freelancers/~012f78e5dacf069591"
            icon={faUpwork}
            target="_blank"
          />
        </div>
        <div className="flex sm:hidden items-center">
          <MobileMenuBar onMenuClick={openMobileMenu} />
        </div>
      </div>
      <div
        className={`sm:hidden absolute divide-y-2 divide-slate-300 top-20 flex flex-col w-full '
          ${mobileMenuOpen ? '' : 'hidden'}`}
      >
        <NavItem
          className="bg-gray-200 rounded-none backdrop-blur-md bg-opacity-90"
          name="Services"
          url="#services"
        ></NavItem>
        <NavItem
          className="bg-gray-200 rounded-none backdrop-blur-md bg-opacity-90"
          name="Skills"
          url="#skills"
        ></NavItem>
        <NavItem
          className="bg-gray-200 rounded-none bg-opacity-90 backdrop-blur-md"
          name="Experiences"
          url="#experiences"
        ></NavItem>
        <NavItem
          className="bg-gray-200 rounded-none bg-opacity-90 backdrop-blur-md"
          name="Contact"
          url="#contact"
        ></NavItem>
      </div>
    </div>
  )
}
