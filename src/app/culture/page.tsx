import React from 'react'
import Banner from './Banner'
// import Food from './Food'
// import Flag from './Flag'
import CultureCategoried from './CultureCategoried'
import BDPlace from './BDPlace'
import JapanPlace from './touristPlace/JapanPlace'
import PrivateRoute from '../route/PrivateRoute'

const page = () => {
  return (
   <PrivateRoute>
     <main>
        <Banner/>
        {/* <Flag/>
        <Food/> */}
        <CultureCategoried/>
        <BDPlace/>
        <JapanPlace/>
    </main>
   </PrivateRoute>
  )
}

export default page