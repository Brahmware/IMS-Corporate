import React from 'react'
import MenuCard from '../../../components/menu-card/MenuCard';

const BecomeAMemberTwo = ({data}) => {
  const titleData = data[0].title
  const cardsData = data[1].cards
  const tabsdData = data[2].tabs
  return (
    <>
        <div className="becomeamember-container-2 section-with-padding white-background ">
            <div className="container">
                <MenuCard
                    title={titleData}
                    cards={cardsData}
                    tabs={tabsdData}
                />
            </div>
        </div>
    </>
  )
}

export default BecomeAMemberTwo