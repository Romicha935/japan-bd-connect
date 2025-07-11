import React from 'react'
import Banner from './Banner'
import EducationOverview from './EducationOverview'
import StudyInJapan from './StudyInJapan'
import JapanessLearning from './JapanessLearning'
import ScholarshipInJapan from './ScolershipInJp'

import EduCategory from './educategory/EduCategory'
import TestimonialsSlider from './TestimonialsSlider'
import FAQ from './FAQ'
import Gallery from './Gallery'
import PrivateRoute from '../route/PrivateRoute'

const page = () => {
  return (
  <PrivateRoute>
      <main>
        <Banner/>
        <EducationOverview/>
        <StudyInJapan/>
        <JapanessLearning/>
        <ScholarshipInJapan/>
        <EduCategory/>
        <TestimonialsSlider/>
        <FAQ/>
     
    </main>
  </PrivateRoute>
  )
}

export default page