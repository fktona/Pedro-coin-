'use client';
import React from 'react';
import { useEffect, useState, useRef } from 'react';
import ReactPlayer from 'react-player';

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
    <div className='mx-auto max-w-[1440px] w-full relative'>
      <div className='relative mx-auto py-[60px] my-16 w-fit bg-[#1D1D1D] flex items-center justify-center rounded-[145px] min-w-[70%] max-h-[200px] lg:max-h-[622px] lg:min-h-[622px] lg:rounded-[311px] h-[40vh]'>
        <ReactPlayer
          className='z-50 absolute w-full rotate-90'
          url={'/play.mp4'}
          width='100%'
          height='100%'
          playing={playVideo}
          loop={true}
        //   controls={true}
        />
      </div>
    </div>
  );
}