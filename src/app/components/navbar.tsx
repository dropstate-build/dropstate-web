import Link from 'next/link'
import React from 'react'

const NavBar:React.FC=()=> {
  return (
    <ul className='flex flex-row gap-[40px] leading-normal items-start font-normal font-Plus_Jakarta_Sans text-[18px] text-[#171717] '>
    <li>
      <Link href='#'>
        Tshirt
      </Link>
    </li>
    <li>
      <Link href='#'>
        Hoodies
      </Link></li>
    <li>
      <Link href='#'>
        Stickers
      </Link>
    </li>
    <li>
      <Link href='#'>
        Posters
      </Link>
    </li>  <li>
      <Link href='#'>
        Sneakers
      </Link>
    </li>  <li>
      <Link href='#'>
        Tumblers
      </Link>
    </li>
  </ul>
  )
}

export default NavBar