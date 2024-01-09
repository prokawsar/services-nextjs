import Link from 'next/link'

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
          <Link
            className="rounded-md p-2 hover:bg-gray-100 hover:font-semibold duration-150"
            href={'/services'}
          >
            Services
          </Link>
          <Link
            className="rounded-md p-2 hover:bg-gray-100 hover:font-semibold duration-150"
            href={'/experiences'}
          >
            Experiences
          </Link>
          <Link
            className="rounded-md p-2 hover:bg-gray-100 hover:font-semibold duration-150"
            href={'/skills'}
          >
            Skills
          </Link>
        </div>
      </div>
    </div>
  )
}
