import React from 'react'
import { Button } from 'reactstrap'

const HollowButton = (props) => {
  return (
    <Button 
      className={`text-button ${props.class}`}
      onClick = {props.onClick}
    >
        <span>{props.text}</span>
    </Button>
  )
}

export default HollowButton;