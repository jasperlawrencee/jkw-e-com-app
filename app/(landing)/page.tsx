import React from 'react'
import Navbar from './components/navbar'
import Hero from './components/hero'

const Landing = () => {
  return (
    <div className='min-h-screen bg-zinc-800'>
      <Navbar/>
      <Hero/>
    </div>
  )
}

export default Landing