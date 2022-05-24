import React from 'react'
import CareersBannerContainer from '../../../containers/careers/banner-container'
import InternshipsContainer from '../../../containers/careers/internships-container'
import JobsContainer from '../../../containers/careers/jobs-container'
import LocationSelectionContainer from '../../../containers/careers/location-selection-container'
import CareerData from '../../../data/careers.json'

const Careers = () => {

  const taglineData = CareerData.find(datum => datum.id === 'tagline')
  const careersBannerData = CareerData.find(datum => datum.id === 'banner')['elements']
  return (
    <div className='careers-page'>
      <LocationSelectionContainer taglineblob={taglineData} />
      <JobsContainer />
      <CareersBannerContainer data={careersBannerData} />
      <InternshipsContainer />
    </div>
  )
}

export default Careers