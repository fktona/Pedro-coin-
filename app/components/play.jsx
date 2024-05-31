'use client';
import React from 'react';
import { useEffect, useState, useRef } from 'react';
import ReactPlayer from 'react-player';
import Image from 'next/image'

export default function Play() {

    const [playVideo, setPlayVideo] = useState(false);
  useEffect(() => {
    const handleFirstUserInteraction = () => {
      handleplayVideo();
      window.removeEventListener("click", handleFirstUserInteraction);
    };
    window.addEventListener("click", handleFirstUserInteraction);
  }, []);
  const handleplayVideo = () => {
    if (playVideo) {

      setPlayVideo(false);
    } else {
      setPlayVideo(true);
    }
  };

  return (
    <div className='mx-auto relative max-w-[1440px] w-full relative'>
        <div className="relative w-full lg:px-[100px] px-8 flex items-center justify-between text-[30px] lg:text-[50px] mt-8">
        <div className="font-ppPlus font-bold flex items-center gap-4"><span>Click <br/> to play </span><Image alt="arrow" src="/arrow.svg" width={80} height={80} /></div>
       <div className="font-ppPlus font-bold flex items-center hidden lg:block gap-4"><Image alt="arrow" src="/arrow2.svg" width={80} height={80} />
   <span>Click <br/>HERE</span>
       </div>
       </div>
      <div className='relative mx-auto 
       my-16 w-fit bg-black flex items-center overflow-hidden
        justify-center rounded-full lg:min-w-[70%] min-w-[90%] 
        aspect-square'>
          
        <ReactPlayer
          className='z-50 absolute w-full rounded-full aspect-square'
          url={'/pedro.mp4'}
          width='100%'
          height='100%'
          playing={playVideo}
          loop={true}
        //   controls={true}
        />
         {/* <div className='absolute flex  items-center justify-center rounded-[145px] min-w-[70%] max-h-[200px]
         lg:max-h-[622px] lg:min-h-[622px] lg:rounded-[311px]
          lg:h-[40vh] h-[60vh]  bg-black/10 z-10 w-full h-full'>
            <button className='bg-white/40 p-8 rounded-full'>

<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-12">
  <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z" />
</svg>
</button>


</div> */}
      </div>

     
    </div>
  );
}
