import React from 'react'
import InvestorsContainerOne from '../../../containers/investors/container-1'
import InvestorsContainerTwo from '../../../containers/investors/container-2'
import InvestorsContainerThree from '../../../containers/investors/container-3'
import InvestorsContainerFour from '../../../containers/investors/container-4'

const Investors = ({ data }) => {
    const dataContainer1 = data && data.find(data => data.id === 'container_1').elements;
    const dataContainer2 = data && data.find(data => data.id === 'container_2').elements;
    const dataContainer3 = data && data.find(data => data.id === 'container_3').elements;
    const dataContainer4 = data && data.find(data => data.id === 'container_4').elements;
    return (
        <div className="investors-page">
            <InvestorsContainerOne data={dataContainer1} />
            <InvestorsContainerTwo data={dataContainer2} />
            <InvestorsContainerThree data={dataContainer3} />
            <InvestorsContainerFour data={dataContainer4} />
        </div>
    )
}

export default Investors