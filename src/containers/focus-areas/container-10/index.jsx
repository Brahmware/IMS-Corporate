import React from 'react'
import CategoryOfPeopleTabsCarouselContainer from '../../common/category-of-people-tabs-carousel-container'

/* Importing Data File */
import TeamsData from '../../../data/teams.json'

const FocusAreasContainerTen = () => {
  return (
    <div className='become-a-member-container-10 section-with-padding'>
      <CategoryOfPeopleTabsCarouselContainer title={"MEET THE MINDS"} data={TeamsData} />
    </div>
  )
}

export default FocusAreasContainerTen