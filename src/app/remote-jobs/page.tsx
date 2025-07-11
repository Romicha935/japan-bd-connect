import React from 'react'
import Banner from './Banner'
import WhyremoteJobs from './WhyremoteJobs'
import PopularCategory from './PopularCategory'
import SuccessStories from './SuccessStories'

import PrivateRoute from '../route/PrivateRoute'

const page = () => {
  return (
   <PrivateRoute>
     <main>
        <Banner/>
        <WhyremoteJobs/>
        <PopularCategory/>
        <SuccessStories/>
        {/* <HelpfulResources/> */}
    </main>
   </PrivateRoute>
  )
}

export default page