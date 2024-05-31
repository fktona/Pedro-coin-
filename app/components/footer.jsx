import React from 'react'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className='lg:px-[102px]   font-ppPlus max-w-[1440px] mx-auto mt-[110px] mb-[60px] 
    px-[21px] gap-8 flex flex-col lg:flex-row  justify-between w-full items-center relative'>
        <div className='lg:space-y-[37px]  lg:max-w-[80%] space-y-[15px] lg:max-w-[50%] text-center relative w-full px-[21px]'>
            <h1 className='lg:leading-[111.37px]  text-center lg:text-[97px] mb-6 text-[65px] text-black font-bold text-[#1C0D0E]'>
             Socials
            </h1>
            <div className='lg:space-y-3 arial  w-full  flex flex-col gap-5'>
                <button className='md:text-[24px] text-[18.2px] hover:bg-[#1C0D0E]/85 rounded-[15px] bg-[#1C0D0E]  px-10 py-5 text-white'><a href="https://x.com/SOLPedroPedro1a" target="_blank">X(Twitter)</a></button>
                <button className='md:text-[24px] text-[18.2px] hover:bg-[#1C0D0E]/85 rounded-[15px] bg-[#1C0D0E] px-10 py-5 text-white'>Telegram</button>
            </div>
        </div>
        <div className='  relative lg:mt-[80px] right-0'>

            <Image alt='footer' src={'/footer.svg'} width={500} height={900} className='w-full relative' />
            <p className='lg:text-[50px] text-[30px] px-8 pb-6 font-bold text-white absolute  lg:pb-[80px] 
             bottom-0 right-0'>Click da god <br/> dem links</p>
        </div>

    </footer>
  )
}
