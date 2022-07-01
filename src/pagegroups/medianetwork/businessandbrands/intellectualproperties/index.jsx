import React from 'react'
import IntellectualPropertiesContainerOne from '../../../../containers/intellectual-properties/container-1'
import IntellectualPropertiesContainerTwo from '../../../../containers/intellectual-properties/container-2'
import IntellectualPropertiesContainerThree from '../../../../containers/intellectual-properties/container-3'
import IntellectualPropertiesContainerFour from '../../../../containers/intellectual-properties/container-4'
import IntellectualPropertiesContainerFive from '../../../../containers/intellectual-properties/container-5'

const IntellectualProperties = ({ data }) => {
  const dataContainer1 = data && data.find(data => data.id === 'container_1').elements
  const dataContainer2 = data && data.find(data => data.id === 'container_2').elements
  const dataContainer3 = data && data.find(data => data.id === 'container_3').elements
  const dataContainer4 = data && data.find(data => data.id === 'container_4').elements
  const dataContainer5 = data && data.find(data => data.id === 'container_5').elements
  return (
    <>
      <IntellectualPropertiesContainerOne data={dataContainer1} />
      <IntellectualPropertiesContainerTwo data={dataContainer2} />
      <IntellectualPropertiesContainerThree data={dataContainer3} />
      <IntellectualPropertiesContainerFour data={dataContainer4} />
      <IntellectualPropertiesContainerFive data={dataContainer5} />
    </>
  )
}

export default IntellectualProperties