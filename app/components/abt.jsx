import React from 'react'
import Image from 'next/image'

export default function 
Abt() {
  return (
    <main className=' font-ppArial relative bg-[#1D1D1D] py-[105px] '>
        <div className='max-w-[1440px] mx-auto px-12 lg:px-[285px] space-y-10 '>
          <div className='relative w-full flex left-0  items-center justify-between  top-[5%]'>
          <Image alt='star' src={'/star.svg'}  width={9.5} height={9.5} className='relative -bottom-[60px] lg:w-[17px] aspect-square '/>
            <Image alt='star' src={'/star.svg'} width={9.5} height={9.5} className=' lg:w-[17px] aspect-square'/>
            <Image alt='star' src={'/star.svg'} width={9.5} height={9.5} className='relative lg:w-[17px] -top-[60px] aspect-square'/>
            <Image alt='star' src={'/star.svg'} width={9.5} height={9.5} className='relative lg:w-[17px] -bottom-[20px] aspect-square'/>
            <Image alt='star' src={'/star.svg'} width={9.5} height={9.5} className=' lg:w-[17px] aspect-square'/>
            <Image alt='star' src={'/star.svg'} width={9.5} height={9.5} className='relative lg:w-[17px] -bottom-[60px] aspect-square'/>
          </div>
            <h1 className='lg:text-[96px] font-bold text-white text-center text-[40px] lg:leading-[111px]'>
            About $pedro
            </h1>
            <p className='lg:text-[37px] text-[17.5px] font-bold text-white  text-center'>

          You’ll be hearing him all day as word spreads to buy PepePedro.
              If this coin doesn’t explode your ear drums will!
            </p>

            <div className='flex arial justify-center gap-6 lg:gap-10'>
                <button className='rounded-[42px] lg:py-[18px] px-[24px] py-3 lg:px-[40px] lg:text-[24px]  text-[17.5px]
                bg-[#FFF9D9] hover:bg-[#FFF9D9]/75'><a href="https://www.dextools.io/app/en/solana/pair-explorer/6VBp6ZB8qiJE4ciq3mEnkbLHegixFNAv8NAqAPEoQcQs?t=1717434683270" target="_blank">Dextool</a></button>
                <button className='rounded-[42px] lg:py-[18px] px-[24px] py-3 lg:px-[40px] lg:text-[24px] 
                text-[17.5px]
                 bg-[#FFDA19] hover:bg-[#FFDA19]/75'><a href="https://dexscreener.com/solana/6VBp6ZB8qiJE4ciq3mEnkbLHegixFNAv8NAqAPEoQcQs" target="_blank">Dexscreener</a></button>
            </div>

        </div>
    
    </main>
  )
}
