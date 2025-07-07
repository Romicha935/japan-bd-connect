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

const page = () => {
  return (
    <main>
        <Banner/>
        <EducationOverview/>
        <StudyInJapan/>
        <JapanessLearning/>
        <ScholarshipInJapan/>
        <EduCategory/>
        <TestimonialsSlider/>
        <FAQ/>
        {/* <Gallery/> */}
        {/* <StepByStepTimeline/> */}
    </main>
  )
}

export default page