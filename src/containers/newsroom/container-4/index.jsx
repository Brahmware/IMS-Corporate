import React, { useState } from 'react'
import NewsCards from '../../../components/news-cards';
import InfiniteScroll from "react-infinite-scroll-component";
import Spinner from '../../../components/spinner'; // Spinner design can be change its a tempory gif

const NewsRoomContainerFour = ({ data }) => {
  const cardsData = data;
  const totalData = data.length;
  const [currentData, setcurrentData] = useState([]);

  const fetchMoreData = () => {
    setTimeout(() => {
      setcurrentData([...currentData, ...cardsData.slice(currentData.length, currentData.length + 6)])
    }, 1000)  // I have set time out to 1 sec this can be removed this is just to show that infinite scroll is working fine
  };
  return (
    <>
      <div className={`newsroom-container-4 seciton-with-padding white-background py-3`}>
        <InfiniteScroll
          dataLength={currentData.length}
          next={fetchMoreData}
          hasMore={currentData.length < totalData}
          loader={<Spinner />}
        >
          <div className='py-5 container'>
            <div className=" row row-cols-1 row-cols-md-3 g-5">
              {
                currentData.map((cardData, key) => {
                  return (
                    <React.Fragment key={key} >
                      <NewsCards data={cardData} />
                    </React.Fragment>
                  )
                })
              }
            </div>
          </div>
        </InfiniteScroll>
      </div>
    </>
  )
}

export default NewsRoomContainerFour