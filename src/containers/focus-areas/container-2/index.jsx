import React from 'react'
import CategoryOfPeopleTabsCarouselContainer from '../../common/category-of-people-tabs-carousel-container'

/* Importing Data File */
import Data from '../../../data/explorers.json'

const FocusAreasContainerTwo = () => {
    const ExplorersData = Data && Data.find(data => data.type === 'networking').elements;
    return (
        <div className='become-a-member-container-2 section-with-padding'>
            <CategoryOfPeopleTabsCarouselContainer title={`MEET THE NETWORKING EXPLORERS`} data={ExplorersData} buttontext={"EXPLORE"} />
        </div>
    )
}

export default FocusAreasContainerTwo