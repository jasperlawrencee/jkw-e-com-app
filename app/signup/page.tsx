// @ts-ignore
"use client";

import React, { useState } from 'react'; // Add the "use client" pragma above the import statement
import jkccLogo from "../../assets/logo.png";
import sideImage from '../../assets/svgs/signinsignup.svg';
import Image from 'next/image';
import { auth } from "../../firebase/clientApp.js";
import { createUserWithEmailAndPassword } from 'firebase/auth';

function Signup() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const signUp = async (email: string, password: string) => {
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            console.log('User signed up:', userCredential.user);
        } catch (error) {
            console.error('Error signing up:', error);
        }
    };

    const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        try {
            await signUp(email, password);
        } catch (error) {
            console.error('Error during sign-up:', error);
        }
    };

    return (
        <div className='flex'>
            {/* image div */}
            <div className="px-[3.5rem] py-[3.5rem] w-[50vw] h-[100vh] flex relative">
                <Image src={sideImage} alt='' quality={100} layout='fill' objectFit='cover' />
                <div className="z-0 flex flex-col justify-between">
                    <div className="text-2xl leading-9 font-semibold flex items-center gap-x-[0.5rem]">
                        <Image src={jkccLogo} alt='logo' width={30} height={30} />
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
                    <p className='w-full text-zinc-800 flex justify-end'><a href="/login">{"Sign In"}</a></p>
                    <div className="px-[3rem] flex text-center justify-center text-zinc-800">
                        <form onSubmit={onSubmit} className='w-full flex flex-col space-y-[0.625rem]'>
                            <h4 className='justify-center font-bold'>{"Sign Up"}</h4>
                            <p>{"Fill out your credentials to create your account"}</p>
                            <input name="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Email' type="text" className='px-[1rem] py-[0.5rem] bg-transparent border-solid border-2 rounded-[0.375rem] outline-none' />
                            <input name="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Password' type="password" className='px-[1rem] py-[0.5rem] bg-transparent border-solid border-2 rounded-[0.375rem] outline-none' />
                            <button type='submit' className='bg-zinc-800 px-[1rem] py-[0.5rem] rounded-[0.375rem] text-slate-50'>{"Sign Up with Email"}</button>
                        </form>
                    </div>
                    {error && <p className='text-red-500'>{error}</p>}
                    <p className='text-sm leading-5 font-bold text-zinc-800 w-full flex justify-end'>{"JKCC © 2024 All Rights Reserved"}</p>
                </div>
            </div>
        </div>
    );
}

export default Signup;
