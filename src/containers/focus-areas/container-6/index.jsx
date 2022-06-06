import React from 'react'
import CategoryOfPeopleTabsCarouselContainer from '../../common/category-of-people-tabs-carousel-container'

/* Importing Data File */
import TeamsData from '../../../data/teams.json'

const FocusAreasContainerSix = () => {
  return (
    <div className='become-a-member-container-6 section-with-padding'>
      <CategoryOfPeopleTabsCarouselContainer title={"MEET THE MINDS"} data={TeamsData} buttontext={"EXPLORE"} />
    </div>
  )
}

export default FocusAreasContainerSix