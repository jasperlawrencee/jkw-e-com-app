// @ts-ignore
"use client";

import React, { useState } from 'react'; // Add the "use client" pragma above the import statement
import jkccLogo from "../../assets/logo.png";
import sideImage from '../../assets/svgs/signinsignup.svg';
import Image from 'next/image';
import { firestore } from "../../firebase/clientApp.js";
import { doc, setDoc } from 'firebase/firestore';

function Items() {
    const [category, setCategory] = useState('');
    const [supplierName, setSupplier] = useState('');
    const [invoiceNum, setInvNum] = useState('');
    const [modelName, setModelName] = useState('');
    const [brandName, setBrandName] = useState('');
    const [costing, setCosting] = useState('');
    const [pricing, setPricing] = useState('');
    const [error, setError] = useState('');

    const addItem = async () => {
        try {
            const itemId = invoiceNum; // Assuming invoiceNum is unique for each item
            await setDoc(doc(firestore, "inventory", itemId), {
                category,
                supplierName,
                invoiceNum,
                modelName,
                brandName,
                costing,
                pricing,
                createdAt: new Date(),
            });
            console.log('Item added:', itemId);
        } catch (error) {
            console.error('Error adding item:', error);
            setError('Error adding item: ' + error);
        }
    };

    const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        try {
            await addItem();
        } catch (error) {
            console.error('Error during item addition:', error);
            setError('Error during item addition: ' + error);
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
                            <h4 className='justify-center font-bold'>{"Add Item"}</h4>
                            <p>{"Fill out the details to add an item to the inventory"}</p>
                            <input name="category" value={category} onChange={(e) => setCategory(e.target.value)} placeholder='Category' type="text" className='px-[1rem] py-[0.5rem] bg-transparent border-solid border-2 rounded-[0.375rem] outline-none' />
                            <input name="supplierName" value={supplierName} onChange={(e) => setSupplier(e.target.value)} placeholder='Supplier Name' type="text" className='px-[1rem] py-[0.5rem] bg-transparent border-solid border-2 rounded-[0.375rem] outline-none' />
                            <input name="invoiceNum" value={invoiceNum} onChange={(e) => setInvNum(e.target.value)} placeholder='Invoice Number' type="text" className='px-[1rem] py-[0.5rem] bg-transparent border-solid border-2 rounded-[0.375rem] outline-none' />
                            <input name="modelName" value={modelName} onChange={(e) => setModelName(e.target.value)} placeholder='Model Name' type="text" className='px-[1rem] py-[0.5rem] bg-transparent border-solid border-2 rounded-[0.375rem] outline-none' />
                            <input name="brandName" value={brandName} onChange={(e) => setBrandName(e.target.value)} placeholder='Brand Name' type="text" className='px-[1rem] py-[0.5rem] bg-transparent border-solid border-2 rounded-[0.375rem] outline-none' />
                            <input name="costing" value={costing} onChange={(e) => setCosting(e.target.value)} placeholder='Costing' type="text" className='px-[1rem] py-[0.5rem] bg-transparent border-solid border-2 rounded-[0.375rem] outline-none' />
                            <input name="pricing" value={pricing} onChange={(e) => setPricing(e.target.value)} placeholder='Pricing' type="text" className='px-[1rem] py-[0.5rem] bg-transparent border-solid border-2 rounded-[0.375rem] outline-none' />
                            <button type='submit' className='bg-zinc-800 px-[1rem] py-[0.5rem] rounded-[0.375rem] text-slate-50'>{"Add Item"}</button>
                        </form>
                    </div>
                    {error && <p className='text-red-500'>{error}</p>}
                    <p className='text-sm leading-5 font-bold text-zinc-800 w-full flex justify-end'>{"JKCC © 2024 All Rights Reserved"}</p>
                </div>
            </div>
        </div>
    );
}

export default Items;
