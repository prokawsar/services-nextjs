import Link from 'next/link'

type Props = {
  name: string
  url: string
}

export default function NavItem({ name, url }: Props) {
  return (
    <Link
      className="rounded-md p-2 text-sm uppercase hover:bg-gray-100 hover:font-semibold duration-150"
      href={url}
    >
      <span className="text-lg">{name[0]}</span>
      {name.substring(1, name.length)}
    </Link>
  )
}
