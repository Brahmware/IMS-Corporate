import React from 'react'
import NewsRoomContainerOne from '../../../containers/newsroom/container-1'
import NewsRoomContainerTwo from '../../../containers/newsroom/container-2'
import NewsRoomContainerThree from '../../../containers/newsroom/container-3'
import NewsRoomContainerFour from '../../../containers/newsroom/container-4'

const NewsRoom = ({ data }) => {

    const dataContainer1 = data && data.find(data => data.id === 'container_1').elements
    const dataContainer0 = data && data.find(data => data.id === 'container_2').elements
    const dataContainer2 = dataContainer0[0].cards.splice(0, 6)
    const dataContainer3 = data && data.find(data => data.id === 'container_3').elements
    const dataContainer4 = dataContainer0[0].cards.splice(6)
    return (
        <>
            <NewsRoomContainerOne data={dataContainer1} />
            <NewsRoomContainerTwo data={dataContainer2} />
            <NewsRoomContainerThree data={dataContainer3} />
            <NewsRoomContainerFour data={dataContainer4} />
            
        </>
    )
}

export default NewsRoom