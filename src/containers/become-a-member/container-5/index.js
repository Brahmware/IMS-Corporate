import React from 'react'
import MenuCard from '../../../components/menu-card/MenuCard';

const BecomeAMemberFive = ({data}) => {
  const titledata = data[0].title
  const cardsdata = data[1].cards
  const tabsdata = data[2].tabs
  return (
    <>
        <div className="becomeamember-container-5 section-with-padding white-background">
            <div className="container">
                <MenuCard
                    title={titledata}
                    cards={cardsdata}
                    tabs={tabsdata}
                />
            </div>
        </div>
    </>
  )
}

export default BecomeAMemberFive