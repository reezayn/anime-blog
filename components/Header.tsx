import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <header className="flex items-center justify-between px-10 py-5 space-x-2 font-bold">
      <div className='flex items-center space-x-2'>
        <Link href="/">
          <Image
            className="rounded-full"
            src="/logo.png"
            width={60}
            height={60}
            alt="logo"
          />
        </Link>
        <h1>Ree-anime</h1>
      </div>
      <div>
        <Link href='https://www.zoro.to' target='_blank' className='flex items-center px-5 py-3 text-sm text-center bg-gray-900 rounded-full md:text-base text-primary'>
        Watch anime
        </Link>
      </div>
    </header>
  )
}

export default Header
