import React from 'react'
import CategoryOfPeopleTabsCarouselContainer from '../../common/category-of-people-tabs-carousel-container'

/* Importing Data File */
import Data from '../../../data/explorers.json'

const FocusAreasContainerSix = () => {
    const ExplorersData = Data && Data.find(data => data.type === 'environmental').elements;
    return (
        <div className='become-a-member-container-6 section-with-padding'>
            <CategoryOfPeopleTabsCarouselContainer title={"MEET THE ENVIRONMENTAL EXPLORERS"} data={ExplorersData} buttontext={"EXPLORE"} />
        </div>
    )
}

export default FocusAreasContainerSix