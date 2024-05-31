import React from 'react'
import Image from 'next/image'

export default function 
Img() {
  return (
    <div className='w-full relative px-[21px] lg:px-[102px] mt-[50px] '>
        <div className='relative w-full max-w-[1440px] mx-auto '>     
               <Image alt='img 1' src={'/img2.svg'} width={500} height={500} className='w-full' />
        {/* <div className='w-full h-[10px] bg-black relative'></div> */}
        <Image alt='img 1' src={'/img.svg'} width={500} height={500}  className='w-full'/>
        </div>

        
    </div>
  )
}
