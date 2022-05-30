import React, { useState, useEffect } from 'react'
import FrequentlyAskedQuestion from "../../../containers/common/faqs"

const Faqs = (props) => {
  const [item, setItem] = useState(props.data);
  const [pages,setPages]=useState(5)
  useEffect(() => {
    setItem(i=>i.slice(0, 5))
  }, [])

  const displayItem = (event) => {
    let value = parseInt(event.target.innerHTML);
    let productValue = props.data.filter((arr, index) => {
      return (value > index ? value : arr)
    })
    setPages(value)
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
        <FrequentlyAskedQuestion datas={item} allData={props.data} page={ pages} onSort={displayItem} />
      </div>
    </div>
  )
}

export default Faqs