import React from 'react'
import { LeftarrowIcon, RightarrowIcon } from '../../../assets/icons'
import OpeningsCarouselContainer from '../../common/openings-carousel-container'

const JobsContainer = ({ data }) => {

  return (
    <div className='section-with-padding white-background'>
        <div className="jobs-container">
          {
            data.map((brand, key) => {
              return (
                <React.Fragment key={key}>
                  <OpeningsCarouselContainer data={brand} title={"JOB OPENNINGS"} />
                </React.Fragment>
              )
            })
          }
        </div>
    </div>
  )
}

export default JobsContainer