import Link from 'next/link'

export default function Header() {
  return (
    <div className="flex flex-row w-full mx-auto max-w-6xl justify-between px-10 py-5">
      <Link
        href={'/'}
        className="font-bold text-3xl hover:scale-110 duration-200"
      >
        Kawsar
      </Link>
      <div className="flex flex-row items-center gap-2">
        <Link
          className="rounded-md p-2 hover:bg-gray-100 hover:font-semibold duration-150"
          href={'/services'}
        >
          Services
        </Link>
        <Link
          className="rounded-md p-2 hover:bg-gray-100 hover:font-semibold"
          href={'/experiences'}
        >
          Experiences
        </Link>
        <Link
          className="rounded-md p-2 hover:bg-gray-100 hover:font-semibold"
          href={'/skills'}
        >
          Skills
        </Link>
      </div>
    </div>
  )
}
