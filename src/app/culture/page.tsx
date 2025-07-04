import React from 'react'
import Banner from './Banner'
// import Food from './Food'
// import Flag from './Flag'
import CultureCategoried from './CultureCategoried'
import BDPlace from './touristPlace/BDPlace'

const page = () => {
  return (
    <main>
        <Banner/>
        {/* <Flag/>
        <Food/> */}
        <CultureCategoried/>
        <BDPlace/>
    </main>
  )
}

export default page