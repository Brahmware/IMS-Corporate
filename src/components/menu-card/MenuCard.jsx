import React, { useState } from 'react'
import MenuCardContent from '../menu-card-content/MenuCardContent'
import MenuCardTab from '../menu-card-tab/MenuCardTab'

const MenuCard = (props) => {
  const [activetab, setactivetab] = useState(1)
  return (
    <div className="menu-card">
      <div className='center-aligned-card'>
        <div
          className="title menu-card-heading"
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
      <div className="menu-card-tab-content d-flex pt-5">
        <div
          className="d-flex flex-column tab-column"
          data-aos='fade-right'
          data-aos-duration='600'
          data-aos-delay='600'
        >
          {
            (props.tabs).map((tab, key) => {
              return (
                <React.Fragment key={key}>
                  <MenuCardTab
                    id={key + 1}
                    setactivetab={setactivetab}
                    tabdata={tab}
                    active={activetab === (key + 1) ? true : false}
                  />

                </React.Fragment>
              )
            })
          }
        </div>
        <div
          className="m-1 menu-card-content"
          data-aos='fade-left'
          data-aos-duration='600'
          data-aos-delay='900'
        >
          <MenuCardContent card={props.cards[activetab - 1]} />
        </div>
      </div>
    </div>
  )
}

export default MenuCard
