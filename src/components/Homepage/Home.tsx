import React from 'react'
import HeroSection from './HeroSection'
import WhyChoose from './WhyChooseSections/WhyChoose'
import MakeItYourOwnLanding from './MakeItYourOwnLanding'
import FeaturesUI from './FeaturesUI'
import HowItWorks from './HowItWorks'

export default function HomeComponent() {
  return (
    <main className=''>
      <HeroSection />
      <WhyChoose />
      <HowItWorks/>
      <FeaturesUI/>
      <MakeItYourOwnLanding/>
          
    </main>
  )
}
