import Image from 'next/image'
import React from 'react'

function Stars() {
  return (
    <div className='flex'>
    <Image src={'star.svg'} width={20} height={20}></Image>
    <Image src={'star.svg'} width={20} height={20}></Image>
    <Image src={'star.svg'} width={20} height={20}></Image>
    <Image src={'star.svg'} width={20} height={20}></Image>
    </div>
  )
}

export default Stars