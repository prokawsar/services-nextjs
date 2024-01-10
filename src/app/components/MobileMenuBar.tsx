'use client'

import { faBars } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function MobileMenuBar() {
  const openMobileMenu = () => {
    return true
  }
  return (
    <button className="" onClick={openMobileMenu}>
      <FontAwesomeIcon className="!h-5 !w-5" icon={faBars} />
    </button>
  )
}
