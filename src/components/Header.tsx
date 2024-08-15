import Image from 'next/image'
import React from 'react'
import { ModeToggle } from './mode-toggle'

const Header = () => {
  return (
    <div className='container'>
        {/* Desktop */}
        <div className=''>
            <Image src="/logo.png" alt='logo' width={140} height={140} className=' object-contain'/> 

            <ModeToggle />
        </div>
        {/* Mobile */}
    </div>
  )
}

export default Header