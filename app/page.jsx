import Camping from '@/components/Camping'
import Feature from '@/components/Feature'
import GetApp from '@/components/GetApp'
import Guide from '@/components/Guide'
import Hero from '@/components/Hero'
import Image from 'next/image'

export default function Home() {
  return (<>
    <Hero/>
    <Camping/>
    <Guide/>
    <Feature/>
    <GetApp/>
  </>
  
  )
}
