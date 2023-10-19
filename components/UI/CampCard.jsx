import Image from 'next/image'
import React from 'react'


function CampCard({title,location,img}) {
  return (
    <div className=' rounded-3xl overflow-hidden scroll-smooth relative max-sm:min-w-[500px] max-sm:min-h-[300px] sm:min-h-[300px] md:min-w-[800px] sm:min-w-[500px] lg:min-w-[1100px]'>
          <div className='flex space-x-4 absolute top-8 left-8'>
            <span className='bg-green-500 rounded-full p-3'><Image src={'./folded-map.svg'} width={30} height={30} alt='folded map' ></Image></span>
            <div className='text-white'>
            <h1 className='font-bold'>{title}</h1>
            <p>{location}</p>
            </div>
          </div>
          <Image src={`/${img}`} width={1000} height={1000} className=' w-full h-full' alt='camp-img1'></Image>
          <div className='absolute bottom-8 left-8  flex items-center space-x-4'>
            <span className='flex space-x-[-15px]'>
            <Image src={'/person-1.png'} width={40} height={40} alt='person pic'></Image>
            <Image src={'/person-2.png'} width={40} height={40} alt='person pic'></Image>
            <Image src={'/person-3.png'} width={40} height={40} alt='person pic'></Image>
            <Image src={'/person-4.png'} width={40} height={40} alt='person pic'></Image>
            </span>
             
            <span className='font-bold text-white'>50+ Joined</span>
          </div>
        </div>
  )
}

export default CampCard