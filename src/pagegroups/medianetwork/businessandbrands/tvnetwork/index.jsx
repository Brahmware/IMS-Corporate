import React from 'react'
import TVNetworkContainerOne from '../../../../containers/tv-network/container-1'
import TVNetworkContainerTwo from '../../../../containers/tv-network/container-2'
import TVNetworkContainerThree from '../../../../containers/tv-network/container-3'
import TVNetworkContainerFour from '../../../../containers/tv-network/container-4'
import TVNetworkContainerFive from '../../../../containers/tv-network/container-5'
import TVNetworkContainerSix from '../../../../containers/tv-network/container-6'
import TVNetworkContainerSeven from '../../../../containers/tv-network/container-7'


const TVNetwork = ({ data }) => {

    const dataContainer1 = data && data.find(data => data.id === 'container_1').elements
    const dataContainer2 = data && data.find(data => data.id === 'container_2').elements
    const dataContainer3 = data && data.find(data => data.id === 'container_3').elements
    const dataContainer4 = data && data.find(data => data.id === 'container_4').elements
    const dataContainer5 = data && data.find(data => data.id === 'container_5').elements
    const dataContainer6 = data && data.find(data => data.id === 'container_6').elements
    const dataContainer7 = data && data.find(data => data.id === 'container_7').elements

    return (
        <div className='tvnetwork-page'>
            <TVNetworkContainerOne data={dataContainer1} />
            <TVNetworkContainerTwo data={dataContainer2} />
            <TVNetworkContainerThree data={dataContainer3} />
            <TVNetworkContainerFour data={dataContainer4} />
            <TVNetworkContainerFive data={dataContainer5} />
            <TVNetworkContainerSix data={dataContainer6} />
            <TVNetworkContainerSeven data={dataContainer7} />
        </div>
    )
}

export default TVNetwork