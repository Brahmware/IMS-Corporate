import React from 'react'
import CategoryOfPeopleTabsCarouselContainer from '../../common/category-of-people-tabs-carousel-container'

/* Importing Data File */
import TeamsData from '../../../data/teams.json'

const OurLeadershipContainerTwo = () => {
  return (
    <div className='our-leasership-container-3 section-with-padding'>
      <CategoryOfPeopleTabsCarouselContainer title={"MEET THE MINDS"} data={TeamsData} />
    </div>
  )
}

export default OurLeadershipContainerTwo