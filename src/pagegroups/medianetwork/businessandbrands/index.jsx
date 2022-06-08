import React from 'react'
import BusinessAndBrandsContainerOne from '../../../containers/business-and-brands/container-1'
import BusinessAndBrandsContainerTwo from '../../../containers/business-and-brands/container-2'
import BusinessAndBrandsContainerThree from '../../../containers/business-and-brands/container-3'
import BusinessAndBrandsContainerFour from '../../../containers/business-and-brands/container-4'
import BusinessAndBrandsContainerFive from '../../../containers/business-and-brands/container-5'
import BusinessAndBrandsContainerSix from '../../../containers/business-and-brands/container-6'
import BusinessAndBrandsContainerSeven from '../../../containers/business-and-brands/container-7'

const BusinessAndBrands = ({ data }) => {
    const dataContainer1 = data && data.find(data => data.id === 'container_1').elements
    const dataContainer2 = data && data.find(data => data.id === 'container_2').elements
    const dataContainer3 = data && data.find(data => data.id === 'container_3').elements
    const dataContainer4 = data && data.find(data => data.id === 'container_4').elements
    const dataContainer5 = data && data.find(data => data.id === 'container_5').elements
    const dataContainer6 = data && data.find(data => data.id === 'container_6').elements
    const dataContainer7 = data && data.find(data => data.id === 'container_7').elements

    return (
        <div className="business-and-brands-page">
            <BusinessAndBrandsContainerOne data={dataContainer1} />
            <BusinessAndBrandsContainerTwo data={dataContainer2} />
            <BusinessAndBrandsContainerThree data={dataContainer3} />
            <BusinessAndBrandsContainerFour data={dataContainer4} />
            <BusinessAndBrandsContainerFive data={dataContainer5} />
            <BusinessAndBrandsContainerSix data={dataContainer6} />
            <BusinessAndBrandsContainerSeven data={dataContainer7} />
        </div>
    )
}

export default BusinessAndBrands