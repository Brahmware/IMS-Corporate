import React, { useState, useEffect } from 'react'
import MenuCardContent from '../menu-card-content/MenuCardContent'
import MenuCardTab from '../menu-card-tab/MenuCardTab'
import { useLocation } from "react-router-dom"

const MenuCard = (props) => {
  const location = useLocation();
  const [activetab, setactivetab] = useState(1)
  const scrolling = () => {
    document.getElementById(location.hash.slice(1, location.hash.length)).scrollIntoView({
      behavior: 'smooth',
      block: 'center' 
    })
  }
  useEffect(() => {
    const state = Number(location.state)
    setactivetab(isNaN(state) ? 1 : state)
    if (location.hash === "") {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
    else {
      scrolling();
    }

  }, [location.state])
  return (
    <div className="menu-card" id='menucard'>
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
                    // ref={tab.subtitle}
                    id={tab.subtitle}
                    ids={key + 1}
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
