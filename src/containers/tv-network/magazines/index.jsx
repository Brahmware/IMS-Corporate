import React from 'react'
import MagazinesContainerOne from './container-1'
import MagazinesContainerTwo from './container-2'
import MagazinesContainerThree from './container-3'
import MagazinesContainerFour from './container-4'
import MagazinesContainerFive from './container-5'
import MagazinesContainerSix from './container-6'
import MagazinesContainerSeven from './container-7'
import MagazinesContainerEight from './container-8'

const Magazines = ({ data }) => {
  const dataContainer1 = data && data.find(data => data.id === 'container_1').elements
  const dataContainer2 = data && data.find(data => data.id === 'container_2').elements
  const dataContainer3 = data && data.find(data => data.id === 'container_3').elements
  const dataContainer4 = data && data.find(data => data.id === 'container_4').elements
  const dataContainer5 = data && data.find(data => data.id === 'container_5').elements
  const dataContainer6 = data && data.find(data => data.id === 'container_6').elements
  const dataContainer7 = data && data.find(data => data.id === 'container_7').elements
  const dataContainer8 = data && data.find(data => data.id === 'container_8').elements
  return (
    <>
      <MagazinesContainerOne data={dataContainer1} />
      <MagazinesContainerTwo data={dataContainer2} />
      <MagazinesContainerThree data={dataContainer3} />
      <MagazinesContainerFour data={dataContainer4} />
      <MagazinesContainerFive data={dataContainer5} />
      <MagazinesContainerSix data={dataContainer6} />
      <MagazinesContainerSeven data={dataContainer7} />
      <MagazinesContainerEight data={dataContainer8} />
    </>
  )
}

export default Magazines