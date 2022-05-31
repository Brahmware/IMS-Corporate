import React from 'react'
import NewsCards from '../../../components/news-cards';

const NewsRoomContainerFour = ({ data }) => {
  const cardsData = data[0].cards;
  return (
    <>
      <div className={`newsroom-container-4 seciton-with-padding white-background py-3`}>
        <div className='py-5 container'>
          <div className=" row row-cols-1 row-cols-md-3 g-5">
            {
              cardsData.map((cardData, key) => {
                return (
                  <React.Fragment key={key} >
                    <NewsCards data={cardData} />
                  </React.Fragment>
                )
              })
            }
          </div>
        </div>
      </div>
    </>
  )
}

export default NewsRoomContainerFour