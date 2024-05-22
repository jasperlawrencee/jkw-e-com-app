import React from 'react'
import Image from 'next/image'
import heroAsset from '../../../assets/svgs/heroAsset.svg'
import ShopNowBtn from './shopnowBtn'
import LearnMoreBtn from './learnmoreBtn'

function Hero() {
  return (
    <div className='flex px-[3.5rem] py-[3.5rem] items-center justify-between'>
        {/* hero text */}
        <div className="text-slate-50 block space-y-[0.625rem]">
            <h1 className='self-stretch text-5xl leading-none font-bold'>
              <span>{"Your One-Stop Shop for"}</span>
              <br />
              <span>{"Computer Parts and"}</span>
              <br />
              <span>{"IT Services"}</span>
            </h1>
            <p className='text-base leading-6 font-normal'>{"High-quality components, extent repairs, and unbeatable customer support"}</p>
            <div className="flex gap-x-[1rem]">
              <ShopNowBtn/>
              <LearnMoreBtn/>
            </div>
        </div>
        {/* hero asset */}
        <div className="">
          <Image src={heroAsset} alt='hero'/>
        </div>
    </div>
  )
}

export default Hero