import React from 'react'
import HeroSection from './HeroSection'
import WhyChoose from './WhyChoose'
import MakeItYourOwnLanding from './MakeItYourOwnLanding'

export default function HomeComponent() {
  return (
    <main className=''>
      <HeroSection />
      <WhyChoose />
      <MakeItYourOwnLanding/>
    </main>
  )
}
