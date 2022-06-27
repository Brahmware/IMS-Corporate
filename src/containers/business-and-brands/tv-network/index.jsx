import React from 'react'
import TvNetworkContainerOne from './container-1'
import TvNetworkContainerTwo from './container-2'
import TvNetworkContainerThree from './container-3'
import TvNetworkContainerFour from './container-4'
import TvNetworkContainerFive from './container-5'
import TvNetworkContainerSix from './container-6'
import TvNetworkContainerSeven from './container-7'

const TvNetwork = ({ data }) => {
  const dataContainer1 = data && data.find(data => data.id === 'container_1').elements
  const dataContainer2 = data && data.find(data => data.id === 'container_2').elements
  const dataContainer3 = data && data.find(data => data.id === 'container_3').elements
  const dataContainer4 = data && data.find(data => data.id === 'container_4').elements
  const dataContainer5 = data && data.find(data => data.id === 'container_5').elements
  const dataContainer6 = data && data.find(data => data.id === 'container_6').elements
  const dataContainer7 = data && data.find(data => data.id === 'container_7').elements
  return (
    <>
      <TvNetworkContainerOne data={dataContainer1} />
      <TvNetworkContainerTwo data={dataContainer2} />
      <TvNetworkContainerThree data={dataContainer3} />
      <TvNetworkContainerFour data={dataContainer4} />
      <TvNetworkContainerFive data={dataContainer5} />
      <TvNetworkContainerSix data={dataContainer6} />
      <TvNetworkContainerSeven data={dataContainer7} />
    </>
  )
}

export default TvNetwork