import React from 'react';

const CopyrightComponent = () => {
    const date = new Date();
  return (
    <div className='copyright-component'>
        &copy; <span>{date.getFullYear()} Indian Media Syndicate. All rights reserved.</span>
    </div>
  )
}

export default CopyrightComponent