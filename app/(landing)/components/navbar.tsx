import React from 'react'
import Image from 'next/image'
import { logo, placeholderProfile } from '../../../assets/images'
import { CiSearch, CiShoppingCart } from "react-icons/ci";

const Navbar = () => {
  return (
    <nav className="w-[100vw] max-h-20 bg-zinc-800 justify-between items-center inline-flex px-14 py-4">
      {/* logo start */}
      <a className="justify-center items-center p-3 gap-2.5 inline-flex select-none rounded-full hover:bg-zinc-950 duration-300" href='/'>
        <div className=""><Image src={logo} alt='logo' className='w-12 h-12'/></div>
        <div className="flex-col justify-start items-start inline-flex">
          <div className="text-xl leading-7 font-semibold">{"Expert in Computers | Expect More"}</div>
        </div>
      </a>
      {/* logo end */}
      {/* searchbar start */}
      <div className="max-w-80 h-9 px-3 py-2 bg-slate-50 rounded-md justify-start items-center gap-2.5 inline-flex">
        <CiSearch className='text-zinc-800 max-w-[16px] max-h-[16px]'/>
        <input type="text"
        className='h-full w-full outline-none text-zinc-800'
        placeholder='Search'
        />
      </div>
      {/* searchbar end */}
      {/* buttons start */}
      <div className="max-w-52 h-10 justify-start items-center gap-8 inline-flex">
        <div className=""><a href=""><CiShoppingCart className='h-6 w-6'/></a></div>
        <div className="w-10 h-10 relative"><a href=""><Image src={placeholderProfile} alt='profile'/></a></div>
        <div className="sm:hidden md:hidden"><a href=""><p>{"John Doe"}</p></a></div>
      </div>
      {/* buttons end */}
    </nav>
  )
}

export default Navbar