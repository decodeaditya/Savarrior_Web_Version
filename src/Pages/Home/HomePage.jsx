import React from 'react'
import HeroSection from './Hero'
import Rescues from './Rescues'
import Join from './Join'
import Agencies from './Agencies'

const HomePage = ({RescuesList,AgencyList}) => {
  return (
    <>
    <HeroSection/>
    <Rescues RescuesList={RescuesList}/>
    <Join/>
    <Agencies ngos={AgencyList}/>
    </>
  )
}

export default HomePage