import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <>
    <nav className='absolute w-full flex justify-between items-center p-5 text-white bg-white/10'>
        <div className="logo">
            <h1 className='font-bold'>{"</>"} Code Astraa 1.0</h1>
        </div>
        <div className="flex space-x-14">
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/events">Events</Link>
            <Link href="/contact">Contact</Link>
        </div>
    </nav>
    </>
  )
}

export default Navbar