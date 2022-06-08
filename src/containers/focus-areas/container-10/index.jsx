import React from 'react'
import CategoryOfPeopleTabsCarouselContainer from '../../common/category-of-people-tabs-carousel-container'

/* Importing Data File */
import Data from '../../../data/explorers.json'

const FocusAreasContainerTen = () => {
    const ExplorersData= Data && Data.find(data => data.type === 'education').elements;
    return (
        <div className='become-a-member-container-10 section-with-padding'>
            <CategoryOfPeopleTabsCarouselContainer title={"MEET THE EDUCATION EXPLORERS"} data={ExplorersData} buttontext={"EXPLORE"} />
        </div>
    )
}

export default FocusAreasContainerTen