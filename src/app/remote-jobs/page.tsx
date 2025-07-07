import React from 'react'
import Banner from './Banner'
import WhyremoteJobs from './WhyremoteJobs'
import PopularCategory from './PopularCategory'
import SuccessStories from './SuccessStories'
import HelpfulResources from './Resources'

const page = () => {
  return (
    <main>
        <Banner/>
        <WhyremoteJobs/>
        <PopularCategory/>
        <SuccessStories/>
        <HelpfulResources/>
    </main>
  )
}

export default page