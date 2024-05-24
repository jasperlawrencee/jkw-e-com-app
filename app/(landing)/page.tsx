import React from 'react'
import Navbar from './components/navbar'
import Hero from './components/hero'
import WhyChoose from './components/whychoose'

const Landing = () => {
  return (
    <div className='min-h-screen bg-zinc-800'>
      <Navbar/>
      <Hero/>
      <WhyChoose/>
    </div>
  )
}

export default Landing