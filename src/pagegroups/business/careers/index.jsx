import React from 'react'
import CareersBannerContainer from '../../../containers/careers/banner-container'
import InternshipsContainer from '../../../containers/careers/internships-container'
import JobsContainer from '../../../containers/careers/jobs-container'
import LocationSelectionContainer from '../../../containers/careers/location-selection-container'
import CareerData from '../../../data/careers.json'
import OpenPOsitionsData from '../../../data/open-positions.json'

const Careers = () => {

  const taglineData = CareerData.find(datum => datum.id === 'tagline')
  const careersBannerData = CareerData.find(datum => datum.id === 'banner')['elements']
  const JobsData = OpenPOsitionsData.find(data => data.openingtype === 'job')['brands']
  const InternshipsData = OpenPOsitionsData.find(data => data.openingtype === 'internship')['brands']
 

  return (
    <div className='careers-page'>
      <LocationSelectionContainer taglineblob={taglineData} />
      <JobsContainer data={JobsData}/>
      <CareersBannerContainer data={careersBannerData} />
      <InternshipsContainer data={InternshipsData}/>
    </div>
  )
}

export default Careers