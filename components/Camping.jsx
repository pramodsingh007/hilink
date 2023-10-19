import Image from 'next/image'
import React from 'react'
import CampCard from './UI/CampCard'
import Content from './UI/Content'
import Title from './UI/Title'

function Camping() {
  return (
    <section className='lg:mb-52 md:mb-32 sm:mb-32 max-sm:mb-32 relative'>
      <div className='relative'>
      <div className=' w-full no-scrollbar overflow-x-scroll space-x-7 flex'>
        <CampCard title={'Putuk Truno Camp'} location={'Prigen, Pasuruan'} img={'img-1.png'}></CampCard>
        <CampCard title={'Mountain View Camp'} location={'Somewhere in the Wilderness'} img={'img-2.png'}></CampCard>
      </div>
      <div className='bg-green-600 relative lg:absolute lg:bottom-[-30%] lg:right-5 lg:max-w-2xl rounded-3xl lg:p-8 max-lg:p-8  md:p-5 max-sm:p-5 sm:mt-8 sm:items-center max-sm:mt-8 sm:p-5 space-y-4 overflow-hidden sm:mr-4 sm:ml-4 max-sm:mr-4 max-sm:ml-4'>
            <Title> <span className='font-bold'>Feeling Lost</span> And Not Knowing The Way?</Title>
            <p className='text-white'>Starting from the anxiety of the climbers when visiting a new climbing location, the possibility of getting lost is very large. That's why we are here for those of you who want to start an adventure</p>
              <Image className='absolute right-10 bottom-32' src={'/quote.svg'} width={200} height={200} alt='quotes'></Image>
        </div>
        </div>
    </section>
  )
}

export default Camping