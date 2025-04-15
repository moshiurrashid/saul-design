import React from 'react'
import { FaBars } from "react-icons/fa6";

const Header = () => {
  return (
    <header className='w-full border-b-1 border-white/10 z-10'>
        <nav>
            <div className="container">
                <div className="navWrapper flex justify-between py-5 lg:py-12">
                    <div className="logo">
                        <img src="images/logo.png" alt="logo" />
                    </div>
                    
                    <FaBars className='text-white text-xl lg:hidden' />

                    <ul className='hidden lg:flex gap-12'>
                        <li><a className='list' href="#">Home</a></li>
                        <li><a className='list' href="#">About Me</a></li>
                        <li><a className='list' href="#">Contact</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    </header>
  )
}

export default Header