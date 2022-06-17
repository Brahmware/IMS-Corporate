import React from 'react'
import InvestorsContainerOne from '../../../containers/investors/container-1'
import InvestorsContainerTwo from '../../../containers/investors/container-2'
import InvestorsContainerThree from '../../../containers/investors/container-3'
import InvestorsContainerFive from '../../../containers/investors/container-5'
import InvestorsContainerFour from '../../../containers/investors/container-4'

const Investors = ({ data }) => {
    const dataContainer1 = data && data.find(data => data.id === 'container_1').elements;
    const dataContainer2 = data && data.find(data => data.id === 'container_2').elements;
    // const dataContainer3 = data && data.find(data => data.id === 'container_3').elements;
    const dataContainer4 = data && data.find(data => data.id === 'container_4').elements;
    const dataContainer5 = data && data.find(data => data.id === 'container_5').elements;
    return (
        <div className="investors-page">
            <InvestorsContainerOne data={dataContainer1} />
            <InvestorsContainerTwo data={dataContainer2} />
            <InvestorsContainerThree data={""} />
            <InvestorsContainerFour data={dataContainer4} />
            <InvestorsContainerFive data={dataContainer5} />
        </div>
    )
}

export default Investors