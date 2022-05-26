import React, { useState } from 'react'
import MenuCardContent from '../menu-card-content/MenuCardContent'
import MenuCardTab from '../menu-card-tab/MenuCardTab'

const MenuCard = (props) => {
  const [activetab, setactivetab] = useState(1)
  return (
    <div className="menu-card-container-5-heading">
      <div className='center-aligned-card'>
        <div
          className="title"
          data-aos='fade-up'
          data-aos-duration='600'
          data-aos-delay='300'
        >
          <span
            dangerouslySetInnerHTML={{
              __html: props.title
            }}
          />
        </div>
      </div>
      <div className="menu-card-container-5-tab-content d-flex pt-5">
        <div className="d-flex flex-column tab-column">
          <MenuCardTab id={1} setactivetab={setactivetab} tabdata={props.tabs[0]} active={activetab === 1 ? true : false} />
          <MenuCardTab id={2} setactivetab={setactivetab} tabdata={props.tabs[1]} active={activetab === 2 ? true : false} />
          <MenuCardTab id={3} setactivetab={setactivetab} tabdata={props.tabs[2]} active={activetab === 3 ? true : false} />
        </div>
        <div className="m-1 menu-card-container-5-content">
          <MenuCardContent card={props.cards[activetab - 1]} />
        </div>
      </div>
    </div>
  )
}

export default MenuCard
