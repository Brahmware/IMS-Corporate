import React from 'react'
import { Button } from 'reactstrap'

const FilledButton = (props) => {
  return (
    <Button className={`filled-button ${props.class}`}>
        <span>{props.text}</span>
    </Button>
  )
}

export default FilledButton;