import React from 'react'
import CategoryOfPeopleTabsCarouselContainer from '../../common/category-of-people-tabs-carousel-container'

/* Importing Data File */
import TeamsData from '../../../data/teams.json'

const FocusAreasContainerTwo = () => {
    return (
        <div className='become-a-member-container-2 section-with-padding'>
            <CategoryOfPeopleTabsCarouselContainer title={"MEET THE MINDS"} data={TeamsData} buttontext={"EXPLORE"} />
        </div>
    )
}

export default FocusAreasContainerTwo