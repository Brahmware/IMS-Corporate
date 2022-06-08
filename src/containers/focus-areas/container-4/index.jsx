import React from 'react'
import CategoryOfPeopleTabsCarouselContainer from '../../common/category-of-people-tabs-carousel-container'

/* Importing Data File */
import Data from '../../../data/explorers.json'

const FocusAreasContainerFour = () => {
    const ExplorersData = Data && Data.find(data => data.type === 'science').elements;
    return (
        <div className='become-a-member-container-4 section-with-padding'>
            <CategoryOfPeopleTabsCarouselContainer title={"MEET THE SCIENCE EXPLORERS"} data={ExplorersData} buttontext={"EXPLORE"} />
        </div>
    )
}

export default FocusAreasContainerFour