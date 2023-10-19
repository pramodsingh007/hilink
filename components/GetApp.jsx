import React from 'react'
import Button from './UI/Button'
import Image from 'next/image'
import DownloadBtn from './UI/DownloadBtn'

function GetApp() {
  return (
    <section className=' grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-2 max-sm:grid-cols-1 bg-gray-900 lg:pr-20 lg:mr-20 lg:ml-20 lg:pl-20 sm:pr-8   sm:pl-8 max-sm:pr-8  rounded-3xl pt-10 max-sm:pl-8 lg:max-h-[600px] sm:max-h-full max-sm:max-h-full gap-12 max-sm:justify-center '>
      <div>
      <div>
      <h1 className='lg:text-7xl sm:text-5xl max-sm:text-5xl font-bold  mb-10 text-white'>Get for free now!</h1>
      <p className='text-white mb-10'>Available on IOS and Android</p>
      <DownloadBtn className={'bg-white mb-4'}><Image src={'./apple.svg'} className='mr-1' width={30} height={30} alt='apple' />Apple Store</DownloadBtn>
      <DownloadBtn className={' bg-transparent border border-zinc-300'}><Image src={'./android.svg'} className='mr-1' width={30} height={30} alt='playstore' />Play Store</DownloadBtn>
      </div>
      </div>
      <div>
        <Image src={'/phones.png'} height={800} width={500} alt='phones' />
      </div>
    </section>
  )
}

export default GetApp