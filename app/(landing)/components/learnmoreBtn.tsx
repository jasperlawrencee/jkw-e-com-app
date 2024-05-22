import React from 'react'

function LearnMoreBtn() {
  return (
    <button className='w-[9.5rem] py-[0.5rem] border-solid border-2 rounded-[0.375rem] border-slate-50 text-slate-50 flex justify-center items-center gap-x-[0.625rem]'>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
        </svg>

        <p>{"Learn More"}</p>
    </button>
  )
}

export default LearnMoreBtn