import React from 'react'
import PrimaryCard from './pChoose'

export default function WhyChoose() {
  return (
    <div className='px-[3.5rem] py-[3.5rem] space-y-[1rem]'>
        <div className="text-center space-y-[1rem]">
            <p className='text-4xl leading-10 font-bold'>{"Why Choose Us?"}</p>
            <p className='text-base leading-6 font-normal'>{"We offer the best in quality, and support for all your tech needs"}</p>
        </div>
        <div className="">
            <PrimaryCard/>
        </div>
    </div>
  )
}
