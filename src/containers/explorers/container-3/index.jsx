import React from 'react'
import CategoryOfPeopleTabsCarouselContainer from '../../common/category-of-people-tabs-carousel-container'

/* Importing the Data */
import Data from '../../../data/explorers.json'

const ExplorersContainerThree = () => {
    const ExplorersData = Data && Data.find(data => data.type === 'popular').elements;
    return (
        <div className='explorers-container-3 section-with-padding'>
            <CategoryOfPeopleTabsCarouselContainer title={"MEET THE EXPLORERS"} data={ExplorersData} buttontext={"MEET ALL"} />
        </div>
    )
}

export default ExplorersContainerThree