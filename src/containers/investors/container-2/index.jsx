import React from 'react'
import NewsCards from '../../../components/news-cards';

const InvestorsContainerTwo = ({data}) => {
  const cardsData = data[0].cards
  return (
    <React.Fragment>
      <div className={`newsroom-container-2 seciton-with-padding white-background py-3`}>
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
    </React.Fragment>
  )
}

export default InvestorsContainerTwo