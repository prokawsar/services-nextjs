import Link from 'next/link'
import NavItem from './NavItem'

export default function Header() {
  return (
    <div className="fixed top-0 z-10 w-full flex justify-center">
      <div className="flex flex-row w-full mx-auto max-w-6xl justify-between py-5">
        <Link
          href={'/'}
          className="font-bold text-3xl hover:scale-110 duration-200"
        >
          Kawsar
        </Link>
        <div className="flex flex-row items-center">
          <NavItem name="Services" url="/services" />
          <NavItem name="experiences" url="/experiences" />
          <NavItem name="skills" url="/skills" />
        </div>
      </div>
    </div>
  )
}
