import React from 'react'
import NewsRoomContainerTwo from '../../../containers/newsroom/container-2'
import NewsRoomContainerThree from '../../../containers/newsroom/container-3'
import NewsRoomContainerFour from '../../../containers/newsroom/container-4'

const NewsRoom = ({data}) => {
  const dataContainer2 = data && data.find(data => data.id === 'container_2').elements
  const dataContainer3 = data && data.find(data => data.id === 'container_3').elements
  const dataContainer4 = data && data.find(data => data.id === 'container_4').elements
  console.log(dataContainer2);
  return (
    <>
      <NewsRoomContainerTwo data={dataContainer2} /> 
      <NewsRoomContainerThree data={dataContainer3} /> 
      <NewsRoomContainerFour data={dataContainer4} /> 
    </>
  )
}

export default NewsRoom