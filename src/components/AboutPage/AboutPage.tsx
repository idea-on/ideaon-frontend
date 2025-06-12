import React from 'react'
import AboutHero from './AboutHero'
import OurMissionInterface from './OurMissionInterface'
import TeamSection from './TeamSection'
import ValuedClientsSection from './ValuedClientsSection'
import DataHandlingFeatures from './DataHandlingFeatures'

export default function AboutPage() {
  return (
    <div>
      <AboutHero/>
      <OurMissionInterface/>
      <TeamSection/>
      <ValuedClientsSection/>
      <DataHandlingFeatures/>
    </div>
  )
}
