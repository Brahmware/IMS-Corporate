import React from 'react';
import { IMSLogo } from '../../assets/ourlogo';
import HamburgerMenu from '../../components/hamburgermenu';
import JoinButton from '../../components/JoinButton';
import LiveButton from '../../components/LiveButton';
import SearchComponent from '../../components/searchcomponent';
import './header.scss';
const Header = () => {
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
            <JoinButton />
            <HamburgerMenu />
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Header;