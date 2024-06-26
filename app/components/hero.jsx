import React from 'react'
import Nav from './nav'
import Image from 'next/image'

export default function Hero() {
  return (
    <main className='relative max-w-[1440px] mx-auto  font-ppPlus lg:px-[102px] lg:pb-[350px] px-[21px] mt-12   '>
        <Nav/>
        <div className='lg:max-w-[50%]  space-y-8 mt-12  z-50 relative'>
        <h1 className='font-bold lg:text-[88.7px] text-[45px] '>$pedro</h1>
        <p className='lg:text-[34px] md:text-[24px] text-[17.5px]'>
        He is the degen love child of two poppas, Pepe and Pedro.
          His song will make you want to go live on the moon
        </p>
        <button className='bg-[#c3564d] hover:bg-[#c3564d]/75 arial  md:text-[24px] text-[17.5px] px-5 py-3 lg:px-[40px] py-[18px]
          text-white rounded-[42px]'><a href="https://dexscreener.com/solana/6VBp6ZB8qiJE4ciq3mEnkbLHegixFNAv8NAqAPEoQcQs" target="_blank"> Buy on Dexscreener</a></button>
        </div>
        <div className='lg:absolute -bottom-2  lg:block   lg:max-w-[65%] right-0 max-h-[80%] mt-12 relative'>
            <Image alt='pedro'  src={'/hero.svg'} width={500} height={500} className='relative w-full h-full bottom-0'/>
        </div>
    </main>
  )
}
