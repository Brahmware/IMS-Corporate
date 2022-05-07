import React, { useState } from 'react';
import { IMSLogo } from '../../assets/ourlogo';
import FilledButton from '../../components/buttons/FilledButton';
import HamburgerMenu from '../../components/hamburgermenu';
import LiveButton from '../../components/LiveButton';
import SearchComponent from '../../components/searchcomponent';
import MegaMenu from '../../pagegroups/megamenu';
const Header = () => {
  const [offcanvasShow, setOffcanvasShow] = useState(false);

  const onCanvasHandler = () => {
    setOffcanvasShow((prev) => !prev);
  };
  return (
    <React.Fragment>
      <div className="header">
        <div className="container">
          <div className="header-left">
            <div className="logo">
              <IMSLogo />
            </div>
            <LiveButton />
          </div>
          <div className="header-right">
            <SearchComponent />
            <FilledButton class={"primary-button"} text={"JOIN"}/>
            <HamburgerMenu onClickEvent={onCanvasHandler} toggleState={offcanvasShow}/>
          </div>
        </div>
      </div>
      <MegaMenu show={offcanvasShow} onclose={onCanvasHandler}/>
    </React.Fragment>
  )
}

export default Header;