import React from 'react'

import PrivateRoute from '../route/PrivateRoute'
import Banner from '@/tech/Banner'
import FocusAreas from '@/tech/FocusAreas'
import Collaboration from '@/tech/Collaboration'
import SuccessStorys from '@/tech/SuccessStorys'
import Partnership from '@/tech/Partnership'
import Inovation from '@/tech/Inovation'
import Opportunitis from '@/tech/Opportunitis'
import TechEvents from '@/tech/TechEvents'

const page = () => {
  return (
   <PrivateRoute>
     <main>
        <Banner/>
        <FocusAreas/>
        <Collaboration/>
        <SuccessStorys/>
        <Partnership/>
        <Inovation/>
        <Opportunitis/>
        <TechEvents/>
    </main>
   </PrivateRoute>
  )
}

export default page