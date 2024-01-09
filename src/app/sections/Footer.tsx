import Link from 'next/link'

export default function Footer() {
  return (
    <div className="bg-slate-50 w-full flex justify-center">
      <div className="flex flex-row w-full mx-auto max-w-6xl justify-between py-3">
        <div className="flex items-center">
          <p className="">Made by Kawsar with Next.js | 2024</p>
        </div>
        <div className="flex flex-row items-center">
          <Link
            className="rounded-md p-2 hover:bg-slate-100/60 duration-150"
            href={'/'}
          >
            Terms and Conditions
          </Link>
        </div>
      </div>
    </div>
  )
}
