import React from 'react';
import { Button } from 'reactstrap';

const LiveButton = () => {
  return (
    <Button className='live-button'>
        <div className="dot"/> 
        <span>LIVE</span>
    </Button>
  )
}

export default LiveButton;