import React from 'react'

function Footer() {
  return (
    <div className='flex flex-col py-[1rem] px-[2.75rem] bg-slate-50'>
      <div className="text-zinc-800 flex text-center justify-center gap-x-[1.5rem]">
        <p className='text-sm leading-5 font-bold'>{"JKCC © 2024"}</p>
        <a href="#"><p className='text-sm'>{"Privacy Policy"}</p></a>
        <a href="#"><p className='text-sm'>{"Terms & Conditions"}</p></a>
      </div>
    </div>
  )
}

export default Footer