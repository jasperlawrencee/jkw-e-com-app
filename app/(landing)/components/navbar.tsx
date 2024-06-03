import React from 'react'
import Image from 'next/image'
import jkccLogo from "../../../assets/logo.png"
import LoginBtn from './loginBtn'


const Navbar = () => {
  return (
    <nav className='py-[1rem] px-[3.5rem] flex justify-between items-center bg-yellow-300 max-h-[5rem]'>
        <div className="flex gap-x-[0.625rem] font-semibold text-zinc-800 items-center">
        {/* not final image component */}
        <Image src={jkccLogo} alt='logo' width={25} height={25}/>
        <h1 className='text-m '>{"Expert in Computer | Expect More"}</h1>
        </div>
        <div className="flex text-zinc-800 gap-x-[3.5rem] text-sm font-medium items-center ">
            {/* <a href="">{"Home"}</a>
            <a href="/items">{"Items"}</a>
            <a href="/about">{"About"}</a>
            <a href="/login"><LoginBtn/></a>
            <a href="/cart">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
            </svg>
            </a> */}

            {/* ambot unsaon ning cart icon */}
            {/* <a href=""><link rel="icon" href="icon" sizes=''/></a> */}
        </div>
    </nav>
  )
}

export default Navbar