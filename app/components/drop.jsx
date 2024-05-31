import React from 'react'
import Image from 'next/image'


export default function Drop() {
  return (
    <main className='relative bg-[#695555] pt-12 w-full '>
        <div className=' w-full relative max-w-[1440px] mx-auto flex justify-center'>
            <Image alt='about' src={'/drop.svg'} width={500} height={500} className='w-full max-w-[65%] bottom-0'/>
        </div>
{/* 
        <div className='absolute z-50 w-full top-16 gap-10 flex flex-col items-center justify-center h-full -left-[13%]'>
            <Image alt='star' width={12} src={'/star.svg'} height={12} className=''/>
            <Image alt='star' width={28} src={'/star.svg'} height={28}/>
            <div className='flex gap-8 items-center mt-5 w-fit  justify-start relative -left-8 '>
            <Image alt='star' src={'/star.svg'} width={12} height={12} className='relative left-[12px]'/>
            <Image alt='star' src={'/star.svg'} width={12} height={12}/>
            </div>
            <Image alt='star' src={'/star.svg'} width={12} height={12} />
            <Image alt='star' src={'/star.svg'}  width={17} height={17} className=' mb-8 relative left-5'/>
            <Image alt='star' src={'/star.svg'} width={17} height={17} className=' mb-8'/>
            <Image alt='star' src={'/star.svg'} width={17} height={17} className=' relative -left-9'/>
            <Image alt='star' src={'/star.svg'} width={17} height={17}/>
            <Image alt='star' src={'/star.svg'} width={17} height={17} className=' relative -right-9'/>
            <Image alt='star' src={'/star.svg'} width={17} height={17}/>
        </div> */}

    </main>
  )
}
