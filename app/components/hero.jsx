import React from 'react'
import Nav from './nav'
import Image from 'next/image'

export default function Hero() {
  return (
    <main className='relative max-w-[1440px] mx-auto  font-ppPlus lg:px-[102px] lg:pb-[350px] px-[21px] mt-12   '>
        <Nav/>
        <div className='lg:max-w-[50%]  space-y-5 mt-12  z-50 relative'>
        <h1 className='font-bold lg:text-[88.7px] text-[45px] '>$PEPEPEDRO</h1>
        <p className='lg:text-[34px] text-[24px]'>
        Lorem ipsum dolor sit amet, consectetuer 
        adipiscing elit. Aenean commodo ligula eget dolor
        </p>
        <button className='bg-[#c3564d] hover:bg-[#c3564d]/75 arial mt-4 text-[24px] px-5 py-3 lg:px-[40px] py-[18px]
          text-white rounded-[42px]'>Buy on Dexscreener</button>
        </div>
        <div className='lg:absolute bottom-0  lg:block   lg:max-w-[65%] right-0 max-h-[80%] mt-12 relative'>
            <Image alt='pedro'  src={'/hero.svg'} width={500} height={500} className='relative w-full h-full bottom-0'/>
        </div>
    </main>
  )
}
