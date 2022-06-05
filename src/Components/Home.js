import React from 'react'
// import '../App.css'
import LionsgatePlay from '../img/LionsgatePlay.jpeg'
import Discovery from '../img/Discovery.jpeg'
import Erosnow from '../img/Erosnow.jpeg'
import hoichoi from '../img/hoichoi.jpeg'
import Docubay from '../img/Docubay.jpeg'
import ShortsTV from '../img/ShortsTV.jpeg'
import Mubi from '../img/Mubi.jpeg'
import Manoramamax from '../img/MANORAMAMAX.jpeg'
import Hayu from '../img/Hayu.jpeg'


function Home() {
  // const bg_1 = {

  // }
  return (<>
      <div className='h-[70vh] bg-cover flex items-start text-white justify-center' id='bg_1'>

        <span className='my-20 w-full px-[5rem] '>
          <h1 className='text-[2.75rem] py-5  font-sans text-white/80'>Welcome to Prime Video</h1>
          <span className='w-32 text-2xl text-white/70 '>
            Join Prime to watch the latest movies, TV shows and award- <br />
            winning Amazon Originals
          </span>
          <br />
          <button className='text-lg bg-blue-600 hover:bg-blue-500 px-9 py-[0.5rem] rounded-[0.155rem] mt-4 mb-1 text-center' id='free-t'>Start your 30-day free trail</button>
          <br />
          <label htmlFor="free-t" className='mx-8  text-white/80 text-sm my-4'>With select credit or debit cards</label>
        </span>
      </div>
      <div className="h-[70vh] bg-cover  flex  " id='bg_2'>
        <span className='w-full px-[4.7rem] py-[5.8rem]  text-white/70 '>
          <h1 className='text-[2.55rem] text-white/80 font-sans pt-[1.85rem] pb-[1.25rem]'>Movie rentals on Prime video</h1>
          <span className='text-[1.3rem] tex-white/70'>Early Access to new movies, before digital subscription</span>
          <br />
          <button className='text-lg bg-blue-500 px-[6.5rem] py-[0.7rem] rounded-[0.155rem] mt-12 text-center'>Rent now</button>

        </span>
      </div>
    
    <div className='h-[70vh] flex'>
      <span className='w-1/2  pl-[5rem] py-[2.5rem] pr-[3rem]  '>
        <h1 className='text-5xl'>Your favorite channels all in <br /> one place</h1>
        <div className='py-7 text-2xxl text-black/80'>
          With Prime Video Channels, find shows and movies from your
          favorite channels all in one place. Enjoy with an add-
          on subscription to Channels of your choice
        </div>
      </span>
      <span className='w-1/2 grid grid-cols-3 py-6 pr-16 pl-9'>
        <a><img src={LionsgatePlay} className='w-52 h-36 shadow-xxl rounded-[0.2rem]' id='par_3' /></a>
        <a><img src={Discovery} className='w-52 h-36 shadow-xxl rounded-[0.2rem]' id='par_4' /></a>
        <a><img src={Erosnow} className='w-52 h-36 shadow-xxl rounded-[0.2rem]' id='par_5' /></a>
        <a><img src={hoichoi} className='w-52 h-36 shadow-xxl rounded-[0.2rem]' id='par_6' /></a>
        <a><img src={Docubay} className='w-52 h-36 shadow-xxl rounded-[0.2rem]' id='par_1' /></a>
        <a><img src={ShortsTV} className='w-52 h-36 shadow-xxl rounded-[0.2rem]' id='par_2' /></a>
        <a><img src={Mubi} className='w-52 h-36 shadow-xxl rounded-[0.2rem]' id='par_7' /></a>
        <a><img src={Manoramamax} className='w-52 h-36 shadow-xxl rounded-[0.2rem]' id='par_8' /></a>
        <a><img src={Hayu} className='w-52 h-36 shadow-xxl rounded-[0.2rem]' id='par_9' /></a>
      </span>

    </div>


    <div className='h-[70vh] w-full flex justify-end items-end '   id='stick'>
      
    <span className=' px-20 py-24 w-[50vw]   text-white '>
      <h1 className='text-[2.5rem] mb-4'>Even better with Fire TV Stick</h1>
      <p className='text-xl ' id='kds'>
        The biggest movies and TV shows are always better on a big <br />
        screen. Simply plug in your Amazon Fire TV Stick and stream on <br />
        any HDTV. Press the voice button on the remote and say the name <br />of the tittle you want to watch to find it in seconds.
       </p>
      <button className='my-12 py-[0.80rem] px-[6rem] bg-blue-600 text-lg'>Get started</button>
      </span>
    </div>
    <div className='las-fl h-[70vh] bg-right-top flex justify-end'>
      <span className='las-span p-20 w-[100vw] text-white'>
      <h1 className='text-[2.65rem] my-4'>Family Friendly</h1>
      <p className='text-xl' id='kids'>
        With easy to use Parental Controls and a dedicated kids page,<br />
        enjoy secure, ad-free kids entertainment. Kids can enjoy popular<br />TV shows like Peppa Pig, powerpuff Girls, and Chhota Bheem.</p>
      <button className='my-12 py-[0.80rem] px-[6.3rem] bg-blue-600 text-lg '>Get started</button>
      </span>
    </div>
  </>
  )
}

export default Home