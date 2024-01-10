import Link from 'next/link'
import NavItem from '@/app/components/NavItem'
import '@fortawesome/fontawesome-svg-core/styles.css'
import {
  faGithub,
  faLinkedin,
  faUpwork,
} from '@fortawesome/free-brands-svg-icons'

export default function Header() {
  return (
    <div className="fixed top-0 z-10 w-full flex justify-center bg-white bg-opacity-40 backdrop-blur-md">
      <div className="flex flex-row w-full mx-auto max-w-6xl justify-between py-5">
        <Link href={'/'} className="font-bold uppercase">
          <span className="text-4xl font-extrabold">K</span>
          <span className="text-2xl hover:text-3xl font-medium duration-200">
            awsar
          </span>
        </Link>
        <div className="flex flex-row items-center">
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
      </div>
    </div>
  )
}
