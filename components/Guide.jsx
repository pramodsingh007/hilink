import Image from 'next/image'
import React from 'react'
import Content from './UI/Content'

function Guide() {
  return (
    <section className='mb-20'>
      <div  className=' mb-20 sm:mr-8 max-sm:mr-8 max-sm:ml-8 sm:ml-8 lg:mr-20 lg:ml-20 grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 max-md:grid-cols-1  max-sm:grid-cols-1 lg:gap-48 md:gap-12 sm:gap-12 max-sm:gap-12 place-items-center'>
        <div>
        <Image src={'/camp.svg'} width={50} height={50} alt='camp img'></Image>
        <p className='text-green-500 '>WE ARE HERE FOR YOU</p>
         <h1 className=' lg:text-7xl sm:text-5xl max-sm:text-5xl font-bold mt-4 mb-4'>
         Guide You to Easy Path
         </h1>
        </div>
         <Content>Only with the hilink application you will no longer get lost and get lost again, because we already support offline maps when there is no internet connection in the field. Invite your friends, relatives and friends to have fun in the wilderness through the valley and reach the top of the mountain</Content>
      </div>

      <div className='w-full max-h-full  relative '>
        <Image src={'/boat.png'} className=' w-full h-full' width={1000} height={1000} alt='boat img'></Image>
        
        <div className='flex space-x-10 p-9 place-items-center rounded-2xl absolute lg:top-8 md:top-8 md:left-8 lg:left-8 sm:top-8 sm:left-[25%] sm:righ-[25%] max-sm:top-0 max-sm:right-auto    bg-white'>
          <Image src={'/meter.svg'} width={20} height={20} alt='meter'></Image>
          <div className='space-y-8'>
          <div>
          <div className='flex justify-between'>
            <p className='text-slate-500'>Destination</p>
            <p className='text-green-500'>48min</p>
          </div>
          <h1 className='font-bold text-lg'>Aguas Calientes</h1>
          </div>
          <div>
          <p className='text-slate-500'>Stack track</p>
          <h1 className='font-bold text-lg'>Wonorejo Pasuruan</h1>
          </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Guide