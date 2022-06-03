import React from 'react'
import OpeningsCarouselContainer from '../../common/openings-carousel-container'

const InternshipsContainer = ({ data }) => {
  return (
    <div className='section-with-padding white-background'>
        <div className="internships-container">
          {
            data.map((brand, key) => {
              return (
                <React.Fragment key={key}>
                  <OpeningsCarouselContainer data={brand} title={"INTERNSHIP OPPORTUNITIES"} />
                </React.Fragment>
              )
            })
          }
        </div>
    </div>
  )
}

export default InternshipsContainer