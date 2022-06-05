import React from 'react'
import Brand_foot from '../img/amazon-prime-video-logoo.svg'

function Footer() {
  return (
    <div className='h-[8.5rem] relative bottom-0 bg-gradient-to-b from-[#181818] to-[#222222]  py-6 flex flex-col items-center'>

    <img src={Brand_foot} alt="" className='w-[6.4rem] pb-[0.20rem]' />
    <span className='flex items-center mb-1 space-x-[0.35rem] px-[0.35rem]'>
    <ul className='flex space-x-[0.35rem] ml-5  text-[0.9rem] text-[#155474]'>
        <li>Terms and Privacy Notice</li>
        <li>Send us feedback</li>
        <li>Help</li>
    </ul>

        <span className='text-white text-sm'>

© 1996-2022, Amazon.com, Inc. or its affiliates

        </span>
    </span>
    <p className='text-white'>Vo Pandu nahi hai kya !</p>
    </div>
  )
}

export default Footer