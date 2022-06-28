import React from 'react'
// import MotionPicturesContainerOne from './container-1'
import MotionPicturesContainerTwo from './container-2'

const MotionPictures = ({ data }) => {
  const dataContainer1 = data && data.find(data => data.id === 'container_1').elements
    const dataContainer2 = data && data.find(data => data.id === 'container_2').elements
    console.log(dataContainer2)
  return (
    <>
      {/* <MotionPicturesContainerOne data={dataContainer1} /> */}
      <MotionPicturesContainerTwo data={dataContainer2} />
    </>
  )
}

export default MotionPictures