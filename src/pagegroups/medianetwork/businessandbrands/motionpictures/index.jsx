import React from 'react'
// import MotionPicturesContainerOne from './container-1'
import MotionPicturesContainerOne from '../../../../containers/motion-pictures/container-1'
import MotionPicturesContainerTwo from '../../../../containers/motion-pictures/container-2'
import MotionPicturesContainerThree from '../../../../containers/motion-pictures/container-3'

const MotionPictures = ({ data }) => {
  const dataContainer1 = data && data.find(data => data.id === 'container_1').elements
    const dataContainer2 = data && data.find(data => data.id === 'container_2').elements
    const dataContainer3 = data && data.find(data => data.id === 'container_3').elements
  return (
    <>
      <MotionPicturesContainerOne data={dataContainer1} />
      <MotionPicturesContainerTwo data={dataContainer2} />
      <MotionPicturesContainerThree data={dataContainer3} />
    </>
  )
}

export default MotionPictures