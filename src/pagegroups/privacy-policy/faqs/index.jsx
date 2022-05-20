import React from 'react'
import FrequentlyAskedQuestion from "../../../containers/common/faqs"

const Faqs = (props) => {
  return (
    <div className="frequently-asked-question-section white-background"
      data-aos='fade-right'
      data-aos-duration='600'
      data-aos-delay='600'>
      <FrequentlyAskedQuestion data={ props}/>
    </div>
  )
}

export default Faqs