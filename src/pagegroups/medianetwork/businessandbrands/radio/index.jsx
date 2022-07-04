import React from 'react'
import RadioContainerOne from '../../../../containers/radio/container-1'
import RadioContainerTwo from '../../../../containers/radio/container-2'
import RadioContainerThree from '../../../../containers/radio/container-3'
import RadioContainerFour from '../../../../containers/radio/container-4'
import RadioContainerFive from '../../../../containers/radio/container-5'

const Radio = ({ data }) => {
  const dataContainer1 = data && data.find(data => data.id === 'container_1').elements
  const dataContainer2 = data && data.find(data => data.id === 'container_2').elements
  const dataContainer3 = data && data.find(data => data.id === 'container_3').elements
  const dataContainer4 = data && data.find(data => data.id === 'container_4').elements
  const dataContainer5 = data && data.find(data => data.id === 'container_5').elements
  return (
    <>
      <RadioContainerOne data={dataContainer1} />
      <RadioContainerTwo data={dataContainer2} />
      <RadioContainerThree data={dataContainer3} />
      <RadioContainerFour data={dataContainer4} />
      <RadioContainerFive data={dataContainer5} />
    </>
  )
}

export default Radio