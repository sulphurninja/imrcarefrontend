import React, {useRef, useContext, useState, useCallback} from 'react'
import Image from 'next/image'


const Masthead: React.FC = () => {
    
    
    
  return (
    <div
    
      className='text-white min-h-screen flex flex-col items-center justify-center sticky top-0 -z-10'>
        <img src='/bg.gif' className='absolute w-full h-full object-cover' />
        <div className='pt-10 absolute mt-[350px] ml-auto mr-auto'>
            <Image src="/logo.png" alt="imr care logo" width={300} height={300}
            />
        </div>
        <div className='p-12 font-bold z-10 text-white  drop-shadow-[0_5px_3px_rgba(0,0,0,0.4)] text-center flex-1 flex items-center justify-center flex-col'>
            <h1 className='mb-6 text-4xl xl:text-5xl  underline decoration-amber-500  drop-shadow-2xlcontrast-200 '>imrcare</h1>
            <h2 className='mb-2 text-2xl xl:text-3xl tracking-tight'>
                <span className='text-amber-400'>Mobile repair,</span> <span>done right.</span>
            </h2>
        </div>
        <div className='flex-grow-0 pb-20 md:pb-10 transition-all duration-1000
            opacity-100'>
            <Image src="/icons8-scroll-down-100.png" width={188 / 3} height={105 / 3} alt="scroll down " />
        </div>
     
    </div>
  )
}

export default Masthead
