import React from 'react'
import CorporateAndFoundationContainerOne from '../../../containers/corporate-and-foundation/container-1'
import CorporateAndFoundationContainerTwo from '../../../containers/corporate-and-foundation/container-2'
import CorporateAndFoundationContainerThree from '../../../containers/corporate-and-foundation/container-3'
import CorporateAndFoundationContainerFour from '../../../containers/corporate-and-foundation/container-4'

const CorporateAndFoundations = ({ data }) => {

    const dataContainer1 = data && data.find(data => data.id === 'container_1').elements;
    const dataContainer2 = data && data.find(data => data.id === 'container_2').elements;
    const dataContainer3 = data && data.find(data => data.id === 'container_3').elements;
    const dataContainer4 = data && data.find(data => data.id === 'container_4').elements;
    return (
        <div className="corporate-and-foundations-page">
            <CorporateAndFoundationContainerOne data={dataContainer1} />
            <CorporateAndFoundationContainerTwo data={dataContainer2} />
            <CorporateAndFoundationContainerThree data={dataContainer3} />
            <CorporateAndFoundationContainerFour data={dataContainer4} />
        </div>
    )
}

export default CorporateAndFoundations