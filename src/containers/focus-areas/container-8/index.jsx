import React from 'react'
import CategoryOfPeopleTabsCarouselContainer from '../../common/category-of-people-tabs-carousel-container'

/* Importing Data File */
import Data from '../../../data/explorers.json'

const FocusAreasContainerEight = () => {
    const ExplorersData= Data && Data.find(data => data.type === 'humans-past').elements;
    return (
        <div className='become-a-member-container-8 section-with-padding'>
            <CategoryOfPeopleTabsCarouselContainer title={"MEET THE HUMAN'S PAST EXPLORERS"} data={ExplorersData} buttontext={"EXPLORE"} />
        </div>
    )
}

export default FocusAreasContainerEight