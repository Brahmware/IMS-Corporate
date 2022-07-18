import React from 'react'
import StudioOperationsContainerOne from '../../../../containers/studio-operations/container-1'
import StudioOperationsContainerTwo from '../../../../containers/studio-operations/container-2'
import StudioOperationsContainerThree from '../../../../containers/studio-operations/container-3'
import StudioOperationsContainerFour from '../../../../containers/studio-operations/container-4'
import StudioOperationsContainerFive from '../../../../containers/studio-operations/container-5'

const StudioOperations = ({ data }) => {
  const dataContainer1 = data && data.find(data => data.id === 'container_1').elements
  const dataContainer2 = data && data.find(data => data.id === 'container_2').elements
  const dataContainer3 = data && data.find(data => data.id === 'container_3').elements
  const dataContainer4 = data && data.find(data => data.id === 'container_4').elements
  const dataContainer5 = data && data.find(data => data.id === 'container_5').elements
  return (
    <>
      <StudioOperationsContainerOne data={dataContainer1} />
      <StudioOperationsContainerTwo data={dataContainer2} />
      <StudioOperationsContainerThree data={dataContainer3} />
      <StudioOperationsContainerFour data={dataContainer4} />
      <StudioOperationsContainerFive data={dataContainer5} />
    </>
  )
}

export default StudioOperations