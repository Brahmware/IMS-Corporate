import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
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

  const [scroll, setScroll] = useState(0);
  const [headerTop, setHeaderTop] = useState(0);
  
  const header = document.querySelector(".header");
  const headerHeight = header.getBoundingClientRect().height;
  
  useEffect(() => {
    setHeaderTop(headerHeight);
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [headerHeight]);

  const handleScroll = () => {
    setScroll(window.scrollY);
  };

  return (
    <React.Fragment>
      <div className={`header ${scroll > headerTop && "shrinked-header"}`}>
        <div className="container">
          <div className="header-left">
            <div className="logo">
              <Link to="/">
                <IMSLogo />
              </Link>
            </div>
            <LiveButton />
          </div>
          <div className="header-right">
            <SearchComponent />
            <FilledButton class={"join-button"} text={"JOIN"} />
            <HamburgerMenu onClickEvent={onCanvasHandler} toggleState={offcanvasShow} />
          </div>
        </div>
      </div>
      <MegaMenu show={offcanvasShow} onclose={onCanvasHandler} headerHeight={headerTop}/>
    </React.Fragment>
  )
}

export default Header;