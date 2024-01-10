'use client'

import { faBars } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

type Props = {
  onMenuClick: Function
}

export default function MobileMenuBar({ onMenuClick }: Props) {
  const openMobileMenu = () => {
    return true
  }
  return (
    <button className="" onClick={() => onMenuClick()}>
      <FontAwesomeIcon className="!h-5 !w-5" icon={faBars} />
    </button>
  )
}
