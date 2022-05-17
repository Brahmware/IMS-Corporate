import React from 'react'
import BusinessAndBrandsContainerOne from '../../../containers/business-and-brands/container-1'

const BusinessAndBrands = ({ data }) => {
  const dataContainer1 = data && data.find(data => data.id === 'container_1').elements
  console.log(dataContainer1)

  return (
    <div className="business-and-brands-page">
      <BusinessAndBrandsContainerOne data={ dataContainer1}/>
    </div>
  )
}

export default BusinessAndBrands