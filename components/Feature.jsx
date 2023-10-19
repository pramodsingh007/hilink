import React from 'react'
import Title from './UI/Title'
import Image from 'next/image'
import FeatureCard from './FeatureCard'

function Feature() {
  return (
    <section className='sm:mr-8 max-sm:mr-8 max-sm:ml-8 sm:ml-8 lg:mr-20 lg:ml-20 bg-hero-bg.svg lg:grid-cols-2 sm:grid-cols-1 max-sm:grid-cols-1 mb-40'>
        
      <div className='text-center flex justify-center'>
        <div>
        <Image  src={'/camp.svg'} width={50} height={50} ></Image>
        <h1 className='lg:text-7xl sm:text-5xl max-sm:text-5xl font-bold  mb-20 mt-0'>Our Features</h1>
        </div>
      </div>
      <div className='lg:grid lg:grid-cols-2 '>
        <Image className=' hidden lg:flex max-w-md rotate-12 translate-x-[-8rem] max-h-full' src={'/phone.png'} width={800} height={800} alt='phone'></Image>
        <div className='grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 max-sm:grid-cols-1 gap-8'>
          <FeatureCard img={'/map.svg'} title={'Real Maps Can Be Offline'} content={'We provide a solution for you to be able to use our application when climbing, yes offline maps you can use at any time there is no signal at the location'}/>
          <FeatureCard img={'/calendar.svg'} title={'Real Maps Can Be Offline'} content={'We provide a solution for you to be able to use our application when climbing, yes offline maps you can use at any time there is no signal at the location'}/>
          <FeatureCard img={'/tech.svg'} title={'Real Maps Can Be Offline'} content={'We provide a solution for you to be able to use our application when climbing, yes offline maps you can use at any time there is no signal at the location'}/>
          <FeatureCard img={'/location.svg'} title={'Real Maps Can Be Offline'} content={'We provide a solution for you to be able to use our application when climbing, yes offline maps you can use at any time there is no signal at the location'}/>
          
        </div>
      </div>
    
    </section>
  )
}

export default Feature