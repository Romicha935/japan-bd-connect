import React from 'react'
import Banner from './Banner'
import FocusAreas from './FocusAreas'
import Collaboration from './Collaboration'
import SuccessStorys from './SuccessStorys'
import Partnership from './Partnership'
import Inovation from './Inovation'
import Opportunitis from './Opportunitis'
import TechEvents from './TechEvents'

const page = () => {
  return (
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
  )
}

export default page