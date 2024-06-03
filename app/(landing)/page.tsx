import React from 'react'
import Image from 'next/image'
import waiting from '../../assets/svgs/waitingInLine.svg'
import logo from '../../assets/logo.png'
import Footer from '../(landing)/components/footer'
import Navbar from '../(landing)/components/navbar'

const Landing = () => {
  return (
    <div className="w-screen h-screen bg-zinc-800">
      <div className="flex flex-col justify-between h-[100%]">
      <Navbar/>
      <div className='flex items-center justify-center px-[3.5rem]'>
        <div className="flex w-[100%] items-center justify-between">
          <div className="text-left space-y-[1rem] w-[100%] h-[100%]">
            <div className="flex gap-x-[1rem] w-[100%] items-center">
              <div className="w-[2rem] h-[2rem]"><Image src={logo} alt='logo' className='flex'/></div>
              <p>Jasper Kissa Computer Center</p>
            </div>
            <h1 className='text-5xl leading-none font-bold'>{"Something is cooking"}</h1>
            <div className="w-[100%]">
              <p>{"Exciting updates are on the way! We're working hard behind the scenes to bring you something amazing. Check back soon for the latest news and developments. In the meantime, follow us on our social media channels to stay in the loop and be the first to know when we launch."}</p>
            </div>
          </div>
          <div className="md:hidden sm:hidden lg:flex lg:w-[100%] lg:h-[100%]">
            <Image src={waiting} alt='waiting'/>
          </div>
        </div>
    </div>
    <Footer/> 
      </div>
    </div>
  )
}

export default Landing