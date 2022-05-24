import React, { useState, useEffect } from 'react'
import FrequentlyAskedQuestion from "../../../containers/common/faqs"
import Pagination from '../../../containers/common/pagination'

const Faqs = (props) => {
  const [item, setItem] = useState(props.data);
  useEffect(() => {
    setItem(item.slice(0, 5))
  }, [])

  const displayItem = (event) => {
    let value = parseInt(event.target.innerHTML);
    let productValue = props.data.filter((arr, index) => {
      return (value > index ? value : arr)
    })
    setItem(productValue.slice(0, value));
  }
  return (
    <div 
      className="frequently-asked-question-section white-background"
      data-aos='fade-right'
      data-aos-duration='600'
      data-aos-delay='600'
    >
      <div className="container">
        <Pagination data={item} onSort={displayItem} />
        <FrequentlyAskedQuestion data={item} />
        <Pagination data={item} onSort={displayItem} />
      </div>
    </div>
  )
}

export default Faqs