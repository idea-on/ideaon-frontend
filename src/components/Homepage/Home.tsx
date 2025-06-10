import React from 'react'
import HeroSection from './HeroSection'
import WhyChoose from './WhyChooseSections/WhyChoose'
import MakeItYourOwnLanding from './MakeItYourOwnLanding'
import Cta from '../common/Cta'

export default function HomeComponent() {
  return (
    <main className=''>
      <HeroSection />
      <WhyChoose />
      <MakeItYourOwnLanding/>
          <Cta/>
    </main>
  )
}
