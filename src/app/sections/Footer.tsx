import Link from 'next/link'

export default function Footer() {
  return (
    <div className="bg-slate-50 backdrop-blur-md bg-opacity-40 w-full flex justify-center border-t-2 border-yellow-400">
      <div className="flex flex-col-reverse sm:flex-row w-full mx-auto max-w-6xl items-center  justify-between py-3">
        <div className="flex items-center">
          <p className="text-gray-500">Made by Kawsar with Next.js | 2024</p>
        </div>
        <div className="flex flex-row items-center">
          <Link
            className="rounded-md p-2 hover:bg-slate-100/60 duration-150"
            href={'/terms'}
          >
            Terms and Conditions
          </Link>
        </div>
      </div>
    </div>
  )
}
