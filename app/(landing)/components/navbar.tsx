import React from 'react'
import Image from 'next/image'
import jkccLogo from "../../../assets/logo.png"

const Navbar = () => {
  return (
    <nav className='py-[1rem] px-[3.5rem] flex justify-between items-center bg-yellow-300 max-h-[5rem]'>
        <div className="flex gap-x-[0.625rem] font-semibold text-zinc-800 items-center">
        {/* not final image component */}
        <Image src={jkccLogo} alt='logo' width={25} height={25}/>
        <h1 className='text-m '>{"Expert in Computer | Expect More"}</h1>
        </div>
        <div className="flex text-zinc-800 gap-x-[3.5rem] text-sm font-medium">
            <a href="">{"Home"}</a>
            <a href="">{"Brands"}</a>
            <a href="">{"Categories"}</a>
            <a href="">{"About"}</a>
            {/* change to login component proper */}
            <button>Login</button>
            {/* ambot unsaon ning cart icon */}
            {/* <a href=""><link rel="icon" href="icon" sizes=''/></a> */}
        </div>
    </nav>
  )
}

export default Navbar