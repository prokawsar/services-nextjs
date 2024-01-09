import { IconProp, SizeProp } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'

type Props = {
  url: string
  name?: string
  target?: string
  icon?: IconProp
  iconSize?: SizeProp
}

export default function NavItem({
  name = '',
  url,
  icon = '0',
  iconSize = '1x',
  target,
}: Props) {
  return (
    <Link
      className="rounded-md flex items-center p-2 text-sm uppercase hover:bg-gray-100 hover:font-semibold duration-150"
      href={url}
      target={target}
    >
      <span className="text-lg">{name[0]}</span>
      {name.substring(1, name.length)}

      <FontAwesomeIcon className="!h-5 !w-5" icon={icon} />
    </Link>
  )
}
