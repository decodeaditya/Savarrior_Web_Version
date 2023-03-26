import React from 'react'
import HeroSection from './Hero'
import Rescues from './Rescues'
import Join from './Join'
import Agencies from './Agencies'
import { Helmet } from 'react-helmet'

const HomePage = ({ url }) => {
  return (
    <>
      <Helmet>
        <title>{url}</title>
      </Helmet>
      <HeroSection />
      <Rescues />
      <Join />
      <Agencies />
    </>
  )
}

export default HomePage