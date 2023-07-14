import React from 'react'
import HollowButton from '../buttons/HollowButton'
import { Link } from "react-router-dom"

const FunfactSingleColumnComponent = ({ columnKey, count, cardtitle, cardcontent, path }) => {
  return (
    <div
      className='column-card'
      data-aos='fade-up'
      data-aos-duration='600'
      data-aos-delay={300 + columnKey * 300}
    >
      <div className="count">
        <span dangerouslySetInnerHTML={{ __html: count }} />
      </div>
      <div className={"card-divider"} />
      <div className="card-title">
        <span dangerouslySetInnerHTML={{ __html: cardtitle }} />
      </div>
      <div className="card-content">
        <span dangerouslySetInnerHTML={{ __html: cardcontent }} />
      </div>
      <div className="card-button">
        <Link to={!path ? "/" : path}><HollowButton class={"gray-button"} text={"DISCOVER"} /></Link>
      </div>
    </div>
  )
}

export default FunfactSingleColumnComponent