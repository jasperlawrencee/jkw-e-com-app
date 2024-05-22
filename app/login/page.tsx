import React, { FormEvent } from 'react'
import jkccLogo from "../../assets/logo.png"
import sideImage from '../../assets/svgs/signinsignup.svg'
import Image from 'next/image'
import { SiGoogle } from "react-icons/si";

function Login() {

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const formData = new FormData(event.currentTarget)
    const response = await fetch('' ,{
      method: 'POST',
      body: formData,
    })

    const data = await response.json
  }

  return (
    <div className='flex'>
      {/* image div */}
      <div className="px-[3.5rem] py-[3.5rem] w-[50vw] h-[100vh] flex relative">
        <Image src={sideImage} alt='' quality={100} layout='fill' objectFit='cover'/>
        <div className="z-0 flex flex-col justify-between">
          <div className="text-2xl leading-9 font-semibold flex items-center gap-x-[0.5rem]">
            <Image src={jkccLogo} alt='logo' width={30} height={30}/>
            <span>{"JKCC"}</span>
          </div>
          <div className="text-slate-50">
            <span>"There are two ways to live: you can live as if nothing is a miracle; you can live as if everything is a miracle."</span>
            <br />
            <span>{"-Albert Einstein"}</span>
          </div>
        </div>
      </div>
      {/* forms div */}
      <div className="bg-slate-50 px-[3.5rem] py-[3.5rem] w-[50vw] h-[100vh]">
        <div className="flex flex-col justify-between h-full">
          <p className='w-full text-zinc-800 flex justify-end'><a href="/signup" >{"Sign Up"}</a></p>
          <div className="px-[3rem] flex text-center justify-center text-zinc-800">
            <form action="" className='w-full flex flex-col space-y-[0.625rem]'>
              <h4 className='justify-center font-bold'>{"Login"}</h4>
              <p>{"Enter your credentials to sign in to your account"}</p>
              <input placeholder='Email' type="text" className='px-[1rem] py-[0.5rem] bg-transparent border-solid border-2 rounded-[0.375rem] outline-none'/>
              <input placeholder='Password' type="password" className='px-[1rem] py-[0.5rem] bg-transparent border-solid border-2 rounded-[0.375rem] outline-none'/>
              <button type='submit' className='bg-zinc-800 px-[1rem] py-[0.5rem] rounded-[0.375rem] text-slate-50'>{"Login with Email"}</button>
              <div className="text-zinc-800 flex justify-center items-center gap-x-[0.625rem]">
                <div className="w-full h-[1px] bg-zinc-800"></div>
                <p className='w-full'>{"OR CONTINUE WITH"}</p>
                <div className="w-full h-[1px] bg-zinc-800"></div>
                <hr />
              </div>
              <button type='button' className='bg-zinc-800 px-[1rem] py-[0.5rem] rounded-[0.375rem] text-slate-50 flex items-center justify-center gap-x-[0.625rem]'>
                <SiGoogle />
                <p>{"Login with Google"}</p>
              </button>
            <div className="flex items-center justify-center gap-x-[0.625rem]">
              <p>{"Don't Have an account?"}</p>
              <a href="/signup" className='underline'>{"Sign Up"}</a>
            </div>
            </form>
          </div>
          <p className='text-sm leading-5 font-bold text-zinc-800 w-full flex justify-end'>{"JKCC © 2024 All Rights Reserved"}</p>
        </div>
      </div>
    </div>
  )
}

export default Login