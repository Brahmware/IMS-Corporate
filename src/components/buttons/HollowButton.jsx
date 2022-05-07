import React from 'react'
import { Button } from 'reactstrap'

const HollowButton = (props) => {
  return (
    <Button className={`hollow-button ${props.class}`}>
        <span>{props.text}</span>
    </Button>
  )
}

export default HollowButton;