import React from 'react'
// import '../App.css'
import Brand from '../img/amazon-prime-video-logo.svg'
import { MdArrowDropDown } from 'react-icons/md'
import { MdOutlineLanguage } from 'react-icons/md'
import { AiOutlineUser } from 'react-icons/ai'
import { BiSearch } from 'react-icons/bi'



function Navbar() {
  function catg() {
    const dpd = document.getElementById('dropD');
    (dpd.style.display === "none") ? dpd.style.display = 'flex' : dpd.style.display = 'none'

  }

  return (<>
    <header className='bg-[#19242e] h-20 px-4 flex sticky top-0 items-center '>
      <img src={Brand} className='w-28 ml-[2.15rem] mr-5' alt="" />
      <div className='text-[#9fa3a8] text-[1.060rem] pb-2 pl-1 w-1/2 flex items-center'>
        <ul className='flex space-x-4 '>
          <li className='my-7'><a className='cursor-pointer '>Home</a></li>
          <li className='my-7'><a className='cursor-pointer '>Store</a></li>
          <li className='my-7'><a className='cursor-pointer '>Channels</a></li>
          <li className='h-20' id='Categories' ><a onMouseOver={catg} className='cursor-pointer py-7 flex  px-[0.15rem] text-gray-300 hover:text-white'>Categories<MdArrowDropDown className='text-sm mt-[0.30rem] ml-[0.30rem] ' /> </a>
          </li>
          <li className='my-7'><a className='cursor-pointer '>My Stuff</a></li>
        </ul>
      </div>
      <div className='flex w-1/2 flex-row-reverse pr-4 items-center text-[#9fa3a8]'>

        <div className='flex items-center space-x-2 ml-2 mr-7'>
          <AiOutlineUser className=' text-2xl ' />
          <MdArrowDropDown />
        </div>
        <div className='flex items-center space-x-1 mx-2'>
          <MdOutlineLanguage className='text-2xl ' />
          <span>EN</span>
          <MdArrowDropDown />
        </div>
        <div className='mx-2'>
          <BiSearch className='text-2xl ' />
        </div>
        <button className='mx-[0.65rem] bg-[#0f79af] hover:bg-sky-500 px-4 py-1 text-slate-200 rounded-sm text-lg'>Pandu_007</button>

      </div>
    </header>
    <div className="dropD h-[21rem] hidden sticky top-20  z-10 w-full bg-gradient-to-tr from-gray-800/95 to-gray-900" id='dropD'  >
      <div className='flex justify-end w-1/2 '>
        <div className='flex flex-col my-3 w-3/4 space-y-4 mt-2 py-4 text-[#9fa3a8] pr-10 border-r-2 border-white '>

          <h1 className='text-lg mb-2 text-white'>Top categeroies</h1>
          <div className='grid justify-evenly grid-cols-3 gap-2 text-white'>
            <div className='hover:border-2 border-white h-24 w-40 rounded-md flex items-center justify-center text-center' id='prime'>Included with <br/> Prime </div>
            <div className='hover:border-2 border-white h-24 w-40 rounded-md flex items-center justify-center ' id='originals'>Amazon Originals</div>
            <div className='hover:border-2 border-white h-24 w-40 rounded-md flex items-center justify-center ' id='movies'>Movies</div>
            <div className='hover:border-2 border-white h-24 w-40 rounded-md flex items-center justify-center mt-2 ' id='tv'>TV</div>
            <div className='hover:border-2 border-white h-24 w-40 rounded-md flex items-center justify-center mt-2 ' id='prime'>Kids</div></div>
        </div>
      </div>
      <div className='w-1/2 text-[#9fa3a8] flex p-5 '>
        <div className='w-2/5  pl-10 mr-10'>
          <h1 className='text-lg mb-2 text-white'>Audio languages</h1>
          <span className='flex px-2  space-x-16'>
            
          <ul className='space-y-2'>
            <li className='hover:text-white cursor-pointer'><a>English</a></li>
            <li className='hover:text-white cursor-pointer'><a>Hindi</a></li>
            <li className='hover:text-white cursor-pointer'><a>Tamil</a></li>
            <li className='hover:text-white cursor-pointer'><a>Telegu</a></li>
            <li className='hover:text-white cursor-pointer'><a>Kannada</a></li>
          </ul>
          <ul className='space-y-2'>
            <li className='hover:text-white cursor-pointer'><a>Malyalam</a></li>
            <li className='hover:text-white cursor-pointer'><a>Punjabi</a></li>
            <li className='hover:text-white cursor-pointer'><a>Marathi</a></li>
            <li className='hover:text-white cursor-pointer'><a>Bengali</a></li>
            <li className='hover:text-white cursor-pointer'><a>Gujrati</a></li>
          </ul>
          </span>
        </div>
        <div className='w-1/2 '>
          <h1 className='text-lg mb-2 mx-[-0.5rem] text-white'>Other categories</h1>
          <span className='space-y-2'>
            <ul className='hover:text-white cursor-pointer'><a>Drama</a></ul>
            <ul className='hover:text-white cursor-pointer'><a>Action and adventure</a></ul>
            <ul className='hover:text-white cursor-pointer'><a>Romance</a></ul>
            <ul className='hover:text-white cursor-pointer'><a>Comedy</a></ul>
            <ul className='hover:text-white cursor-pointer'><a>Suspense</a></ul>
            <ul className='hover:text-white cursor-pointer'><a>Horror</a></ul>
            <ul className='hover:text-white cursor-pointer'><a>Award winners</a></ul>
          </span>
        </div>

      </div>
    </div>

    
  </>
  )
}

export default Navbar;