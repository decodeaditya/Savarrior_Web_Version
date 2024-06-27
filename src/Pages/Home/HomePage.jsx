import React from 'react'
import HeroSection from './Hero'
import Rescues from './Rescues'
import Join from './Join'
import Agencies from './Agencies'
import { Helmet } from 'react-helmet'
import DownloadApp from './DownloadApp'

const HomePage = ({ url }) => {
  return (
    <>
      <Helmet>
        <title>{url}</title>
      </Helmet>
      <HeroSection />
      <DownloadApp/>
      <Rescues />
      <Join />
      <Agencies />
    </>
  )
}

export default HomePage